import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import { createServer as createViteServer } from 'vite';
import puppeteer from 'puppeteer';

// Get directory name 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Config
const PORT = 3333;
const ROOT_DIR = path.join(__dirname, '..');
const OUTPUT_FILE = path.join(ROOT_DIR, 'src', 'styles', 'critical.css');
const ROUTES = ['/', '/about', '/products', '/contact'];

async function startServer() {
  const vite = await createViteServer({
    root: ROOT_DIR,
    server: { middlewareMode: true }
  });
  
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url, `http://${req.headers.host}`);
      
      // Use Vite's connect instance as middleware
      vite.middlewares(req, res, async () => {
        res.statusCode = 404;
        res.end('Not found');
      });
    } catch (e) {
      console.error(e);
      res.statusCode = 500;
      res.end('Internal server error');
    }
  }).listen(PORT);
  
  console.log(`Server started at http://localhost:${PORT}`);
  
  return {
    server,
    vite,
    url: `http://localhost:${PORT}`
  };
}

async function extractCriticalCSS(serverUrl, routes) {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  let criticalCSS = '';
  
  for (const route of routes) {
    console.log(`Processing route: ${route}`);
    
    await page.goto(`${serverUrl}${route}`, {
      waitUntil: 'networkidle0',
    });
    
    // Extract critical CSS for the current route
    const pageCriticalCSS = await page.evaluate(() => {
      const styleSheets = Array.from(document.styleSheets);
      let css = '';
      
      for (const sheet of styleSheets) {
        try {
          const rules = sheet.cssRules || sheet.rules;
          for (const rule of rules) {
            css += rule.cssText + '\n';
          }
        } catch (e) {
          console.log('Error accessing stylesheet:', e);
        }
      }
      
      return css;
    });
    
    criticalCSS += `/* Route: ${route} */\n${pageCriticalCSS}\n\n`;
  }
  
  await browser.close();
  
  // Remove duplicates and minimize
  const uniqueRules = new Set();
  const cssWithoutDuplicates = criticalCSS
    .split('\n')
    .filter(line => {
      if (line.trim() === '' || line.includes('/*')) return true;
      if (uniqueRules.has(line)) return false;
      uniqueRules.add(line);
      return true;
    })
    .join('\n');
  
  return cssWithoutDuplicates;
}

async function main() {
  try {
    // Start development server
    const { server, vite, url } = await startServer();
    
    // Wait a bit for the server to fully start
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Extract critical CSS
    const criticalCSS = await extractCriticalCSS(url, ROUTES);
    
    // Save to file
    fs.writeFileSync(OUTPUT_FILE, criticalCSS);
    console.log(`Critical CSS saved to ${OUTPUT_FILE}`);
    
    // Close server
    server.close();
    await vite.close();
    
  } catch (error) {
    console.error('Error extracting critical CSS:', error);
    process.exit(1);
  }
}

main(); 