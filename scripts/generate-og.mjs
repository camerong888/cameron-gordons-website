// Renders public/og/og-default.png (the social preview) in the site's style:
// white ground, the name and role in ink, the hero board as a line drawing
// with one trace in the accent. Run from the repo root: `npm run og`. Text is
// drawn with system fonts, so the stack names Inter first and falls back to
// Helvetica Neue (macOS) or Liberation Sans (the Playwright image) — look at
// the result after running.
import sharp from "sharp";

const ink = "#1d1d1f";
const ink2 = "#6e6e73";
const accent = "#0071e3";
const line = `stroke="${ink}" stroke-opacity="0.22" stroke-width="2"`;
const font = `font-family="Inter, 'Helvetica Neue', 'Liberation Sans', Arial, sans-serif"`;

// FPGA ball grid with the die's keep-out left clear
const balls = [];
for (let r = 0; r < 7; r++) {
  for (let c = 0; c < 7; c++) {
    if (r >= 2 && r <= 4 && c >= 2 && c <= 4) continue;
    balls.push(`<circle cx="${845 + c * 25}" cy="${240 + r * 25}" r="3" fill="${ink}" fill-opacity="0.16"/>`);
  }
}
// FPGA → edge connector, running off the right edge
const edge = Array.from({ length: 6 }, (_, k) => {
  const y = 250 + 26 * k;
  return `<path d="M1020 ${y} H1110 L1130 ${y + 10} H1150" ${line}/><rect x="1150" y="${y + 4}" width="50" height="12" rx="2" fill="${ink}" fill-opacity="0.3"/>`;
});
// FPGA → DDR above
const ddr = Array.from({ length: 5 }, (_, k) => `<path d="M${860 + 25 * k} 215 V136" ${line}/>`);
// Fan-out to vias on the left
const fan = Array.from({ length: 5 }, (_, k) => {
  const y = 262 + 24 * k;
  return `<path d="M820 ${y} H770" ${line}/><circle cx="764" cy="${y}" r="6" fill="#fff" ${line}/>`;
});

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
<rect width="1200" height="630" fill="#ffffff"/>
<g fill="none" stroke-linecap="round" stroke-linejoin="round">
${edge.join("\n")}
${ddr.join("\n")}
${fan.join("\n")}
<path d="M930 415 V480" ${line}/>
<path d="M980 415 V480" ${line}/>
<path d="M1020 302 H1110 L1130 312 H1150" stroke="${accent}" stroke-width="2.5"/>
<path d="M910 215 V136" stroke="${accent}" stroke-width="2.5"/>
</g>
<rect x="880" y="80" width="160" height="56" rx="6" fill="#ffffff" ${line}/>
<rect x="900" y="480" width="110" height="64" rx="6" fill="#ffffff" ${line}/>
<rect x="820" y="215" width="200" height="200" rx="12" fill="#ffffff" ${line}/>
${balls.join("\n")}
<rect x="887" y="282" width="66" height="66" rx="6" fill="${ink}" fill-opacity="0.04" ${line}/>
<path d="M830 239 V225 H844 Z" fill="${accent}"/>
<text x="90" y="250" ${font} font-size="72" font-weight="700" letter-spacing="-1.5" fill="${ink}">Cameron Gordon</text>
<text x="92" y="318" ${font} font-size="36" font-weight="600" fill="${ink}">Hardware engineer at Draper</text>
<text x="92" y="372" ${font} font-size="30" fill="${ink2}">High-speed digital design</text>
<text x="92" y="412" ${font} font-size="30" fill="${ink2}">for space and defense</text>
<text x="92" y="540" ${font} font-size="26" fill="#0066cc">cameron.gordongames.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og/og-default.png");
console.log("og-default.png written");
