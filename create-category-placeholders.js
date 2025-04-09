const fs = require('fs');
const path = require('path');

// Directory where the placeholder images will be stored
const categoriesImageDir = path.join(__dirname, 'public', 'images', 'categories');

// Ensure the directory exists
if (!fs.existsSync(categoriesImageDir)) {
  fs.mkdirSync(categoriesImageDir, { recursive: true });
}

// List of categories we need placeholders for
const categories = [
  'digestion',
  'sleep',
  'immunity',
  'energy',
  'womens-health',
  'mens-health'
];

// Copy the placeholder.jpg file for each category
const placeholderPath = path.join(__dirname, 'public', 'images', 'placeholder.jpg');

if (fs.existsSync(placeholderPath)) {
  categories.forEach(category => {
    const targetPath = path.join(categoriesImageDir, `${category}.jpg`);
    fs.copyFileSync(placeholderPath, targetPath);
    console.log(`Created placeholder for ${category}`);
  });
  console.log('All category placeholder images created successfully!');
} else {
  console.error('Source placeholder.jpg not found!');
}
