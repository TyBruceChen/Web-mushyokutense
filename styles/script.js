function videoInit(){
    var video = document.createElement('video')
    var parent = document.getElementById('video')
    var videosrc = document.createElement('source')

    video.autoplay = "true"
    video.loop = "true"
    video.muted = true  //requirment for chrome66
    video.volume = '0.75'
    video.style.opacity = '0.7'
    video.style.width = '100%'
    video.setAttribute('id','mushyokutense-video')

    videosrc.src = "static/mushyokutense.mp4"
    videosrc.type = 'video/mp4'

    parent.appendChild(video)
    video.appendChild(videosrc)
    document.getElementById('mushyokutense-video').play()
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
    console.log(document.getElementById('mushyokutense-video').style.display)
})

