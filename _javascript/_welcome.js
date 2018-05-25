document.addEventListener("DOMContentLoaded", locknload);

/**
 * page init function
 * fires on document loaded
 */
function locknload(event){
    textAnimation();
}

function textAnimation(){
    var element = document.getElementById('text-spinner'),
        textArray = element.dataset.text.split(','),
        characterAnimation = 200,
        delayOffset = 1500,
        letterInterval,
        currentIndex;

    // add current text to the loop array
    textArray.push(element.textContent);
    // get this party started
    setTimeout(removeText,delayOffset);
    // animates the text
    function removeText(){
        currentIndex = textArray.indexOf(element.textContent);
        letterInterval = setInterval(()=>{
            if(element.textContent.length > 0){
                element.textContent = element.textContent.substring(0, element.textContent.length - 1);
            }else{
                clearInterval(letterInterval);
                writeText();
            }
        },characterAnimation);
    }

    function writeText(){
        var currentText = (currentIndex === textArray.length - 1) ? textArray[0] : textArray[currentIndex+1];
        letterInterval = setInterval(()=>{
            if(element.textContent.length !== currentText.length){
                element.textContent = currentText.substring(0, element.textContent.length + 1);
            }else{
                clearInterval(letterInterval);
                setTimeout(removeText,delayOffset);
            }
        },characterAnimation);
    }
}