import fs from 'fs';
import { load } from 'cheerio';

const html = fs.readFileSync('site.html', 'utf-8');
const $ = load(html);
console.log('Text content:');
$('body').find('*').each(function() {
  if ($(this).children().length === 0) {
    const text = $(this).text().trim();
    if (text) {
      console.log(text);
    }
  }
});
