// 
// 
( () => {
    const randomHexColor = () => {
        return `#${(~~(Math.random()*16)).toString(16)}${(~~(Math.random()*16)).toString(16)}${(~~(Math.random()*16)).toString(16)}${(~~(Math.random()*16)).toString(16)}${(~~(Math.random()*16)).toString(16)}${(~~(Math.random()*16)).toString(16)}`;
    };
    const body = document.querySelector('body');
    const btn = document.querySelector('button');
    
    btn.addEventListener('click', () => body.style.backgroundColor = randomHexColor() );
} )()