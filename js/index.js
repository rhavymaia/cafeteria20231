import foods from './foods.js';

let foodsDiv = document.getElementById('foods');

const createFoodCard = (food) => {
  return `<div class='col'>
  <div class="card" style="width: 18rem;">
      <img src="${food.imagem}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${food.nome}</h5>
        <p class="card-text">${food.descricao}</p>
        <a href="#" class="btn btn-primary">R$ ${food.preco}</a>
      </div>
    </div>
  </div>`;
};

for (let food of foods) {
  let card = createFoodCard(food);
  foodsDiv.insertAdjacentHTML('beforeend', card);
}

let formFood = document.getElementById('foodForm');

formFood.onsubmit = (event) => {
  event.preventDefault();
  console.log('Enviou o formulário');

  let food = Object.fromEntries(new FormData(foodForm));

  // Adicionar o item no card.
  let card = createFoodCard(food);
  foodsDiv.insertAdjacentHTML('beforeend', card);

  // Adicionar o item na lista.
  foods.push(food);

  localStorage.setItem('foods', JSON.stringify(foods));

  $('#formFoodModal').modal('toggle');
};
