let sliderindex = 0;
slideshow(slideindex);

function slideshow(){
    let slides = document.getElementsByClassName("slide")

    for (let index = 0; index < slides.length; index++){
        slides[index].display = "none"
    }
    slideindex++

    if(sliderindex > slides.length) {

    }

    slides[slideindex-1] .slide.display = "block"
    setTimeout(slideshow,5000)
}

function NextSlider(slideindex = + 1) {
      console.log(slideindex)
}

function PrevSlider(slideindex = + 1) {
    console.log(sliderindex)
}

NextSlider()

PrevSlider()








