



let currentSlide = 1;
let totalSlide = 4;
let slide = setInterval(function() {next(false);},3000);

function prev(){
    
   

    document.getElementById("slider").style.transition = ".7s";
        currentSlide--;
        openSlide(currentSlide);
    
    if (currentSlide<1) {
        setTimeout(function(){
            
            document.getElementById("slider").style.transition = "0s";
            currentSlide=4;
            openSlide(currentSlide);

        },700)
    }

        clearInterval(slide);
        slide = setInterval(function() {next(false);},3000);

    
    
}

function next(click){
    
   

    document.getElementById("slider").style.transition = ".7s";
        currentSlide++;
        openSlide(currentSlide);
    
    if (currentSlide>totalSlide) {
        setTimeout(function(){

            document.getElementById("slider").style.transition = "0s";
            currentSlide=1;
            openSlide(currentSlide);

        },700)
    }

    if (click===true) {
        clearInterval(slide);
        slide = setInterval(function() {next(false);},3000);

    }
    
}





function openSlide(slideNo){
    let margin = (slideNo)*100;
    document.getElementById("slider").style.marginLeft = -margin +"%";


    let indicators = document.getElementsByClassName("indicator");

    for (let i = 0; i < indicators.length; i++) {

        if((i+1)===slideNo){

            indicators[i].classList.add("active");
        }else{

            indicators[i].classList.remove("active");

        }
            
    }

}


function indicate(slideNo){

    if (slideNo>=1 && slide<=4) {
        
        currentSlide = slideNo;
        document.getElementById("slider").style.transition = ".7s";
    
        openSlide(currentSlide);
    }

    clearInterval(slide);
    slide = setInterval(function() {next(false)},3000);


}


// events
document.getElementById("next").addEventListener("click",function(){
    next(true);
});
document.getElementById("prev").addEventListener("click",function(){
    prev();
});