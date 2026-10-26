let count = 0;
let total = 0;
const countEl = document.querySelector('#count');
const totalEl = document.querySelector('#total');
document.querySelectorAll('.add').forEach(button => {
  button.addEventListener('click', () => {
  const price = Number(button.dataset.price)
    total = total + price
    totalEl.textContent = total;
    count = count + 1
    countEl.textContent = count;
  }
  );
}
);
//document.querySelectorAll('.remove').forEach(button => {
  //button.addEventListener('click', () => {
    //const price = Number(button.dataset.price)
    //total = total - price
    //totalEl.textContent = total;
    //count = count - 1
    //countEl.textContent = count;
  //}
  //);
//}
//);
