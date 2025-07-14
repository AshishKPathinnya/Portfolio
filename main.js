var audio=document.getElementById("audioPlayer"),loader=document.getElementById("preloader");function settingtoggle(){document.getElementById("setting-container").classList.toggle("settingactivate"),document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow"),document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow")}function playpause(){!1==document.getElementById("switchforsound").checked?audio.pause():audio.play()}function visualmode(){document.body.classList.toggle("light-mode"),document.querySelectorAll(".needtobeinvert").forEach(function(e){e.classList.toggle("invertapplied")})}window.addEventListener("load",function(){loader.style.display="none",document.querySelector(".hey").classList.add("popup")});let emptyArea=document.getElementById("emptyarea"),mobileTogglemenu=document.getElementById("mobiletogglemenu");function hamburgerMenu(){document.body.classList.toggle("stopscrolling"),document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu"),document.getElementById("burger-bar1").classList.toggle("hamburger-animation1"),document.getElementById("burger-bar2").classList.toggle("hamburger-animation2"),document.getElementById("burger-bar3").classList.toggle("hamburger-animation3")}function hidemenubyli(){document.body.classList.toggle("stopscrolling"),document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu"),document.getElementById("burger-bar1").classList.remove("hamburger-animation1"),document.getElementById("burger-bar2").classList.remove("hamburger-animation2"),document.getElementById("burger-bar3").classList.remove("hamburger-animation3")}const sections=document.querySelectorAll("section"),navLi=document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),mobilenavLi=document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");window.addEventListener("scroll",()=>{let e="";sections.forEach(t=>{let o=t.offsetTop;t.clientHeight,pageYOffset>=o-200&&(e=t.getAttribute("id"))}),mobilenavLi.forEach(t=>{t.classList.remove("activeThismobiletab"),t.classList.contains(e)&&t.classList.add("activeThismobiletab")}),navLi.forEach(t=>{t.classList.remove("activeThistab"),t.classList.contains(e)&&t.classList.add("activeThistab")})}),console.log("%c Designed and Developed by Ashish Pathinnya ","background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;");let mybutton=document.getElementById("backtotopbutton");function scrollFunction(){document.body.scrollTop>400||document.documentElement.scrollTop>400?mybutton.style.display="block":mybutton.style.display="none"}

// Ensure navbar stays visible
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.style.display = 'flex';
        navbar.style.position = 'fixed';
        navbar.style.zIndex = '9999';
    }
});

window.onscroll = function() {
    scrollFunction();
};

function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener("contextmenu", function(e) {
    if ("IMG" === e.target.nodeName) {
        e.preventDefault();
    }
}, false);let Pupils=document.getElementsByClassName("footer-pupil"),pupilsArr=Array.from(Pupils),pupilStartPoint=-10,pupilRangeX=20,pupilRangeY=15,mouseXStartPoint=0,mouseXEndPoint=window.innerWidth,currentXPosition=0,fracXValue=0,mouseYEndPoint=window.innerHeight,currentYPosition=0,fracYValue=0,mouseXRange=mouseXEndPoint-mouseXStartPoint;const mouseMove=e=>{fracXValue=(currentXPosition=e.clientX-mouseXStartPoint)/mouseXRange,fracYValue=(currentYPosition=e.clientY)/mouseYEndPoint;let t=pupilStartPoint+fracXValue*pupilRangeX,o=pupilStartPoint+fracYValue*pupilRangeY;pupilsArr.forEach(e=>{e.style.transform=`translate(${t}px, ${o}px)`})},windowResize=e=>{mouseXEndPoint=window.innerWidth,mouseYEndPoint=window.innerHeight,mouseXRange=mouseXEndPoint-mouseXStartPoint};window.addEventListener("mousemove",mouseMove),window.addEventListener("resize",windowResize);

// Function to open resume URL
function openURL() {
    window.open("src/pdf/Ashish_Pathinnya_Resume.pdf", "_blank");
}

// Add cursor effects
document.addEventListener("DOMContentLoaded", function() {
    const cursorInner = document.getElementById("cursor-inner");
    const cursorOuter = document.getElementById("cursor-outer");
    
    document.addEventListener("mousemove", function(e) {
        cursorInner.style.left = e.clientX + "px";
        cursorInner.style.top = e.clientY + "px";
        cursorOuter.style.left = e.clientX + "px";
        cursorOuter.style.top = e.clientY + "px";
    });
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, .jello, .tech-stack-box, .project-box");
    
    interactiveElements.forEach(element => {
        element.addEventListener("mouseenter", function() {
            cursorInner.classList.add("hover");
            cursorOuter.classList.add("hover");
        });
        
        element.addEventListener("mouseleave", function() {
            cursorInner.classList.remove("hover");
            cursorOuter.classList.remove("hover");
        });
    });
});