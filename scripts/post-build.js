import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function postBuild() {
  const sourceDir = path.join(__dirname, '..', '.output', 'public');
  const targetDir = path.join(__dirname, '..', 'dist', 'public');

  try {
    // Check if source directory exists
    if (await fs.pathExists(sourceDir)) {
      // Ensure target directory exists
      await fs.ensureDir(targetDir);
      
      // Copy files
      await fs.copy(sourceDir, targetDir);
      console.log('Successfully copied public files to dist/public');
    } else {
      console.log('No public directory found in .output. Skipping copy.');
    }
  } catch (err) {
    console.error('Error during post-build process:', err);
    process.exit(1);
  }
}

postBuild();