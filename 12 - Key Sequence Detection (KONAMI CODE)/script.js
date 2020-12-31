const pressed = [];
const secretCode = "2021";

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key)
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)){
        document.write('<h1 style="color:red;text-align:center; position:center">🎉🎊🎉🎊HAPPY NEW YEAR🎊🎉🎊🎉</h1>');
        cornify_add();
        cornify_add();
        cornify_add();
        cornify_add();
        cornify_add();
        
    }
})