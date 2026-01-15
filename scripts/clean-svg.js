const fs = require('fs');
const path = require('path');

function cleanSVG(inputPath, outputPath) {
  console.log(`Cleaning ${inputPath}...`);

  let svg = fs.readFileSync(inputPath, 'utf8');

  // Remove XML declaration and comments
  svg = svg.replace(/<\?xml[^>]*\?>/g, '');
  svg = svg.replace(/<!--[\s\S]*?-->/g, '');

  // Remove sodipodi and inkscape namespaces and elements
  svg = svg.replace(/xmlns:sodipodi="[^"]*"/g, '');
  svg = svg.replace(/xmlns:inkscape="[^"]*"/g, '');
  svg = svg.replace(/sodipodi:[^=]*="[^"]*"/g, '');
  svg = svg.replace(/inkscape:[^=]*="[^"]*"/g, '');
  svg = svg.replace(/<sodipodi:namedview[\s\S]*?<\/sodipodi:namedview>/g, '');
  svg = svg.replace(/<defs[\s\S]*?<\/defs>/g, '<defs/>');

  // Remove metadata
  svg = svg.replace(/<metadata[\s\S]*?<\/metadata>/g, '');

  // Clean up extra whitespace and newlines
  svg = svg.replace(/\s+/g, ' ');
  svg = svg.replace(/>\s+</g, '><');
  svg = svg.trim();

  // Add back clean formatting for the opening SVG tag
  svg = svg.replace(/<svg([^>]*)>/, function(match, attrs) {
    // Extract only essential attributes
    const viewBox = attrs.match(/viewBox="[^"]*"/)?.[0] || '';
    const width = attrs.match(/width="[^"]*"/)?.[0] || '';
    const height = attrs.match(/height="[^"]*"/)?.[0] || '';
    const version = 'version="1.1"';
    const xmlns = 'xmlns="http://www.w3.org/2000/svg"';

    return `<svg ${width} ${height} ${viewBox} ${version} ${xmlns}>`;
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
