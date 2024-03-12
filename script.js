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

const faq__header = document.querySelectorAll('.faq__header');

faq__header.forEach((header) => {
  header.addEventListener('click', () => {
    // Toggle the 'is__open' class
    header.classList.toggle('is__open');

    // Toggle the plus and minus icons
    const icon = header.querySelector("i");
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // Close other open headers if any
    const openHeaders = document.querySelectorAll('.faq__header.is__open');
    openHeaders.forEach((openHeader) => {
      if (openHeader !== header) {
        openHeader.classList.remove('is__open');
        // Change the icon to plus for other open headers
        openHeader.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
    });
  });
});
