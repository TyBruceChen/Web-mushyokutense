function videoInit(){
    const video = document.createElement('p')
    var parent = document.getElementsByTagName('header')[0]

    video.textContent = 'hello'
    parent.appendChild(video)
}

function videoControl(){
    const video = document.getElementById('mushyokutense-video')
    const button1 = document.getElementById('videoControl')
    if (video.style.display == 'block'){
        video.style.display = 'none'
        button1.textContent = 'Display background Anime'
    }
    else{
        video.style.display = 'block'
        button1.textContent = 'Hind background Anime'
    }

}

function videoVoice(){
    const video = document.getElementById('mushyokutense-video')
    const button2 = document.getElementById('videoVoice')
   if (video.muted == 'Mute'){
    video.muted = !video.muted
    button2.textContent = 'Unmute background music'
   }
   else{
    video.muted = !video.muted
    button2.textContent = 'Mute background music'
   }
}

document.addEventListener('DOMContentLoaded', function(){
    //load functions
    videoInit()
})

console.log(document.getElementById('mushyokutense-video').style.display)