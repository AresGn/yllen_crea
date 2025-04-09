# Élégance Dorée - Palette de Couleurs

Cette palette de couleurs "Élégance Dorée" est utilisée dans tout le site Yllen Créa pour créer une atmosphère chaleureuse, élégante et intemporelle.

## Couleurs Principales

| Nom | Code Hexadécimal | Variable CSS | Utilisation |
|-----|-----------------|--------------|-------------|
| **Beige clair** | `#F5EFE0` | `--background-light` | Fond principal, arrière-plans |
| **Noir profond** | `#1A1A1A` | `--text-dark` | Textes principaux et accents |
| **Or brillant** | `#D4AF37` | `--primary-color` | Éléments accentués, CTA, boutons |
| **Or clair** | `#E8CD6D` | `--primary-light` | Survols, variante plus claire |
| **Or foncé** | `#B39227` | `--primary-dark` | Accents forts, survols |
| **Blanc cassé** | `#FDFBF7` | `--background-white` | Arrière-plans secondaires, cartes |
| **Gris anthracite** | `#333333` | `--text-medium` | Textes secondaires, contraste modéré |
| **Gris moyen** | `#666666` | `--text-light` | Textes tertiaires, sous-textes |

## Utilisation dans le Code

Pour utiliser ces couleurs dans votre code CSS :

```css
/* Exemples d'utilisation */
.element {
  background-color: var(--background-light);
  color: var(--text-dark);
  border: 1px solid var(--primary-color);
}

.button {
  background-color: var(--primary-color);
  color: white;
}

.button:hover {
  background-color: var(--primary-light);
}
```

Pour les composants styled-components :

```jsx
const Button = styled.button`
  background-color: var(--primary-color);
  color: white;
  
  &:hover {
    background-color: var(--primary-light);
  }
`;
```

## Accessibilité

Cette palette a été vérifiée pour assurer une accessibilité adéquate :
- Contraste texte/fond suffisant pour la lisibilité
- Distinction claire entre les éléments interactifs et non-interactifs
- Utilisation de couleurs complémentaires pour une meilleure expérience utilisateur

## Optimisation des Images

Pour optimiser les images en accord avec cette palette :
- Appliquer un ton légèrement chaud aux images produits
- Privilégier des arrière-plans neutres dans la gamme des beiges clairs
- Mettre en valeur les produits sur des fonds clairs pour maximiser le contraste 