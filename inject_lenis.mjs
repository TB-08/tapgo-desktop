import fs from 'fs';
import path from 'path';

const dir = 'c:/Work/Go Media/UI UX TapGO/TAP GO DESKTOP';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const css = `
    <!-- Lenis Smooth Scroll CSS -->
    <style>
        html.lenis, html.lenis body { height: auto; }
        .lenis.lenis-smooth { scroll-behavior: auto !important; }
        .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
        .lenis.lenis-stopped { overflow: hidden; }
        .lenis.lenis-scrolling iframe { pointer-events: none; }
    </style>
`;

const js = `
    <!-- Lenis Smooth Scroll JS -->
    <script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"></script>
    <script>
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    </script>
`;

files.forEach(file => {
    // Skip vendor_website.html as it has fixed layout
    if (file === 'vendor_website.html') return;
    
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('lenis.min.js')) return;

    // Inject CSS before </head>
    content = content.replace('</head>', css + '</head>');
    
    // Inject JS before </body>
    content = content.replace('</body>', js + '</body>');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Injected Lenis into ${file}`);
});
