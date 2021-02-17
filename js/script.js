
const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click', () => { 

    if (navBtn.children[0].innerHTML ==='<i class="fas fa-times"></i>') {
    navBtn.children[0].innerHTML = '<i class="fas fa-bars"></i>';
  } else {
    navBtn.children[0].innerHTML = '<i class="fas fa-times"></i>';
  }
   navDiv.classList.toggle('showNav');
    const navActiveBtn=document.querySelector('.nav-active1')

    navActiveBtn.addEventListener('click',function(){
    navActiveBtn.classList.remove('showNav')
    })

});
// about section 
//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");


  btn.addEventListener("click", function () {
   

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});





