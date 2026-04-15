const fs = require('fs');
const readline = require('readline');
const { pinyin } = require('pinyin-pro');
const { pinyinToZhuyin } = require('pinyin-zhuyin');

async function processFile() {
  const inputFile = __dirname + '/chinese.txt';
  const outputFile = __dirname + '/zhuyin.txt';

  const fileStream = fs.createReadStream(inputFile);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const outStream = fs.createWriteStream(outputFile);

  for await (const line of rl) {
    if (!line.trim()) {
      outStream.write('\n');
      continue;
    }
    
    // Removing nonZh: 'consecutive' ensures 1:1 character mapping
    const py = pinyin(line, { toneType: 'num', type: 'array' });
    const zhuyinArray = py.map(p => {
      try {
        return pinyinToZhuyin(p) || p;
      } catch (e) {
        return p; // fallback for non-chinese
      }
    });
    
    // Use Zero-width space as separator for safe importing into Anki
    outStream.write(zhuyinArray.join('\u200B') + '\n');
  }

  outStream.end();
  console.log('Conversion complete!');
}

processFile().catch(console.error);
