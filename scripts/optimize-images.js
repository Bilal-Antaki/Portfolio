const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputPath, options = {}) {
  const stats = fs.statSync(inputPath);
  const originalSize = stats.size;

  console.log(`\nOptimizing ${path.basename(inputPath)}...`);
  console.log(`Original size: ${(originalSize / 1024).toFixed(1)}KB`);

  try {
    await sharp(inputPath)
      .resize(options.width, options.height, {
        fit: 'cover',
        position: 'center',
        withoutEnlargement: true
      })
      .png({
        quality: options.quality || 85,
        compressionLevel: 9,
        palette: true
      })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`Optimized size: ${(newSize / 1024).toFixed(1)}KB`);
    console.log(`Reduction: ${reduction}%`);

    return { originalSize, newSize, reduction };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public', 'images');

  // Optimize the large Ghibli image
  await optimizeImage(
    path.join(publicDir, 'Sq_pfp_ghibli.png'),
    path.join(publicDir, 'Sq_pfp_ghibli_optimized.png'),
    {
      width: 1024,
      height: 1024,
      quality: 85
    }
  );

  console.log('\n✓ Image optimization complete!');
}

main().catch(console.error);
