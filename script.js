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
  });
  document.querySelectorAll('.yearly-plan').forEach(plan => {
    plan.style.display = 'none';
});
}

function showYearlyPlans() {
  document.querySelectorAll('.monthly-plan').forEach(plan => {
      plan.style.display = 'none';
  });

  document.querySelectorAll('.yearly-plan').forEach(plan => {
      plan.style.display = 'block';
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

