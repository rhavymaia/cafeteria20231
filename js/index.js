import foods from './foods.js';

let foodsDiv = document.getElementById('foods');

/**
 * Criar card de food.
 *
 * @param {*} food
 * @returns String
 */
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

/**
 * Carregar os itens da lista de Foods.
 */
const loadFoods = () => {
  for (let food of foods) {
    let card = createFoodCard(food);
    foodsDiv.insertAdjacentHTML('beforeend', card);
  }
};

/**
 * Define os valores dos campos de cadastro do Food no formulário.
 *
 * @param {*} nome
 * @param {*} descricao
 * @param {*} imagem
 * @param {*} preco
 */
function setFormValues(nome = '', descricao = '', imagem = '', preco = '') {
  const nomeInput = document.querySelector('#nome');
  const descricaoInput = document.querySelector('#descricao');
  const imagemInput = document.querySelector('#imagem');
  const precoInput = document.querySelector('#preco');

  nomeInput.value = nome;
  descricaoInput.value = descricao;
  imagemInput.value = imagem;
  precoInput.value = preco;
}

const loadFormCreateFood = () => {
  let formFood = document.getElementById('foodForm');

  formFood.onsubmit = (event) => {
    event.preventDefault();
    console.log('Enviou o formulário');

    let food = Object.fromEntries(new FormData(foodForm));

    const identificador = Date.now();
    food.identificador = identificador;

    // Adicionar o item no card.
    let card = createFoodCard(food);
    foodsDiv.insertAdjacentHTML('beforeend', card);

    // Adicionar o item na lista.
    foods.push(food);

    // Reiniciar valores dos campos dos formulários.
    setFormValues();

    localStorage.setItem('foods', JSON.stringify(foods));

    $('#formFoodModal').modal('toggle');
  };
};

// Adicionar a função no escopo da janela em execução.
window.createFoodForm = loadFormCreateFood;

loadFoods();
