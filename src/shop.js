var query = window.location.search.substring(1);
var qs = parse_query_string(query);
const arrayItemsSelected = qs.items?.split(",");

// traigo las anclas de los productos del shop.html con sus imagenes para insertarle las imagenes desde javascript
const trooperImg = document.querySelector('.imgTrooper');
const pokemonImg = document.querySelector('.imgPokemon');
const imgHP = document.querySelector('.imgHP');

// traigo el contenedor de los textos de los productos y luego sus hijos (h4, h3, p, etc) shop.html
const trooper_descriptionContainer = document.querySelector('.descriptionTrooperContainer');
const pokemon_descriptionContainer = document.querySelector('.descriptionPokemonContainer');
const HP_descriptionContainer = document.querySelector('.descriptionHarryPotterContainer');
const hpTag = document.querySelector('.harryPotterTagClass');
const hpName = document.querySelector('.harryPotterNameClass');
const hpPrice = document.querySelector('.harryPotterPriceClass');
const hpCuotas = document.querySelector('.harryPotterCuotasClass');

// traigo el contenedor principal del carrito de compras cart.html
const containerPrincipal = document.querySelector('.funkoColeccion');

// traigo del cart.html el contenedor de la imagen del producto 
const imgProductContainer = document.querySelector('.imagenFunko');

// input del cart.html
const input = document.querySelector('.inputNumberCart');
// boton + y -  (del input) del cart.html
const addBtn = document.querySelector('#sumarBoton');
const substractBtn = document.querySelector('#restarBoton');

function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        var key = decodeURIComponent(pair.shift());
        var value = decodeURIComponent(pair.join("="));
        // If first entry with this name
        if (typeof query_string[key] === "undefined") {
            query_string[key] = value;
            // If second entry with this name
        } else if (typeof query_string[key] === "string") {
            var arr = [query_string[key], value];
            query_string[key] = arr;
            // If third or later entry with this name
        } else {
            query_string[key].push(value);
        }
    }
    return query_string;
}

// Declaro array de productos

const productList = [];
productList.push({
    tag: 'Star Wars',
    name: 'STORMTROOPER LIGTHSABER',
    price: 20000,
    img: '../img/star-wars/luke-1.webp',
    id: 1,
    description: '3 CUOTAS SIN INTERES'
});
productList.push({
    tag: 'Pokemon',
    name: 'PIKACHU',
    price: 18500,
    img: '../img/pokemon/pikachu-1.webp',
    id: 2,
    description: '3 CUOTAS SIN INTERES'
});
productList.push({
    tag: 'Harry Potter',
    name: 'HERMIONE GRANGER',
    price: 19000,
    img: '../img/harry-potter/hermione-1.webp',
    id: 3,
    description: '3 CUOTAS SIN INTERES'
});

const cartItems = productList.filter((item) =>
    arrayItemsSelected?.includes(item.id.toString())
);


const precioHTML = document.getElementById('productCartPrice');
cartItems.forEach((element) => {
    document.getElementById(element.id).style.display = "flex";
    precioHTML.textContent = '$' + element.price;
    
});

console.log(parseInt(input.value));
try {
    addBtn.addEventListener('click', addProducts);
    substractBtn.addEventListener('click', substractProducts);

    function addProducts() {

        productList.forEach((element, i) => {
            let multi = 1;
            console.log('el elemento' + element.price + 'esta en la posicion' + i);
            console.log(element.price[i]);
            console.log(productList[i].price); 
            // precioHTML.textContent = '$' + element.price*multi;
            if (element.id == 1){
                precioHTML.textContent = '$' + element.price*parseInt(input.value);
            }
            
        
        });

        // for (i=0; i < productList.length; i++){
        //     // console.log('input'+input.value);
        //     let multiplicacion = 1;
        //     console.log('preciohtml.textcontent = '+precioHTML.textContent);
        //     precioHTML.textContent = productList[i].price*multiplicacion;
        //     multiplicacion++;
        //     console.log('array i price = '+productList[i].price);
        // }
        
        // productList.forEach((productPrice) => 
        
        
        // console.log(productPrice.price)
        // );
        input.value++;
        // productList = productList.price*input.value;
    }
    

    function substractProducts(){
        if (input.value == 1){
            return 0;
        }else {
            input.value--;
        }
    }
    } catch(err){
    console.log('');
}


// le agrego la imagen de cada producto a los anclas que estan en el html

// TROOPER IMAGEN
try {
    const etiquetaImgTrooper = document.createElement('img');
    etiquetaImgTrooper.setAttribute('src', productList[0].img);
    etiquetaImgTrooper.style.width = '100%';
    trooperImg.appendChild(etiquetaImgTrooper);
} catch (err){
    console.log('');
}

// POKEMON IMAGEN

try {
const etiquetaImgPokemon = document.createElement('img');
etiquetaImgPokemon.setAttribute('src', productList[1].img);
etiquetaImgPokemon.style.width = '100%';
pokemonImg.appendChild(etiquetaImgPokemon);
} catch(err){
    console.log('');
}

// HARRY POTTER IMAGEN

try {
    const etiquetaImgHP = document.createElement('img');
    etiquetaImgHP.setAttribute('src', productList[2].img);
    etiquetaImgHP.style.width = '100%'
    imgHP.appendChild(etiquetaImgHP);
} catch(err){
    console.log('');
}

// Creo dentro del contenedor del html todos los hijos que forman parte de la descripcion del producto.

// TROOPER DESCRIPCION DE PRODUCTO

try{
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
} catch(err){
    console.log('');
}

// POKEMON DESCRIPCION DE PRODUCTO

try {
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
} catch(err){
    console.log('');
}

// HARRY POTTER DESCRIPCION DE PRODUCTO

try{
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
    } catch(err){
    console.log('');
}

