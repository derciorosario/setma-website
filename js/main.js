
// clients animation 
const clients_v_sliders=document.querySelectorAll('[s=clients] .content .slider .v-slider .slide')
const clients_slider=document.querySelectorAll('[s=clients] .content .slider')

let last_animated_s=0
let clients_s_interval


document.querySelectorAll('[s=clients] .content .slide').forEach(e=>e.style.transform="translateY(0px)")
clients_s_interval=setInterval(()=>{
      let new_value=parseInt(window.getComputedStyle(clients_v_sliders[last_animated_s]).transform.split(',')[5])-40

      clients_v_sliders[last_animated_s].classList.add('animate')
	    setTimeout(()=>clients_v_sliders[last_animated_s].style.transform=`matrix(1, 0, 0, 1, 0, ${new_value})`,500)
      setTimeout(()=>clients_v_sliders[last_animated_s].classList.remove('animate'),1000)
      setTimeout(()=>{

        last_animated_s++

        if (last_animated_s == clients_v_sliders.length) {
           last_animated_s=0

           if (-new_value == (clients_v_sliders[last_animated_s].children.length - 1) * 40) {
                document.querySelectorAll('[s=clients] .content .slide').forEach(e=>e.style.transform="translateY(0px)")
           }
        }

      },1000)

      

      

},3000)



document.querySelectorAll('[s=portfolio] .nav span').forEach((e,i)=>{
	e.addEventListener('click',()=>{

		document.querySelectorAll('[s=portfolio] .nav span').forEach((e,i)=>e.classList.remove('active'))
        e.classList.add('active')
	    document.querySelector('[s=portfolio] .s-c').style.marginLeft=`${i*-100}%` 

   })
})


document.querySelectorAll('[s=comments] .nav span').forEach((e,i)=>{
  e.addEventListener('click',()=>{

    document.querySelectorAll('[s=comments] .nav span').forEach((e,i)=>e.classList.remove('active'))
      e.classList.add('active')
      document.querySelector('[s=comments] .slider').style.marginLeft=`${i*-100}%` 

   })


})






function show_port_details(element) {

    for (var i = 0; i < element.children.length; i++) {
          if (element.children[i].tagName=="H3") {
               document.querySelector('.float-c .content h3').innerHTML=element.children[i].innerHTML
          }

          if (element.children[i].tagName=="IMG") {
              document.querySelector('.float-c .content img').src=element.children[i].src
          }

          if (element.children[i].tagName=="SPAN") {
              document.querySelector('.float-c .content p').innerHTML=element.children[i].innerHTML
          }

    }



 document.querySelector('.float-c').classList.add('show')

}


document.body.addEventListener('scroll',(e)=>{
    e.preventDefault()
})



let left_menu_btn=document.querySelector('.left_menu_btn')


document.querySelector('.left_menu').addEventListener('mouseleave',(e)=>{
   e.target.classList.remove('show')

})


document.querySelectorAll('.left_menu a').forEach(e=>{
    e.addEventListener('click',(e)=>{
         document.querySelector('.left_menu').classList.remove('show')
    })
})



document.querySelector('.left_menu_btn').addEventListener('mouseover',(e)=>{
   e.target.classList.add('move')
   document.querySelector('.left_menu').classList.add('show')
})

document.querySelector('.left_menu_btn').addEventListener('mouseleave',(e)=>{
   e.target.classList.remove('move')
})




let pro_count_index=0
let pro_count_interval
let pro_count_end=1000

function animateProCount() {

     pro_count_interval=setInterval(()=>{
        document.querySelectorAll('[s=pro-count] .box span').forEach(e=>{
               if (parseInt(e.getAttribute('end')) >=  pro_count_index) {
                  e.innerHTML=pro_count_index
               }
        })
        pro_count_index++

        if (pro_count_index >= pro_count_end) clearInterval(pro_count_interval)
    },15)

}








const pages=document.querySelectorAll('[p]')
const nav_right_links=document.querySelectorAll('.left_menu a')

window.addEventListener('scroll',()=>{
    const windowY=window.pageYOffset

    if(windowY  +  40 >= window.innerHeight){
        left_menu_btn.classList.add('active')
    }else{
        left_menu_btn.classList.remove('active')
    }

    for (let i = pages.length - 1; i >= 0; i--) {
        if(windowY + window.innerHeight/1.8 >= pages[i].offsetTop){
            nav_right_links.forEach(e=>e.classList.remove('active'))
            nav_right_links[i].classList.add('active') 
            break
            
        }else{
            nav_right_links[i].classList.remove('active')
        }
    }

   if(windowY > (document.querySelector('[s=pro-count]').offsetTop - (window.innerHeight / 2) - (document.querySelector('[s=pro-count]').clientHeight / 2)) && !pro_count_index){
        animateProCount()
   }


})











