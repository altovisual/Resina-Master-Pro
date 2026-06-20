import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convertir import.meta.url a rutas locales
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Requerir sharp dinámicamente para que no falle si no está instalado aún
let sharp;
try {
    const module = await import('sharp');
    sharp = module.default;
} catch (e) {
    console.error('❌ Error: El paquete "sharp" no está instalado.');
    console.log('Por favor, ejecuta el siguiente comando primero:');
    console.log('👉 npm install -D sharp\n');
    process.exit(1);
}

// Configuración de rutas
const ASSETS_DIR = path.join(__dirname, 'src', 'assets');
const BONOS_DIR = path.join(ASSETS_DIR, 'bonos');
const PUBLIC_DIR = path.join(__dirname, 'public');
const SECTIONS_DIR = path.join(__dirname, 'src', 'sections');

// Lista de imágenes pesadas específicas a optimizar y convertir a WebP
const IMAGES_TO_OPTIMIZE = [
    // Hero
    { dir: ASSETS_DIR, file: '4.png', quality: 80 },
    { dir: ASSETS_DIR, file: '6.png', quality: 80 },
    { dir: ASSETS_DIR, file: 'solape.png', quality: 80 },
    { dir: ASSETS_DIR, file: 'cel.png', quality: 80 },
    // Instructor
    { dir: ASSETS_DIR, file: '55.png', quality: 80 },
    // Bonos
    { dir: BONOS_DIR, file: 'box (1).png', quality: 75 },
    { dir: BONOS_DIR, file: 'box (2).png', quality: 75 },
    { dir: BONOS_DIR, file: 'box (4).png', quality: 75 },
    { dir: BONOS_DIR, file: 'box (5).png', quality: 75 },
    { dir: BONOS_DIR, file: 'box (6).png', quality: 75 },
    { dir: BONOS_DIR, file: 'BOX (7).jpg', quality: 75 },
    // Public
    { dir: PUBLIC_DIR, file: 'Resina Express (1).jpg.jpeg', quality: 75 },
    { dir: PUBLIC_DIR, file: 'PORTADA RESINA MASTER PRO.jpg', quality: 75 },
    { dir: PUBLIC_DIR, file: 'portada del curso.jpeg', quality: 75 }
];

async function convertImage(imgInfo) {
    const inputPath = path.join(imgInfo.dir, imgInfo.file);
    if (!fs.existsSync(inputPath)) {
        console.log(`⚠️ Archivo no encontrado, omitiendo: ${imgInfo.file}`);
        return null;
    }

    const fileExt = path.extname(imgInfo.file);
    const fileNameWithoutExt = path.basename(imgInfo.file, fileExt);
    const outputFileName = `${fileNameWithoutExt}.webp`;
    const outputPath = path.join(imgInfo.dir, outputFileName);

    console.log(`⚡ Optimizando ${imgInfo.file} -> ${outputFileName}...`);

    try {
        const statsBefore = fs.statSync(inputPath);
        
        await sharp(inputPath)
            .webp({ quality: imgInfo.quality })
            .toFile(outputPath);

        const statsAfter = fs.statSync(outputPath);
        
        const sizeBefore = (statsBefore.size / 1024 / 1024).toFixed(2);
        const sizeAfter = (statsAfter.size / 1024).toFixed(1);
        const reduction = ((1 - statsAfter.size / statsBefore.size) * 100).toFixed(1);

        console.log(`   ✅ Completado: ${sizeBefore} MB -> ${sizeAfter} KB (-${reduction}%)`);
        return { original: imgInfo.file, webp: outputFileName };
    } catch (err) {
        console.error(`   ❌ Error al procesar ${imgInfo.file}:`, err.message);
        return null;
    }
}

function updateReferences(conversions) {
    console.log('\n🔄 Actualizando referencias en los archivos de código...');
    
    // Obtener todos los archivos en src/sections
    const files = fs.readdirSync(SECTIONS_DIR);
    
    files.forEach(file => {
        if (!file.endsWith('.jsx')) return;
        const filePath = path.join(SECTIONS_DIR, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let updated = false;

        conversions.forEach(conv => {
            if (!conv) return;
            // Buscar referencias a las imágenes originales (ej. '4.png' o "box (1).png")
            // Para evitar falsos positivos, buscamos con la extensión
            const regex = new RegExp(escapeRegExp(conv.original), 'g');
            if (regex.test(content)) {
                content = content.replace(regex, conv.webp);
                updated = true;
                console.log(`   ✏️ Referencia corregida en ${file}: ${conv.original} -> ${conv.webp}`);
            }
        });

        if (updated) {
            fs.writeFileSync(filePath, content, 'utf8');
        }
    });

    // También actualizar en index.html o archivos similares si es necesario
    const indexHtmlPath = path.join(__dirname, 'index.html');
    if (fs.existsSync(indexHtmlPath)) {
        let content = fs.readFileSync(indexHtmlPath, 'utf8');
        let updated = false;
        conversions.forEach(conv => {
            if (!conv) return;
            const regex = new RegExp(escapeRegExp(`/${conv.original}`), 'g');
            if (regex.test(content)) {
                content = content.replace(regex, `/${conv.webp}`);
                updated = true;
                console.log(`   ✏️ Referencia corregida en index.html: /${conv.original} -> /${conv.webp}`);
            }
        });
        if (updated) {
            fs.writeFileSync(indexHtmlPath, content, 'utf8');
        }
    }
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function run() {
    console.log('🚀 Iniciando optimización masiva de imágenes para Resina Master Pro...\n');
    
    const conversions = [];
    for (const img of IMAGES_TO_OPTIMIZE) {
        const result = await convertImage(img);
        if (result) {
            conversions.push(result);
        }
    }

    updateReferences(conversions);
    
    console.log('\n🎉 ¡Proceso finalizado!');
    console.log('Las imágenes optimizadas en formato .webp han sido creadas.');
    console.log('Las referencias en tus componentes React han sido actualizadas.');
    console.log('\n💡 Nota: Puedes eliminar los archivos originales (.png/.jpg) una vez verifiques que todo carga perfectamente en modo dev.');
}

run();
