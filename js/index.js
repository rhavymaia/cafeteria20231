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

  let nome = document.getElementById('nome');
  let descricao = document.getElementById('descricao');
  let imagem = document.getElementById('imagem');
  let preco = document.getElementById('preco');

  let food = {
    nome: nome.value,
    descricao: descricao.value,
    imagem: imagem.value,
    preco: preco.value,
  };

  let card = createFoodCard(food);
  foodsDiv.insertAdjacentHTML('beforeend', card);

  $('#formFoodModal').modal('toggle');
};
