let text = prompt('Write text');
console.log(text);
let count = 0;
for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == ' ') { count++ };
}
console.log(`Кількість пробілів = ${count}`);