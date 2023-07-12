
//share
const horizontal_scroll_div = document.querySelectorAll('.horizontal_scroll');
   


horizontal_scroll_div.forEach(element=>{
        element.addEventListener('wheel', (event) => {
          return
          if(element.classList.contains('_bottom')) return
            element.scrollLeft += event.deltaY;
       });
})


function findClosestIndex(array, value) {
  let closestIndex = 0;
  let closestDifference = Math.abs(value - array[0]);

  for (let i = 1; i < array.length; i++) {
    const difference = Math.abs(value - array[i]);

    if (difference < closestDifference) {
      closestIndex = i;
      closestDifference = difference;
    }
  }

  return closestIndex;
}






let isMouseDown = [false,false];
let startX=[undefined,undefined];
let scrollLeft=[undefined,undefined];
let timeout_h  
horizontal_scroll_div.forEach((element,i)=>{
  element.addEventListener('mousedown', (event) => {
    isMouseDown[i] = true;
    startX[i] = event.pageX - element.offsetLeft;
    scrollLeft[i] = element.scrollLeft;
  });
  
  element.addEventListener('mouseup', () => {

    isMouseDown[i] = false;
    const array = []; 


    element.querySelectorAll('.slider .item').forEach((e,i)=>array.push(element.clientWidth * i))
    clearTimeout(timeout_h)
     timeout_h=setTimeout(()=>{
      element.scrollLeft=findClosestIndex(array,element.scrollLeft)*element.clientWidth
      document.querySelectorAll('[s=comments] .nav span').forEach((e,i)=>e.classList.remove('active'))
      document.querySelectorAll('[s=comments] .nav span')[findClosestIndex(array,element.scrollLeft)].classList.add('active')
   },600)
    
  });
  
   element.addEventListener('mouseleave', () => {
    isMouseDown[i] = false;
    const array = []; 
    element.querySelectorAll('.slider .item').forEach((e,i)=>array.push(element.clientWidth * i))
    clearTimeout(timeout_h)
    timeout_h=setTimeout(()=>{
      element.scrollLeft=findClosestIndex(array,element.scrollLeft)*element.clientWidth
    },600)
  });
  
  element.addEventListener('mousemove', (event) => {
    if (!isMouseDown[i]) return;
    event.preventDefault();
    const x = event.pageX - element.offsetLeft;
    const walk = (x - startX[i]) * 2; 
    element.scrollLeft = scrollLeft[i] - walk;
     const array = []; 
    element.querySelectorAll('.slider .item').forEach((e,i)=>array.push(element.clientWidth * i))
    clearTimeout(timeout_h)
     timeout_h=setTimeout(()=>{
      element.scrollLeft=findClosestIndex(array,element.scrollLeft)*element.clientWidth
     },500)

     timeout_h=setTimeout(()=>{
      element.scrollLeft=findClosestIndex(array,element.scrollLeft)*element.clientWidth
     },1000)
   
  });
})


window.addEventListener('resize',()=>{
    const array=[]
    const element=document.querySelector('[s=comments] .horizontal_scroll')
    document.querySelectorAll('[s=comments] .slider .item').forEach((e,i)=>array.push(element.clientWidth * i))
    clearTimeout(timeout_h)
    timeout_h=setTimeout(()=>{
       element.scrollLeft=findClosestIndex(array,element.scrollLeft)*element.clientWidth
    },600)

  

      document.querySelectorAll('[s=portfolio] .nav span').forEach((e,i)=>e.classList.remove('active'))
      document.querySelectorAll('[s=portfolio] .nav span')[0].classList.add('active')
      document.querySelector('[s=portfolio] .s-c').style.marginLeft=`0%` 
      slide_port(null,'dont_move')
  
    
})







//clients animation 
//const clients_slider=document.querySelectorAll('[s=clients] .content .slider')

const clients_v_sliders_1=document.querySelectorAll('[s=clients] .content .slider.s1 .v-slider .slide')
let last_animated_s_1=0
let clients_s_interval_1
document.querySelectorAll('[s=clients] .content .slider.s1 .slide').forEach(e=>e.style.transform="translateY(0px)")
clients_s_interval_1=setInterval(()=>{
      let new_value=parseInt(window.getComputedStyle(clients_v_sliders_1[last_animated_s_1]).transform.split(',')[5])-40
      clients_v_sliders_1[last_animated_s_1].classList.add('animate')
	    setTimeout(()=>clients_v_sliders_1[last_animated_s_1].style.transform=`matrix(1, 0, 0, 1, 0, ${new_value})`,500)
        setTimeout(()=>clients_v_sliders_1[last_animated_s_1].classList.remove('animate'),1000)
        setTimeout(()=>{
        last_animated_s_1++
        if (last_animated_s_1 == clients_v_sliders_1.length) {
           last_animated_s_1=0
           if (-new_value == (clients_v_sliders_1[last_animated_s_1].children.length - 1) * 40) {
                document.querySelectorAll('[s=clients] .content .slider.s1 .slide').forEach(e=>e.style.transform="translateY(0px)")
           }
        }
      },1000)
},3000)



