let SelectFontFamily = document.querySelector('#SelectFontFamily');
let fontSizeMuinus   = document.querySelector('.fontSize .left');
let displayFontSize   = document.querySelector('.fontSize .display');
let fontSizePlus   = document.querySelector('.fontSize .right');
let fontColor   = document.querySelector('.fontColor #selectColor');
let fontWeight  = document.querySelector('.fontSize .fontWeight');
let fontStyle   = document.querySelector('.fontSize .fontStyle');

let writeArea   = document.querySelector('.writeArea #textInputArea');

let fontSize = parseInt(window.getComputedStyle(writeArea).fontSize) ;
displayFontSize.textContent =  fontSize+''+'px';

SelectFontFamily.addEventListener('change',function(e){
    writeArea.style.fontFamily= e.target.value;
})


fontSizeMuinus.addEventListener('click',function(){
    
    fontSize -- ;
    if (fontSize == 12) {
        fontSizeMuinus.classList.add('Disabled');
    }

    if(fontSize < 23){
        fontSizePlus.classList.remove('Disabled');
    }
    displayFontSize.textContent = fontSize+''+'px' ;
    writeArea.style.fontSize= `${fontSize}px`;
})

fontSizePlus.addEventListener('click',function(){

    fontSize ++
    if (fontSize == 23) {
        fontSizePlus.classList.add('Disabled');
    }
    if (fontSize >12 ) {
        fontSizeMuinus.classList.remove('Disabled');
    }

    displayFontSize.textContent = fontSize+''+'px';
    writeArea.style.fontSize= `${fontSize}px`;
})

fontWeight.addEventListener('click' , function(){
    if (writeArea.style.fontWeight !== 'bold') {
        writeArea.style.fontWeight= 'bold' ;
    }else{
        writeArea.style.fontWeight= 'initial' ;
    }
})

fontStyle.addEventListener('click' , function(){
    if (writeArea.style.fontStyle !== 'italic') {
        writeArea.style.fontStyle= 'italic' ;
    }else{
        writeArea.style.fontStyle= 'initial' ;
    }
})

fontColor.addEventListener('change' , function(e){
    writeArea.style.color = e.target.value;
})