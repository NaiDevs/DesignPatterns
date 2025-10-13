const fs = require('fs');
import type { Dirent } from 'fs';
const path = require('path');
const child_process = require('child_process');
const { spawnSync } = child_process;
const readline = require('readline');

const IGNORED = new Set(['node_modules', 'dist', '.git', '.vscode']);
const ROOT = process.cwd();

function listFolders(): string[] {
  const entries: Dirent[] = fs.readdirSync(ROOT, { withFileTypes: true });
  return entries
    .filter((e: Dirent) => e.isDirectory() && !IGNORED.has(e.name))
    .map((e: Dirent) => e.name);
}

function listTsFiles(folder: string): string[] {
  const dir = path.join(ROOT, folder);
  if (!fs.existsSync(dir)) return [];
  const entries: Dirent[] = fs.readdirSync(dir, { withFileTypes: true });
  return entries
    .filter((e: Dirent) => e.isFile() && e.name.endsWith('.ts'))
    .map((e: Dirent) => e.name);
}

function question(query: string): Promise<string> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise<string>(resolve => rl.question(query, (ans: string) => { rl.close(); resolve(ans); }));
}

async function main() {
  console.log('=== Patrones de diseño ===\n');

  while (true) {
    const folders = listFolders();
    if (folders.length === 0) {
      console.log('No se encontraron carpetas.');
      return;
    }

    console.log('Selecciona una carpeta (o escribe q para salir):');
    folders.forEach((f, i) => console.log(`${i + 1}. ${f}`));

    const fAnswer = (await question('> ')).trim();
    if (fAnswer.toLowerCase() === 'q') break;
    const fIndex = parseInt(fAnswer, 10) - 1;
    if (isNaN(fIndex) || fIndex < 0 || fIndex >= folders.length) {
      console.log('Selección inválida, inténtalo de nuevo.\n');
      continue;
    }

  const selected: string | undefined = folders[fIndex];
  if (!selected) { console.log('Selección inválida, inténtalo de nuevo.\n'); continue; }
  const files: string[] = listTsFiles(selected);
    if (files.length === 0) {
      console.log('No se encontraron archivos .ts en la carpeta seleccionada.\n');
      continue;
    }

    console.log(`\nArchivos en ${selected}:`);
    files.forEach((f, i) => console.log(`${i + 1}. ${f}`));
    console.log('Elige un archivo para ejecutar (o v para volver):');

    const fileAnswer = (await question('> ')).trim();
    if (fileAnswer.toLowerCase() === 'v') continue;
    const fileIndex = parseInt(fileAnswer, 10) - 1;
    if (isNaN(fileIndex) || fileIndex < 0 || fileIndex >= files.length) {
      console.log('Selección inválida, volviendo al menú.\n');
      continue;
    }

  const fileToRun = path.join(selected as string, files[fileIndex] as string);
    console.log(`\nEjecutando ${fileToRun}...\n`);

    // Ejecutar con ts-node (instalado localmente)
    const res = spawnSync('npx', ['ts-node', fileToRun], { encoding: 'utf8', shell: true });

    if (res.stdout) console.log(res.stdout);
    if (res.stderr) console.error(res.stderr);
    if (res.error) console.error('Error al ejecutar:', res.error.message);

    console.log('\n--- Fin de ejecución ---\n');
    const cont = (await question('Presiona Enter para volver al menú...'));
  }

  console.log('Saliendo.');
}

main().catch(err => console.error(err));
