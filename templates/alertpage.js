function blink(){
    $(document).ready(()=>{
        $("#alert-message").fadeOut(500);
        $("#alert-message").fadeIn(500);
    });
}
setInterval(blink,1000);

