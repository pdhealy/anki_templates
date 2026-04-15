const { pinyin } = require('pinyin-pro');
const { pinyinToZhuyin } = require('pinyin-zhuyin');

const text = '別浪費時間。';
const py = pinyin(text, { toneType: 'num', type: 'array', nonZh: 'consecutive' });
console.log(py);
const zhuyinArray = py.map(p => {
  try {
    return pinyinToZhuyin(p);
  } catch (e) {
    return p; // fallback for non-chinese
  }
});
console.log(zhuyinArray);
