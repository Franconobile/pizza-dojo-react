export const foodItems = [
  {
    id: 1,
    name: 'Miyagi Classic',
    img: 'https://irecetasfaciles.com/wp-content/uploads/2019/08/pizza-de-jamon-queso-y-tocino.jpg',
    info: 'Pizzas con abundante queso cremoso, oregano, salsa',
    price: 1000,
    categoria: 'Pizzas',
},
{
    id: 2,
    name: 'Cerveza Quilmes Clásica',
    img: 'https://www.espaciovino.com.ar/media/default/0001/62/thumb_61390_default_big.jpeg',
    info: 'Lata 473ml',
    price: 300,
    categoria: 'Bebida' ,
},
{
    id: 3,
    name: 'Dojo Bacon',
    img: 'https://images.pexels.com/photos/10679780/pexels-photo-10679780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    info: 'Hamburguesa doble queso con bacon',
    price: 1400,
    categoria: 'Burger' ,
},
{
    id: 4,
    name: 'Coca Cola',
    img: 'https://carrefourar.vtexassets.com/arquivos/ids/254367/7790895000430_02.jpg',
    info: '1,5L',
    price: 433,
    categoria: 'Bebida' ,
},
{
    id: 5,
    name: 'Pizzas Dojo Margarita',
    img: 'https://margherita.com.ar/wp-content/uploads/2019/05/pespecialhuevo.jpg',
    info: 'Pizzas con huevo, aceituna y tomate ',
    price: 1250,
    categoria: 'Pizzas' ,
},
{
    id: 6,
    name: 'Cerveza Brahma Chopp',
    img: 'https://static.cotodigital3.com.ar/sitios/fotos/full/00001000/00001016.jpg',
    info: 'Lata 473ml',
    price: 330,
    categoria: 'Bebida' ,
},
{
    id: 7,
    name: 'Dojo Ranchera',
    img: 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/XQAAMAXBUFFTTONUKMAMMOYOOA.jpg',
    info: 'Hamburguesa con salsa picante, bacon y cebolla',
    price: 1530,
    categoria: 'Burger' ,
},
{
    id: 8,
    name: 'Dojo Pizzas Fugazzetta',
    img: 'https://www.thermorecetas.com/wp-content/uploads/2022/04/DSC_4341-2-scaled-e1650443550180.jpg',
    info: 'Pizzas con mucha cebolla, muzza y otro queso a elección',
    price: 1300,
    categoria: 'Pizzas' ,
},
{
    id: 9,
    name: 'Dojo Pizzas Calabresa',
    img: 'https://www.paulinacocina.net/wp-content/uploads/2022/01/pizza-calabresa.jpg',
    info: 'Pizzas con calabresa, morrón, aceitunas y cebolla',
    price: 1480,
    categoria: 'Pizzas' ,
},
{
    id: 10,
    name: 'Dojo Mario Bros',
    img: 'https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/bf67391da9fdef50f1427efb304bc8bf.jpg',
    info: 'Hamburguesa con cebolla caramelizada, doble carne, champiñones, y cheddar',
    price: 1280,
    categoria: 'Burger' ,
},
{
    id: 11,
    name: 'Dojo Veggie',
    img: 'https://recetasveganas.net/wp-content/uploads/2020/05/hamburguesa-lentejas-sin-carne-vegana-recetas-faciles2.jpg',
    info: 'Medallón de lenteja, lechuga tomate y papas',
    price: 600,
    categoria: 'Burger',
},
{
    id: 12,
    name: 'Levité pomelo',
    img: 'https://jumboargentina.vteximg.com.br/arquivos/ids/620141-512-512/Agua-Saborizada-Villa-Del-Sur-Levite-Pomelo-Sin-Gas-1-5-L-2-468798.jpg',
    info: 'Agua saborizada sabor pomelo 1,5L',
    price: 500,
    categoria: 'Bebida' ,
},
{
    id: 13,
    name: 'Miyagi Dojo Pizzas',
    img: 'https://lh5.googleusercontent.com/p/AF1QipMnC9gjZ51Y7-gLmiQGjmrnkkM7TkgahAcz88QS=w408-h306-k-no',
    info: 'El equilibrio perfecto: Tomate, mozzarella, carne salteada, cebolla de verdeo, choclo',
    price: 3560,
    categoria: 'Pizzas' ,
},
{
    id: 14,
    name: 'Dojo Cheese',
    img: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg',
    info: 'Doble carne, doble cheddar, cebolla caramelizada',
    price: 1500,
    categoria: 'Burger' ,
},
{
    id: 15,
    name: 'Gaseosa Sprite',
    img: 'https://depositoelmayorista.com.ar/wp-content/uploads/2019/12/unnamed-2-1.jpg',
    info: '1,5L',
    price: 433,
    categoria: 'Bebida' ,
},
];

export const arraycategorias = [
  {
    id: 1,
    categoria: 'Pizzas',
    imgTag: 'https://i.ibb.co/HVF68DG/pizza.png',
  },

  {
    id: 2,
    categoria: 'Burger',
    imgTag: 'https://i.ibb.co/djMhGtq/hamburguesa.png',
  },

  {
    id: 3,
    categoria: 'Bebida',
    imgTag: 'https://i.ibb.co/sK4h6Rp/bebida.png',
  },
];

export const Foods = foodItems.reduce((res, food) => {
  if (!res[food.categoria]) {
    res[food.categoria] = [];
  }
  res[food.categoria] = [...res[food.categoria], food];

  return res;
}, {});

console.log(Foods);
