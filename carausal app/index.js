let flag=0;

function controller(x){
    flag+=x;
    slideshow(flag);
}

slideshow(flag);

function slideshow(num){
    let slides=document.getElementsByClassName('slider');

    if(num==slides.length){
        num=0;
    }
    if(num<0){
        num=slides.length-1;
      }

    for(let ele of slides){
        ele.style.display="none";
    }
    slides[num].style.display="block";
    flag= num;
}