const fs = require('fs');
const path = require('path');
const { imageSize } = require('image-size');

// Check dimensions of local PNG files
const pngFiles = [
  'public/THE DIGITAL DUDE-01.png',
  'public/THE DIGITAL DUDE-02.png',
  'public/THE DIGITAL DUDE-04.png'
];

console.log('Image Dimensions:');
pngFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const dimensions = imageSize(file);
    console.log(`${path.basename(file)}: ${dimensions.width}x${dimensions.height}`);
  } else {
    console.log(`${file}: File not found`);
  }
});

// Check dimensions of SVG files
const svgFiles = [
  'public/logo.svg',
  'public/og-image.svg',
  'public/images/avatar.svg'
];

console.log('\nSVG Files (dimensions should be checked in file):');
svgFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`${path.basename(file)}: Exists`);
    // Read first few lines to check for width/height
    const content = fs.readFileSync(file, 'utf8');
    console.log(`  Content preview: ${content.substring(0, 100)}...`);
  } else {
    console.log(`${file}: File not found`);
  }
});