const clients_v_sliders_2=document.querySelectorAll('[s=clients] .content .slider.s2 .v-slider .slide')
let last_animated_s_2=0
let clients_s_interval_2
document.querySelectorAll('[s=clients] .content .slider.s2 .slide').forEach(e=>e.style.transform="translateY(0px)")
clients_s_interval_2=setInterval(()=>{
      let new_value=parseInt(window.getComputedStyle(clients_v_sliders_2[last_animated_s_2]).transform.split(',')[5])-40
      clients_v_sliders_2[last_animated_s_2].classList.add('animate')
	    setTimeout(()=>clients_v_sliders_2[last_animated_s_2].style.transform=`matrix(1, 0, 0, 1, 0, ${new_value})`,500)
        setTimeout(()=>clients_v_sliders_2[last_animated_s_2].classList.remove('animate'),1000)
        setTimeout(()=>{
        last_animated_s_2++
        if (last_animated_s_2 == clients_v_sliders_2.length) {
           last_animated_s_2=0
           if (-new_value == (clients_v_sliders_2[last_animated_s_2].children.length - 1) * 40) {
                document.querySelectorAll('[s=clients] .content .slider.s2 .slide').forEach(e=>e.style.transform="translateY(0px)")
           }
        }
      },1000)
},3000)





const clients_v_sliders_3=document.querySelectorAll('[s=clients] .content .slider.s3 .v-slider .slide')
let last_animated_s_3=0
let clients_s_interval_3
document.querySelectorAll('[s=clients] .content .slider.s3 .slide').forEach(e=>e.style.transform="translateY(0px)")
clients_s_interval_3=setInterval(()=>{
      let new_value=parseInt(window.getComputedStyle(clients_v_sliders_3[last_animated_s_3]).transform.split(',')[5])-40
      clients_v_sliders_3[last_animated_s_3].classList.add('animate')
	    setTimeout(()=>clients_v_sliders_3[last_animated_s_3].style.transform=`matrix(1, 0, 0, 1, 0, ${new_value})`,500)
        setTimeout(()=>clients_v_sliders_3[last_animated_s_3].classList.remove('animate'),1000)
        setTimeout(()=>{
        last_animated_s_3++
        if (last_animated_s_3 == clients_v_sliders_3.length) {
           last_animated_s_3=0
           if (-new_value == (clients_v_sliders_3[last_animated_s_3].children.length - 1) * 40) {
                document.querySelectorAll('[s=clients] .content .slider.s3 .slide').forEach(e=>e.style.transform="translateY(0px)")
           }
        }
      },1000)
},3000)



const clients_v_sliders_4=document.querySelectorAll('[s=clients] .content .slider.s4 .v-slider .slide')
let last_animated_s_4=0
let clients_s_interval_4
document.querySelectorAll('[s=clients] .content .slider.s4 .slide').forEach(e=>e.style.transform="translateY(0px)")
clients_s_interval_4=setInterval(()=>{
      let new_value=parseInt(window.getComputedStyle(clients_v_sliders_4[last_animated_s_4]).transform.split(',')[5])-40
      clients_v_sliders_4[last_animated_s_4].classList.add('animate')
	    setTimeout(()=>clients_v_sliders_4[last_animated_s_4].style.transform=`matrix(1, 0, 0, 1, 0, ${new_value})`,500)
        setTimeout(()=>clients_v_sliders_4[last_animated_s_4].classList.remove('animate'),1000)
        setTimeout(()=>{
        last_animated_s_4++
        if (last_animated_s_4 == clients_v_sliders_4.length) {
           last_animated_s_4=0
           if (-new_value == (clients_v_sliders_4[last_animated_s_4].children.length - 1) * 40) {
                document.querySelectorAll('[s=clients] .content .slider.s4 .slide').forEach(e=>e.style.transform="translateY(0px)")
           }
        }
      },1000)
},3000)






function slide_port(to,dont_move){

   let current_index
   let visible_indexs=[]

   document.querySelectorAll('[s=portfolio] .nav span').forEach((e,i)=>{
      if(window.getComputedStyle(e).display=="flex")  visible_indexs.push(e)
   })

   for (let i = 0; i < visible_indexs.length; i++) {
      if(visible_indexs[i].classList.contains('active')){
        current_index=i
      }
   }

   if(!dont_move)  current_index=to=='right' ? current_index += 1 : current_index -= 1

  if(current_index  == visible_indexs.length - 1){
       document.querySelector('[s=portfolio] .content .portfolio-c .float_nav.right').style.display="none"
   }else{
       document.querySelector('[s=portfolio] .content .portfolio-c .float_nav.right').style.display="flex"
  }

  if(current_index  == 0){
      document.querySelector('[s=portfolio] .content .portfolio-c .float_nav.left').style.display="none"
  }else{
      document.querySelector('[s=portfolio] .content .portfolio-c .float_nav.left').style.display="flex"
  }
   
   

    if(!dont_move)   document.querySelector('[s=portfolio] .s-c').style.marginLeft=`-${current_index*document.querySelector('[s=portfolio]').clientWidth}px` 
    document.querySelectorAll('[s=portfolio] .nav span').forEach((e,i)=>e.classList.remove('active'))
    document.querySelectorAll('[s=portfolio] .nav span')[current_index].classList.add('active')
    
    

}





