new SimpleBar(document.querySelector('.wrapper'));

//pricing -option

document.addEventListener('DOMContentLoaded', function () {
  let monthlyOp = document.querySelector('#monthly');
  let yearlyOp = document.querySelector('#yearly');

  monthlyOp.onclick = () => {
      monthlyOp.classList.add('active');
      yearlyOp.classList.remove('active');
      showMonthlyPlans();

  };

  yearlyOp.onclick = () => {
      monthlyOp.classList.remove('active');
      yearlyOp.classList.add('active');
      showYearlyPlans();

  };
  showMonthlyPlans();
});

function showMonthlyPlans() {
  document.querySelectorAll('.monthly-plan').forEach(plan => {
      plan.style.display = 'block';
      plan.style.opacity = '1';

  });
  document.querySelectorAll('.yearly-plan').forEach(plan => {
    plan.style.display = 'none';
    plan.style.opacity = '0';

});
}

function showYearlyPlans() {
  document.querySelectorAll('.monthly-plan').forEach(plan => {
      plan.style.display = 'none';
      plan.style.opacity = '0';

  });

  document.querySelectorAll('.yearly-plan').forEach(plan => {
      plan.style.display = 'block';
      plan.style.opacity = '1';

  });
}


//container package when clicked
function priceContainer(price__container){
  var containers = document.querySelectorAll('.price__container');
  containers.forEach(function (c) {
    c.classList.remove('clicked');
  });

  // Add 'clicked' class to the clicked container
  price__container.classList.add('clicked');
}

//FAQS accordion
const faq__header = document.querySelectorAll('.faq__header');

faq__header.forEach ((faq__header) => {
  faq__header.addEventListener('click', () => {

    if(faq__header.classList.contains('is__open')){
      faq__header.classList.remove('is__open');
    }
    else{
      const faq__header__is__open = document.querySelectorAll('.is__open');
      faq__header__is__open.forEach((faq__header__is__open) => {
        faq__header__is__open.classList.remove('is__open');
      });
      faq__header.classList.add('is__open');
    }
  })
})