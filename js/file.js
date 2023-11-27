//toggle menu button 
const nav=document.querySelector('.nav');
const menu=document.querySelector('.menu').addEventListener('click',function toggleMenu(e){
e.preventDefault()
    this.classList.toggle('active')
    nav.classList.toggle('active')
})

// ------------------
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });
// ---------------chang the back video click on the glary---------------------
const bgVideoList=document.querySelectorAll('.bg-video');
const trailers=document.querySelectorAll('.trailer');
const models=document.querySelectorAll('.model');
function changeVideo(name){

    bgVideoList.forEach(video=>{
        video.classList.remove('active')
        if (video.classList.contains(name)) {
            video.classList.add('active')
        }
    })
    //mapping model name change
    models.forEach(model=>{
        model.classList.remove('active')
        if (model.classList.contains(name)) {
            model.classList.add('active')
        }
    })
    //mapping trailers name change
    trailers.forEach(video=>{
        video.classList.remove('active')
        if (video.classList.contains(name)) {
            video.classList.add('active')
        }
    })
}
  //-------video play and pause----------
    function pauseVide(){
       
        bgVideoList.forEach(video=>{
            video.pause()
        })
        togglePlay()

    }
    function playVideo(){
        bgVideoList.forEach(video=>{
            video.play()
        })
        togglePlay()
    }

    function togglePlay(){
        const play=document.querySelector('.play')
        const pause=document.querySelector('.pause')
        play.classList.toggle('active')
        pause.classList.toggle('active')
    }