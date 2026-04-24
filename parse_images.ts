import fs from 'fs';

const html = fs.readFileSync('site.html', 'utf-8');
const imgRegex = /<img[^>]+src="([^">]+)"/g;
let match;
const images = [];
while ((match = imgRegex.exec(html)) !== null) {
  images.push(match[1]);
}
console.log(JSON.stringify(images, null, 2));
