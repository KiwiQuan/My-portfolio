const display = document.getElementById("display")

function clearDisplay(){
    display.value = ''
    }

function appendToDisplay(input){
    
    if(display.value === 'Error'){
        clearDisplay()
    }
    display.value += input
}



function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
display.value = 'Error'
    }

}