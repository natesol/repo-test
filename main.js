// 
// 
( () => {
    const randomHexColor = () => {
        return `#${(~~(Math.random()*16)).toString(16)}${(~~(Math.random()*16)).toString(16)}${(~~(Math.random()*16)).toString(16)}${(~~(Math.random()*16)).toString(16)}${(~~(Math.random()*16)).toString(16)}${(~~(Math.random()*16)).toString(16)}`;
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