function bgchange(){
    const val="0123456789ABCDEF";
    let start="#";
    for(let i=0;i<6;i++){
        start=start+val[Math.floor(Math.random()*16)];
    }
    document.body.style.backgroundColor=start;
}
document.querySelector("body").addEventListener("keypress",bgchange);
document.body.addEventListener("pointerdown", bgchange);

