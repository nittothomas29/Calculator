function button_click(user_input){
   
    document.getElementById("display_screen").value=document.getElementById("display_screen").value+user_input;
}
function clear_button_click(){
    document.getElementById("display_screen").value=""
}
function equal_button_click(){
    var text=document.getElementById("display_screen").value
    var result=eval(text)
    document.getElementById("display_screen").value=result
}