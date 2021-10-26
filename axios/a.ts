import fetch from './index';
function* idMaker() {
    let index = 0;
    while (true) { yield index++; }
}

const gen = idMaker(); // "Generator { }"

console.log(gen.next().value);
// 0
console.log(gen.next().value);
// 1
console.log(gen.next().value);

export const login = (data: any) => fetch('api/entries', data);
