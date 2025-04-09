const fs = require('fs');
const path = require('path');

// Directory where the placeholder images will be stored
const herbsImageDir = path.join(__dirname, 'public', 'images', 'herbs');

// Ensure the directory exists
if (!fs.existsSync(herbsImageDir)) {
  fs.mkdirSync(herbsImageDir, { recursive: true });
}

// List of herbs we've added
const herbs = [
  // Immune herbs
  'elderberry',
  'echinacea',
  'holy-basil',
  
  // Specialty herbs
  'ginger',
  'chamomile',
  'red-raspberry-leaf',
  
  // Additional medicinal herbs
  'milk-thistle',
  'astragalus',
  'rhodiola',
  
  // Traditional medicinal herbs
  'valerian',
  'marshmallow-root',
  'hawthorn',
  
  // Adaptogenic herbs
  'ashwagandha',
  'reishi-mushroom',
  'schisandra'
];

// Copy the placeholder.jpg file for each herb
const placeholderPath = path.join(__dirname, 'public', 'images', 'placeholder.jpg');

if (fs.existsSync(placeholderPath)) {
  herbs.forEach(herb => {
    const targetPath = path.join(herbsImageDir, `${herb}.jpg`);
    fs.copyFileSync(placeholderPath, targetPath);
    console.log(`Created placeholder for ${herb}`);
  });
  console.log('All placeholder images created successfully!');
} else {
  console.error('Source placeholder.jpg not found!');
}
