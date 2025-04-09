import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const sourceDir = path.join(__dirname, '../public/assets/images');
const quality = 80; // Quality setting for JPEG and WebP (0-100)
const formats = ['jpg', 'jpeg', 'png', 'webp'];
const sizes = {
  thumbnail: 200,
  medium: 800,
  large: 1600
};

// Get all image files recursively
function getImageFiles(dir) {
  let results = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      results = results.concat(getImageFiles(itemPath));
    } else {
      const ext = path.extname(itemPath).toLowerCase().substring(1);
      if (formats.includes(ext)) {
        results.push(itemPath);
      }
    }
  }
  
  return results;
}

// Process a single image
async function optimizeImage(imagePath) {
  try {
    const ext = path.extname(imagePath).toLowerCase();
    const filename = path.basename(imagePath, ext);
    const dir = path.dirname(imagePath);
    
    // Process original image with better compression
    const optimizedPath = path.join(dir, `${filename}${ext}`);
    const image = sharp(imagePath);
    
    // Get image metadata
    const metadata = await image.metadata();
    
    // Process original size image
    let optimized;
    if (ext === '.jpg' || ext === '.jpeg') {
      optimized = image.jpeg({ quality, progressive: true });
    } else if (ext === '.png') {
      optimized = image.png({ compressionLevel: 9, quality });
    } else if (ext === '.webp') {
      optimized = image.webp({ quality });
    }
    
    await optimized.toFile(optimizedPath + '.temp');
    fs.renameSync(optimizedPath + '.temp', optimizedPath);
    
    console.log(`Optimized: ${path.relative(sourceDir, optimizedPath)}`);
    
    // Create WebP version (if the original is not WebP)
    if (ext !== '.webp') {
      const webpPath = path.join(dir, `${filename}.webp`);
      await image.webp({ quality }).toFile(webpPath);
      console.log(`Created WebP: ${path.relative(sourceDir, webpPath)}`);
    }
    
    // Create responsive images for large images only
    if (metadata.width > 800) {
      // Create medium size
      const mediumPath = path.join(dir, `${filename}-medium${ext}`);
      await sharp(imagePath)
        .resize(sizes.medium)
        .toFile(mediumPath);
      console.log(`Created medium: ${path.relative(sourceDir, mediumPath)}`);
      
      // Create medium WebP
      const mediumWebpPath = path.join(dir, `${filename}-medium.webp`);
      await sharp(imagePath)
        .resize(sizes.medium)
        .webp({ quality })
        .toFile(mediumWebpPath);
      console.log(`Created medium WebP: ${path.relative(sourceDir, mediumWebpPath)}`);
    }
    
  } catch (err) {
    console.error(`Error processing image ${imagePath}:`, err);
  }
}

async function main() {
  try {
    console.log('Starting image optimization...');
    
    if (!fs.existsSync(sourceDir)) {
      console.error(`Source directory does not exist: ${sourceDir}`);
      return;
    }
    
    const imageFiles = getImageFiles(sourceDir);
    console.log(`Found ${imageFiles.length} images to optimize`);
    
    // Process images in batches to avoid memory issues
    const batchSize = 5;
    for (let i = 0; i < imageFiles.length; i += batchSize) {
      const batch = imageFiles.slice(i, i + batchSize);
      await Promise.all(batch.map(optimizeImage));
    }
    
    console.log('Image optimization complete!');
  } catch (err) {
    console.error('Error during optimization:', err);
  }
}

main(); 