#!/usr/bin/env node
// Extract a live website's "style DNA" (fonts, type scale, colors, radii, spacing, motion) as JSON.
//   node style-dna.mjs <url> [--screenshot out.png]
// Uses the Playwright that is installed globally or in the project. One page load per site; be polite.
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
let playwright;
try { playwright = require('playwright'); } catch { playwright = require(require.resolve('playwright', { paths: [process.cwd(), '/usr/lib/node_modules', '/usr/local/lib/node_modules'] })); }

const url = process.argv[2];
if (!url || url === '--help' || url === '-h') { console.log('usage: node style-dna.mjs <url> [--screenshot out.png]'); process.exit(url ? 0 : 2); }
const shotIdx = process.argv.indexOf('--screenshot');
const shot = shotIdx > 0 ? process.argv[shotIdx + 1] : null;

const browser = await playwright.chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => page.goto(url, { waitUntil: 'load', timeout: 45000 }));
  await page.waitForTimeout(1500);
  if (shot) await page.screenshot({ path: shot });
  const dna = await page.evaluate(() => {
    const vis = el => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
    const cs = el => getComputedStyle(el);
    const fam = f => f.split(',')[0].replace(/["']/g, '').trim();
    const pick = (sel, n = 40) => [...document.querySelectorAll(sel)].filter(vis).slice(0, n);
    const count = arr => { const m = {}; arr.forEach(x => { if (x) m[x] = (m[x] || 0) + 1; }); return Object.entries(m).sort((a, b) => b[1] - a[1]); };
    const px = v => Math.round(parseFloat(v) * 10) / 10;
    const textEls = pick('h1,h2,h3,h4,p,li,a,button,span,label', 600).filter(e => e.childElementCount === 0 && e.textContent.trim().length > 1);
    const sizeByWeight = count(textEls.map(e => px(cs(e).fontSize))).slice(0, 12).map(([s, c]) => ({ px: +s, count: c }));
    const body = pick('p', 60);
    const role = sel => { const e = pick(sel, 1)[0]; if (!e) return null; const s = cs(e); return { family: fam(s.fontFamily), size: px(s.fontSize), weight: s.fontWeight, lineHeight: s.lineHeight === 'normal' ? 'normal' : +(parseFloat(s.lineHeight) / parseFloat(s.fontSize)).toFixed(2), tracking: s.letterSpacing, transform: s.textTransform }; };
    const families = count(textEls.map(e => fam(cs(e).fontFamily))).slice(0, 5).map(([f, c]) => ({ family: f, count: c }));
    const bodyStyle = body.length ? (() => { const s = cs(body[0]); return { size: px(s.fontSize), lineHeight: s.lineHeight === 'normal' ? 'normal' : +(parseFloat(s.lineHeight) / parseFloat(s.fontSize)).toFixed(2), measureCh: Math.round(body[0].getBoundingClientRect().width / (parseFloat(s.fontSize) * 0.5)) }; })() : null;
    const color = c => c && c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent' ? c : null;
    const bg = color(cs(document.body).backgroundColor) || color(cs(document.documentElement).backgroundColor) || 'rgb(255, 255, 255)';
    const textColors = count(textEls.map(e => cs(e).color)).slice(0, 6).map(([c, n]) => ({ color: c, count: n }));
    const surfaces = count(pick('section,div,header,footer,nav,main,article', 800).map(e => color(cs(e).backgroundColor))).slice(0, 8).map(([c, n]) => ({ color: c, count: n }));
    const ctas = pick('a[class*=button i],a[class*=btn i],button,[role=button]', 30).map(e => ({ bg: color(cs(e).backgroundColor), color: cs(e).color, radius: cs(e).borderRadius, padding: cs(e).padding, size: px(cs(e).fontSize), weight: cs(e).fontWeight }));
    const radii = count(pick('*', 1500).map(e => cs(e).borderRadius).filter(r => r && r !== '0px')).slice(0, 8).map(([r, n]) => ({ radius: r, count: n }));
    const shadows = count(pick('*', 1500).map(e => cs(e).boxShadow).filter(s => s && s !== 'none')).slice(0, 4).map(([s, n]) => ({ shadow: s, count: n }));
    const transitions = count(pick('*', 1500).map(e => cs(e).transitionDuration).filter(d => d && d !== '0s')).slice(0, 6).map(([d, n]) => ({ duration: d, count: n }));
    const easings = count(pick('*', 1500).map(e => cs(e).transitionTimingFunction).filter(t => t && t !== 'ease')).slice(0, 4).map(([t, n]) => ({ easing: t, count: n }));
    const sections = pick('section,main > div,header', 40);
    const sectionPadding = count(sections.map(e => cs(e).paddingTop).filter(p => p !== '0px')).slice(0, 6).map(([p, n]) => ({ padding: p, count: n }));
    const maxWidths = count(pick('*', 1500).map(e => cs(e).maxWidth).filter(w => w && w !== 'none' && w.endsWith('px'))).slice(0, 5).map(([w, n]) => ({ maxWidth: w, count: n }));
    const imgs = pick('img,video,picture,canvas,svg', 300);
    const area = innerWidth * Math.max(document.documentElement.scrollHeight, innerHeight);
    const mediaArea = imgs.reduce((a, e) => { const r = e.getBoundingClientRect(); return a + r.width * r.height; }, 0);
    return {
      title: document.title, lang: document.documentElement.lang,
      fonts: { families, h1: role('h1'), h2: role('h2'), body: bodyStyle, nav: role('nav a'), button: role('button, a[class*=button i]') },
      sizeDistribution: sizeByWeight,
      color: { background: bg, textColors, surfaces, ctas: ctas.slice(0, 5) },
      shape: { radii, shadows },
      layout: { sectionPaddingTop: sectionPadding, maxWidths, pageHeightPx: document.documentElement.scrollHeight, mediaCoverage: +(mediaArea / area).toFixed(2), linkCount: document.querySelectorAll('a').length },
      motion: { transitions, easings, usesWebGL: !!document.querySelector('canvas'), prefersReducedMotionCSS: [...document.styleSheets].some(ss => { try { return [...ss.cssRules].some(r => r.media && /reduced-motion/.test(r.media.mediaText)); } catch { return false; } }) },
    };
  });
  console.log(JSON.stringify({ url, capturedAt: new Date().toISOString(), viewport: '1440x900', ...dna }, null, 1));
} catch (e) {
  console.error(JSON.stringify({ url, error: String(e).slice(0, 300) }));
  process.exitCode = 1;
} finally { await browser.close(); }
