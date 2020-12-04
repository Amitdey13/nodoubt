nav = document.querySelector('header');
h = screen.height
nav.style.height = h%100 + 10 + 'px';
//pattern[1].style.height = h/2 + 'px';

tagA = document.querySelector('.tagA')
tagB = document.querySelector('.tagB')
tagC = document.querySelector('.tagC')
tagImage = document.querySelector('.tag-image')
tags = [
    ["Say","Goodbye","To Your Doubts"],
    ["Doubt","Equals","Knowledge Gain"],
    ["Stuck","Get","Solution Here"]
]
tagImages = [
    "../media/images/clipart1.png",
    "../media/images/clipart2.png",
    "../media/images/clipart3.png"
]
i = 1
display = () => {
    setInterval(
        ()=>{
            tagA.innerHTML=tags[i][0]
            tagC.innerHTML=tags[i][1]
            tagB.innerHTML=tags[i][2]
            tagImage.src = tagImages[i]
            i++;
            if(i>2){
               i = 0 
            }
        },
        3000
    )
}

start = document.querySelector('.start')
start.addEventListener("onfocus", display())
start.style.height = (h - (h%100 + 10)) + 'px'