document.querySelectorAll('[s=portfolio] .nav span').forEach((e,i)=>{
	e.addEventListener('click',()=>{
    let element=document.querySelector('[s=portfolio] .content .portfolio-c .s-c')
		document.querySelectorAll('[s=portfolio] .nav span').forEach((e,i)=>e.classList.remove('active'))
        e.classList.add('active')
        element.style.marginLeft=`-${i*100}%`
       // document.querySelector('[s=portfolio] .content .portfolio-c').scrollLeft=`${i*document.querySelector('[s=portfolio] .content .portfolio-c').clientWidth}`
       slide_port(null,'dont_move')
   })
})


document.querySelectorAll('[s=comments] .nav span').forEach((e,i)=>{
  e.addEventListener('click',()=>{

    document.querySelectorAll('[s=comments] .nav span').forEach((e,i)=>e.classList.remove('active'))
      e.classList.add('active')
      document.querySelector('[s=comments] .slider').style.marginLeft=`${i*-100}%` 

   })


})




function service_details(e){
  document.querySelectorAll('.float-c .content').forEach(e=>e.style.display="none")
  document.querySelector('.float-c .service-detail').style.display="block"

  document.querySelector('.float-c .service-detail img').src=e.querySelector('img').src
  document.querySelector('.float-c .service-detail h3.title').innerHTML=e.querySelector('h3').innerHTML
  document.querySelector('.float-c .service-detail p').innerHTML=e.querySelector('span').innerHTML
  document.querySelector('.float-c .sercice-name').innerHTML=e.querySelector('h3').innerHTML
  document.querySelector('.float-c').classList.add('show')
  
  document.querySelector('.container .float-c .f_portfolio').scrollTo(0,0)
}


function show_cartas(highlight) {
    document.querySelectorAll('.float-c .content').forEach(e=>e.style.display="none")
    document.querySelector('.float-c .cartas_abonatorias').style.display="block"
    

    // highlight.classList

    document.querySelectorAll('.float-c .cartas_abonatorias .item').forEach(e=>e.classList.remove('active'))

    if (highlight) {
      const item=document.querySelectorAll('.float-c .cartas_abonatorias .item')[highlight]
      item.classList.add('active')
      document.querySelector('.container .float-c .f_portfolio').scrollTo(0,item.offsetTop - item.querySelector('.top').clientHeight)
    }
    

    document.querySelector('.float-c').classList.add('show')

    if (!highlight) document.querySelector('.container .float-c .f_portfolio').scrollTo(0,0)
    

}

function show_port_details(element) {

  document.querySelectorAll('.float-c .content').forEach(e=>e.style.display="none")
    document.querySelector('.float-c .project-detail').style.display="block"

    for (var i = 0; i < element.parentElement.children.length; i++) {

          if (element.parentElement.children[i].tagName=="H3") {
               document.querySelector('.float-c .project-detail h3').innerHTML=element.parentElement.children[i].innerHTML
          }

          if (element.parentElement.children[i].tagName=="IMG") {
              document.querySelector('.float-c .project-detail img').src=element.parentElement.children[i].src
          }

          if (element.parentElement.children[i].tagName=="SPAN") {
              document.querySelector('.float-c .project-detail p').innerHTML=element.parentElement.children[i].innerHTML
          }

          if (element.parentElement.children[i].className=="_btn") {
              document.querySelector('.float-c .project-detail div').setAttribute('onclick',element.parentElement.children[i].getAttribute('onclick'))
          }



    }



 setTimeout(()=>document.querySelector('.float-c').classList.add('show'),100)
 document.querySelector('.container .float-c .f_portfolio').scrollTo(0,0)
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
        document.querySelector('[s=pro-count] .content').classList.add('active')
   }

   if(window.pageYOffset > 200 && document.querySelector('nav').classList.contains('active')){
       document.querySelector('nav').classList.remove('active')
   }

   if(window.pageYOffset > document.querySelector('[s=clients]').offsetTop - 120){
       document.querySelector('nav').classList.add('float')
   }else{
       document.querySelector('nav').classList.remove('float')
   }
      

})


function show_prewiew(element) {

   
   element.classList.toggle('active')
   if(element.classList.contains('active'))  document.querySelector('.container .float-c .f_portfolio').scrollTo(0,element.offsetTop - element.querySelector('.top').clientHeight)
}


window.addEventListener('load',()=>{
    if(window.pageYOffset > (document.querySelector('[s=pro-count]').offsetTop - (window.innerHeight / 2) - (document.querySelector('[s=pro-count]').clientHeight / 2)) && !pro_count_index){
        animateProCount()
        document.querySelector('[s=pro-count] .content').classList.add('active')
   }
})

function go_to(e){
  if(e.querySelector('a')) e.querySelector('a').click()
  document.querySelector('.float-c').classList.remove('show')
}











