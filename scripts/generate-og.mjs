import sharp from "sharp";
const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
<rect width="1200" height="630" fill="#0a0f14"/>
<g stroke="#1c2732" stroke-width="1">${Array.from({length:27},(_,i)=>`<line x1="${i*44}" y1="0" x2="${i*44}" y2="630"/>`).join("")}${Array.from({length:15},(_,i)=>`<line x1="0" y1="${i*44}" x2="1200" y2="${i*44}"/>`).join("")}</g>
<g stroke="#e8a33d" stroke-width="3" fill="none" opacity="0.65">
<path d="M 840 90 H 1000 L 1060 150 H 1160"/>
<path d="M 800 200 H 940 L 1000 260 H 1160"/>
<path d="M 860 320 H 980 L 1040 380 H 1160"/>
<path d="M 900 440 H 1000 L 1060 500 H 1160"/>
</g>
<g fill="none" stroke="#e8a33d" stroke-width="3" opacity="0.8">
<circle cx="840" cy="90" r="10"/><circle cx="800" cy="200" r="10"/><circle cx="860" cy="320" r="10"/><circle cx="900" cy="440" r="10"/>
</g>
<g fill="#2dd4a8"><circle cx="1060" cy="150" r="7"/><circle cx="1000" cy="260" r="7"/><circle cx="1040" cy="380" r="7"/></g>
<text x="90" y="180" font-family="DejaVu Sans Mono, monospace" font-size="26" fill="#2dd4a8" letter-spacing="6">// HARDWARE ENGINEER</text>
<text x="86" y="290" font-family="DejaVu Sans, sans-serif" font-size="86" font-weight="bold" fill="#e6edf3">Cameron Gordon</text>
<text x="90" y="370" font-family="DejaVu Sans, sans-serif" font-size="34" fill="#94a3b1">High-speed digital design for space &amp; defense</text>
<text x="90" y="430" font-family="DejaVu Sans, sans-serif" font-size="34" fill="#94a3b1">FPGAs · High-speed memory · Mission-critical PCBs</text>
<text x="90" y="540" font-family="DejaVu Sans Mono, monospace" font-size="26" fill="#e8a33d">camerongordon.io</text>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile("public/og/og-default.png");
console.log("og-default.png written");
