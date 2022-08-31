let head=document.getElementById("header");
let logo=document.querySelector("header .logo");
let logoDark=document.querySelector("header .logoDark");
let progress=document.querySelectorAll('.progress span');
let aboutRight=document.querySelector('.about-container .right');
let about=document.getElementById('about');
let portfolio=document.getElementById('portfolio');
let services=document.getElementById('services');
let price=document.getElementById('price');
let blog=document.getElementById('blog');
let contact=document.getElementById('contact');
// ================================================================================
// HIDE LODAING AND STORE IN SESSION STORAGE
let loading=document.getElementById('loading')
if(sessionStorage!=null){
    loading.classList.add(sessionStorage.loading)
}
setTimeout(()=>{
    loading.classList.add("loading-close")
    sessionStorage.setItem("loading","loading-close")
},4000)
// OPEN AND CLOSE BAR
document.querySelector('#bar-icon').addEventListener("click",()=>{
    document.querySelector('.linkes-items').classList.toggle('linkes-items-open')
    document.querySelector('#bar-icon').classList.toggle('bar-close')
})
document.querySelector('.linkes-items').addEventListener("click",()=>{
    document.querySelector('.linkes-items').classList.toggle('linkes-items-open')
    document.querySelector('#bar-icon').classList.toggle('bar-close')
})
// auto write in home page
let x=1;
const autoWrite=document.getElementById('auto');
const autowritee=()=>{
    const title="SUCCESS "
    const title2="SUCCESS "
    autoWrite.innerText=title.slice(0,x);
    x++;
    if(title.length<x){
        x=1;
    }
};
const stoop=setInterval(autowritee,300)

// ==============================================================
// ============= about story // title watch story 
let body=document.getElementById("body")
let story=document.getElementById('about-story');
story.addEventListener("click",()=>{
    let storyPop=document.createElement("div")
    storyPop.className="story-pop"
    body.appendChild(storyPop)
    // set and add frame to storyPop
    let videoPop=document.createElement("iframe")
    videoPop.src="videos/Google_ Project Fi - Design Reel from oddfellows on Vimeo.html"
    storyPop.appendChild(videoPop)
    body.style.overflow="hidden"
    // close storyPop
    let btnClosestory=document.createElement("div");
    btnClosestory.className="close-imgPop";
    btnClosestory.innerHTML="X";
    btnClosestory.addEventListener("click",()=>{
        storyPop.remove();
        body.style.overflow=""
    })
    // add close to storyPop
    storyPop.appendChild(btnClosestory)
})

// ==============================================================
// ============= PORTFOLIO popImg ===================
let btnOpenPop=document.querySelectorAll('.portfolio-box section .icon-photo');
// on click any one 
btnOpenPop.forEach((eo)=>{
    eo.addEventListener("click",(e)=>{
        // body fixed
        body.style.overflow="hidden"
        let img=e.target.parentElement.parentElement.querySelector('img');
        let imgPop=document.createElement("div")
        imgPop.className="img-pop"
        // app imgPop to page
        body.appendChild(imgPop)
        let photo=document.createElement("img");
        photo.src=img.src
        // add photo in imgPop
        imgPop.appendChild(photo)
        // set close imgPop
        let btnClosePop=document.createElement("div")
        btnClosePop.className="close-imgPop";
        btnClosePop.innerHTML="X";
        // add close to imgPop
        imgPop.appendChild(btnClosePop)
        btnClosePop.addEventListener("click",()=>{
            imgPop.remove()
            body.style.overflow=""
        })
    })
})

// HEADER LINKES CHANGES WHEN SCROLL
window.onscroll=function(){
    if(scrollY >=100){
        head.classList.add("header-scroll");
        logoDark.style.display="block"
        logo.style.display="none"
    }
    else{
        head.classList.remove("header-scroll");
        logoDark.style.display="none"
        logo.style.display="block"
    }
    if(scrollY>= aboutRight.offsetTop - 630){
        progress.forEach((element)=>{
            element.style.width= element.dataset.width;
        })
    }else{
        progress.forEach((element)=>{
            element.style.width= "0%";
        })
    }
    // items-links active
    if(scrollY <=about.offsetTop ){
        a1.classList.add("active-link")
        a2.classList.remove("active-link")
        a3.classList.remove("active-link")
        a4.classList.remove("active-link")
        a5.classList.remove("active-link")
        a6.classList.remove("active-link")
        a7.classList.remove("active-link")
    }
    if(scrollY >=about.offsetTop -115){
        a1.classList.remove("active-link")
        a2.classList.add("active-link")
        a3.classList.remove("active-link")
        a4.classList.remove("active-link")
        a5.classList.remove("active-link")
        a6.classList.remove("active-link")
        a7.classList.remove("active-link")
    }
    if(scrollY >=portfolio.offsetTop -110){
        a1.classList.remove("active-link")
        a2.classList.remove("active-link")
        a3.classList.add("active-link")
        a4.classList.remove("active-link")
        a5.classList.remove("active-link")
        a6.classList.remove("active-link")
        a7.classList.remove("active-link")
    }
    if(scrollY >=services.offsetTop -110){
        a1.classList.remove("active-link")
        a2.classList.remove("active-link")
        a3.classList.remove("active-link")
        a4.classList.add("active-link")
        a5.classList.remove("active-link")
        a6.classList.remove("active-link")
        a7.classList.remove("active-link")
    }
    if(scrollY >=price.offsetTop -115){
        a1.classList.remove("active-link")
        a2.classList.remove("active-link")
        a3.classList.remove("active-link")
        a4.classList.remove("active-link")
        a5.classList.add("active-link")
        a6.classList.remove("active-link")
        a7.classList.remove("active-link")
    }
    if(scrollY >=blog.offsetTop -115){
        a1.classList.remove("active-link")
        a2.classList.remove("active-link")
        a3.classList.remove("active-link")
        a4.classList.remove("active-link")
        a5.classList.remove("active-link")
        a6.classList.add("active-link")
        a7.classList.remove("active-link")
    }
    if(scrollY >=contact.offsetTop -115){
        a1.classList.remove("active-link")
        a2.classList.remove("active-link")
        a3.classList.remove("active-link")
        a4.classList.remove("active-link")
        a5.classList.remove("active-link")
        a6.classList.remove("active-link")
        a7.classList.add("active-link")
    }
}
