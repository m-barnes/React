const NOTES = [
  'c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab', 'a', 'bb', 'b'
];

const KEY_TO_NOTE = {
  z:'c', s:'db', x:'d', d:'eb', c:'e', v:'f', g:'gb', b:'g', h:'ab', n:'a', j:'bb', m:'b',
};

const NOTE_TO_KEY = {
  c:'z', db:'s', d:'x', eb:'d', e:'c', f:'v', gb:'g', g:'b', ab:'h', a:'n', bb:'j', b:'m',
};

const VALID_BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
const VALID_WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const VALID_KEYS=[...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];

export { NOTES, KEY_TO_NOTE, NOTE_TO_KEY, VALID_KEYS,};
