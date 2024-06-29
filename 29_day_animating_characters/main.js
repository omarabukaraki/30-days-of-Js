function generateColor() {
    let char = 'abcdef123456789';
    let color = [];
    for (let i = 0; i < 3; i++) {
        let c = Math.floor(Math.random() * char.length);
        for (let index = 0; index < 2; index++) {
            color.push(char[c]);
        }
    }
    return `#${color.join('')}`;
}


const fontsFamily = ["Verdana, Geneva, Tahoma, sans-serif", "cursive", "fantasy", "monospace", "sans-serif", "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", "Georgia, 'Times New Roman', Times, serif", "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", "Arial, Helvetica, sans-serif", "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", "'Times New Roman', Times, serif", "'Courier New', Courier, monospace", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"];
let h3 = document.querySelector('.container h3');
const container = document.querySelector('.container');
const spanAll = document.querySelectorAll('span');
const spanContainer = document.querySelector('.spanContainer');
container.style.backgroundColor = generateColor();


let index = 0;
setInterval(() => {
    index++;
    if (index === fontsFamily.length - 1) {
        index = 0;
    }
    const spanAll = document.querySelectorAll('span');
    spanAll.forEach((sp) => {
        sp.style.cssText = `opacity:0;color:${generateColor()};font-family:${fontsFamily[index]};`;
    });
    container.style.cssText = `background-color:${generateColor()};`;
}, 3000);


for (let index = 0; index < h3.innerText.length; index++) {
    let span = document.createElement('span');
    span.innerText = h3.innerText[index];
    span.style.cssText = `color:${generateColor()};opacity:0`;
    spanContainer.append(span);
}


