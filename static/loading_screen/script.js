let colors
let colorText
let key
let loading = document.getElementsByClassName("loading__anim")[0]

const colorChange = () => {
    colors = document.getElementById("colors")
    colorText = colors.value
    colors.onkeydown = function(e){
        key = e.key
       
    }
    
}
colorChange()
$("#colors").change(function(){
    colorChange()
    $("#colorText").text(colorText)
    if (key === "Enter"){
        loading.style.borderLeftColor = colorText
        loading.style.borderTopColor = colorText
        colors.value = ""
    } 
    

})


