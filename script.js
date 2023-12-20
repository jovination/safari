new SimpleBar(document.querySelector('.wrapper'));

//pricing -option

document.addEventListener('DOMContentLoaded', function () {
  let monthlyOp = document.querySelector('#monthly');
  let yearlyOp = document.querySelector('#yearly');

  monthlyOp.onclick = () => {
      monthlyOp.classList.add('active');
      yearlyOp.classList.remove('active');
  };

  yearlyOp.onclick = () => {
      monthlyOp.classList.remove('active');
      yearlyOp.classList.add('active');
  };
});
