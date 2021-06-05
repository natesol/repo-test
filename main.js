// 
// 
( () => {
    const randomHex = (b = 16) => {
        return (~~(Math.random()*b)).toString(16)
    };
    const randomHexColor = () => {
        return `#${randomHex()}${randomHex()}${randomHex()}${randomHex()}${randomHex()}${randomHex()}`;
    };
    const body = document.querySelector('body');
    const btn = document.querySelector('button');
    const placeHolder = document.querySelector('#bg-clr');
    
    btn.addEventListener('click', () => {
        const bgColor = randomHexColor();

        body.style.backgroundColor = bgColor;
        placeHolder.innerHTML = bgColor;
    });
} )()