/* NAV SCROLLSPY  */ 
  $(window).scroll(function(){
     $('nav').toggleClass('scrolled',$(this).scrollTop() >200); 
    });

/* NAV SCROLLSPY  END */

/* NAV TOGGLE ICON */ 

let btn = document.querySelector(".toggle");
                    let icon = btn.querySelector(".fa-bars");

                    btn.onclick = function(){
                      if(icon.classList.contains("fa-bars")){
                        icon.classList.replace("fa-bars","fa-times");
                      }

                      else{
                        icon.classList.replace("fa-times","fa-bars");
                      }
                    }

/* NAV TOGGLE ICON END*/ 


/* IMAGE GALLERY */

  $(document).ready(function() {
                  $('.image-link').magnificPopup({
                       type: 'image',
                       mainClass: 'mfp-with-zoom',
                  
                       zoom: {
                           enabled: true, 
                           duration: 600, 
                           easing: 'ease-in-out',
                           opener: function(openerElement) {
                                   return openerElement.is('img') ? openerElement : openerElement.find('img');
                                }
                             }

                       });
               });

  /* NAV SCROLLSPY  END*/



  /** PRE LOADER **/

    setTimeout(function(){
            $('.loader_bg').fadeToggle();
        }, 2000);
  /** PRE LOADER END  **/




/*    SCROLL TOP     */
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})   


