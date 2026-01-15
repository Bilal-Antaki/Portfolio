const fs = require('fs');
const path = require('path');

function cleanSVG(inputPath, outputPath) {
  console.log(`Cleaning ${inputPath}...`);

  let svg = fs.readFileSync(inputPath, 'utf8');

  // Remove XML declaration
  svg = svg.replace(/<\?xml[^>]*\?>/g, '');

  // Remove comments
  svg = svg.replace(/<!--[\s\S]*?-->/g, '');

  // Remove sodipodi:namedview element completely
  svg = svg.replace(/<sodipodi:namedview[\s\S]*?\/>/g, '');

  // Remove defs content but keep empty defs
  svg = svg.replace(/<defs[^>]*>[\s\S]*?<\/defs>/g, '<defs/>');

  // Remove metadata
  svg = svg.replace(/<metadata[\s\S]*?<\/metadata>/g, '');

  // Remove all inkscape and sodipodi namespace declarations and attributes
  svg = svg.replace(/xmlns:inkscape="[^"]*"\s*/g, '');
  svg = svg.replace(/xmlns:sodipodi="[^"]*"\s*/g, '');
  svg = svg.replace(/xmlns:xlink="[^"]*"\s*/g, '');
  svg = svg.replace(/\s+inkscape:[a-z-]+="[^"]*"/gi, '');
  svg = svg.replace(/\s+sodipodi:[a-z-]+="[^"]*"/gi, '');
  svg = svg.replace(/\s+xml:space="[^"]*"/g, '');

  // Clean up extra whitespace
  svg = svg.replace(/\s+/g, ' ');
  svg = svg.replace(/>\s+</g, '><');
  svg = svg.trim();

  // Rebuild the SVG tag with only essential attributes
  svg = svg.replace(/<svg[^>]*>/, function(match) {
    const viewBoxMatch = match.match(/viewBox="([^"]*)"/);
    const widthMatch = match.match(/width="([^"]*)"/);
    const heightMatch = match.match(/height="([^"]*)"/);

    const viewBox = viewBoxMatch ? `viewBox="${viewBoxMatch[1]}"` : '';
    const width = widthMatch ? `width="${widthMatch[1]}"` : '';
    const height = heightMatch ? `height="${heightMatch[1]}"` : '';

    return `<svg ${width} ${height} ${viewBox} version="1.1" xmlns="http://www.w3.org/2000/svg">`;
  });

  // Write cleaned SVG
  fs.writeFileSync(outputPath, svg);

  const originalSize = fs.statSync(inputPath).size;
  const newSize = fs.statSync(outputPath).size;
  const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);

  console.log(`Original: ${(originalSize / 1024).toFixed(1)}KB`);
  console.log(`Cleaned: ${(newSize / 1024).toFixed(1)}KB`);
  console.log(`Reduction: ${reduction}%`);
}

// Clean both logo files
const publicDir = path.join(__dirname, '..', 'public', 'images');

cleanSVG(
  path.join(publicDir, 'Portfolio_Logo_Optimized.svg'),
  path.join(publicDir, 'Portfolio_Logo_Clean.svg')
);

console.log('\n');

cleanSVG(
  path.join(publicDir, 'Portfolio_Logo_Smile_Optimized.svg'),
  path.join(publicDir, 'Portfolio_Logo_Smile_Clean.svg')
);

console.log('\nDone! Created clean versions of both logos.');
