// traigo las anclas de los productos del shop con sus imagenes para insertarle las imagenes desde javascript
const trooperImg = document.querySelector('.imgTrooper');
const pokemonImg = document.querySelector('.imgPokemon');
const imgHP = document.querySelector('.imgHP');

// traigo el contenedor de los textos de los productos y luego sus hijos (h4, h3, p, etc)
const trooper_descriptionContainer = document.querySelector('.descriptionTrooperContainer');
const pokemon_descriptionContainer = document.querySelector('.descriptionPokemonContainer');
const HP_descriptionContainer = document.querySelector('.descriptionHarryPotterContainer');
const hpTag = document.querySelector('.harryPotterTagClass');
const hpName = document.querySelector('.harryPotterNameClass');
const hpPrice = document.querySelector('.harryPotterPriceClass');
const hpCuotas = document.querySelector('.harryPotterCuotasClass');

// traigo el contenedor principal del carrito de compras
const containerPrincipal = document.querySelector('.funkoColeccion');

// traigo del cart.html el contenedor de la imagen del producto 
const imgProductContainer = document.querySelector('.imagenFunko');
console.log(imgProductContainer);


// Declaro array de productos

const productList = [];
productList.push({
    tag: 'Star Wars',
    name: 'STORMTROOPER LIGTHSABER',
    price: 20000,
    img: '../img/star-wars/trooper-1.webp',
    id: 1,
    description: '3 CUOTAS SIN INTERES'
});
productList.push({
    tag: 'Pokemon',
    name: 'PIDGEOTO',
    price: 18500,
    img: '../img/pokemon/pidgeotto-1.webp',
    id: 2,
    description: '3 CUOTAS SIN INTERES'
});
productList.push({
    tag: 'Harry Potter',
    name: 'LUNA LOVEGOOD LION MASK',
    price: 19000,
    img: '../img/harry-potter/luna-1.webp',
    id: 3,
    description: '3 CUOTAS SIN INTERES'
});


// le agrego la imagen de cada producto a los anclas que estan en el html

// TROOPER IMAGEN
const etiquetaImgTrooper = document.createElement('img');
etiquetaImgTrooper.setAttribute('src', productList[0].img);
etiquetaImgTrooper.style.width = '100%';
trooperImg.appendChild(etiquetaImgTrooper);

// POKEMON IMAGEN

const etiquetaImgPokemon = document.createElement('img');
etiquetaImgPokemon.setAttribute('src', productList[1].img);
etiquetaImgPokemon.style.width = '100%';
pokemonImg.appendChild(etiquetaImgPokemon);

// HARRY POTTER IMAGEN

const etiquetaImgHP = document.createElement('img');
etiquetaImgHP.setAttribute('src', productList[2].img);
etiquetaImgHP.style.width = '100%'
imgHP.appendChild(etiquetaImgHP);

// Creo dentro del contenedor del html todos los hijos que forman parte de la descripcion del producto.

// TROOPER DESCRIPCION DE PRODUCTO

const trooper_tag = document.createElement('h4');
trooper_tag.textContent = productList[0].tag;
const trooper_name = document.createElement('h3');
trooper_name.textContent = productList[0].name;
const trooper_price = document.createElement('p');
trooper_price.textContent = '$'+ productList[0].price;
const trooper_cuotas = document.createElement('p');
trooper_cuotas.textContent = productList[0].description;
trooper_cuotas.classList.add('cuotas');
trooper_descriptionContainer.appendChild(trooper_tag);
trooper_descriptionContainer.appendChild(trooper_name);
trooper_descriptionContainer.appendChild(trooper_price);
trooper_descriptionContainer.appendChild(trooper_cuotas);

// POKEMON DESCRIPCION DE PRODUCTO

const pokemon_tag = document.createElement('h4');
pokemon_tag.textContent = productList[1].tag;
const pokemon_name = document.createElement('h3');
pokemon_name.textContent = productList[1].name;
const pokemon_price = document.createElement('p');
pokemon_price.textContent = '$'+ productList[1].price;
const pokemon_cuotas = document.createElement('p');
pokemon_cuotas.textContent = productList[1].description;
pokemon_cuotas.classList.add('cuotas');
pokemon_descriptionContainer.appendChild(pokemon_tag);
pokemon_descriptionContainer.appendChild(pokemon_name);
pokemon_descriptionContainer.appendChild(pokemon_price);
pokemon_descriptionContainer.appendChild(pokemon_cuotas);

// HARRY POTTER DESCRIPCION DE PRODUCTO

const hp_tag = document.createElement('h4');
hp_tag.textContent = productList[2].tag;
const hp_name = document.createElement('h3');
hp_name.textContent = productList[2].name;
const hp_price = document.createElement('p');
hp_price.textContent = '$'+ productList[2].price;
const hp_cuotas = document.createElement('p');
hp_cuotas.textContent = productList[2].description;
hp_cuotas.classList.add('cuotas');
HP_descriptionContainer.appendChild(hp_tag);
HP_descriptionContainer.appendChild(hp_name);
HP_descriptionContainer.appendChild(hp_price);
HP_descriptionContainer.appendChild(hp_cuotas);


