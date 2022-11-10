export const products = [
    {
        id: 1,
        title: 'Miyagi Classic',
        img: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella-1080x671.jpg',
        info: 'Pizza con abundante queso cremoso, oregano, salsa',
        price: 1000,
        category: 'Pizza',
    },
    {
        id: 2,
        title: 'Cerveza Quilmes Clásica',
        img: 'https://www.espaciovino.com.ar/media/default/0001/62/thumb_61390_default_big.jpeg',
        info: 'Lata 473ml',
        price: 300,
        category: 'Bebida' ,
    },
    {
        id: 3,
        title: 'Dojo Bacon',
        img: 'https://images.pexels.com/photos/10679780/pexels-photo-10679780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        info: 'Hamburguesa doble queso con bacon',
        price: 1400,
        category: 'Burger' ,
    },
    {
        id: 4,
        title: 'Coca Cola',
        img: 'https://carrefourar.vtexassets.com/arquivos/ids/254367/7790895000430_02.jpg',
        info: '1,5L',
        price: 433,
        category: 'Bebida' ,
    },
    {
        id: 5,
        title: 'Pizza Dojo Margarita',
        img: 'https://margherita.com.ar/wp-content/uploads/2019/05/pespecialhuevo.jpg',
        info: 'Pizza con huevo, aceituna y tomate ',
        price: 1250,
        category: 'Pizza' ,
    },
    {
        id: 6,
        title: 'Cerveza Brahma Chopp',
        img: 'https://static.cotodigital3.com.ar/sitios/fotos/full/00001000/00001016.jpg',
        info: 'Lata 473ml',
        price: 330,
        category: 'Bebida' ,
    },
    {
        id: 7,
        title: 'Dojo Ranchera',
        img: 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/XQAAMAXBUFFTTONUKMAMMOYOOA.jpg',
        info: 'Hamburguesa con salsa picante, bacon y cebolla',
        price: 1530,
        category: 'Burger' ,
    },
    {
        id: 8,
        title: 'Dojo Pizza Fugazzetta',
        img: 'https://www.thermorecetas.com/wp-content/uploads/2022/04/DSC_4341-2-scaled-e1650443550180.jpg',
        info: 'Pizza con mucha cebolla, muzza y otro queso a elección',
        price: 1300,
        category: 'Pizza' ,
    },
    {
        id: 9,
        title: 'Dojo Pizza Calabresa',
        img: 'https://www.paulinacocina.net/wp-content/uploads/2022/01/pizza-calabresa.jpg',
        info: 'Pizza con calabresa, morrón, aceitunas y cebolla',
        price: 1480,
        category: 'Pizza' ,
    },
    {
        id: 10,
        title: 'Dojo Mario Bros',
        img: 'https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/bf67391da9fdef50f1427efb304bc8bf.jpg',
        info: 'Hamburguesa con cebolla caramelizada, doble carne, champiñones, y cheddar',
        price: 1280,
        category: 'Burger' ,
    },
    {
        id: 11,
        title: 'Dojo Veggie',
        img: 'https://recetasveganas.net/wp-content/uploads/2020/05/hamburguesa-lentejas-sin-carne-vegana-recetas-faciles2.jpg',
        info: 'Medallón de lenteja, lechuga tomate y papas',
        price: 600,
        category: 'Burger',
    },
    {
        id: 12,
        title: 'Levité pomelo',
        img: 'https://jumboargentina.vteximg.com.br/arquivos/ids/620141-512-512/Agua-Saborizada-Villa-Del-Sur-Levite-Pomelo-Sin-Gas-1-5-L-2-468798.jpg',
        info: 'Agua saborizada sabor pomelo 1,5L',
        price: 500,
        category: 'Bebida' ,
    },
    {
        id: 13,
        title: 'Miyagi Dojo Pizza',
        img: 'https://lh5.googleusercontent.com/p/AF1QipMnC9gjZ51Y7-gLmiQGjmrnkkM7TkgahAcz88QS=w408-h306-k-no',
        info: 'El equilibrio perfecto: Tomate, mozzarella, carne salteada, cebolla de verdeo, choclo',
        price: 3560,
        category: 'Pizza' ,
    },
    {
        id: 14,
        title: 'Dojo Cheese',
        img: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg',
        info: 'Doble carne, doble cheddar, cebolla caramelizada',
        price: 1500,
        category: 'Burger' ,
    },
    {
        id: 15,
        title: 'Gaseosa Sprite',
        img: 'https://depositoelmayorista.com.ar/wp-content/uploads/2019/12/unnamed-2-1.jpg',
        info: '1,5L',
        price: 433,
        category: 'Bebida' ,
    },
]

export const ProductsTotal = products.length;
export const Productos = products.reduce((acc, product) => {
    if (!acc[product.category]){
        acc[product.category] = [];
    }

    acc[product.category] = [...acc[product.category], product];
    
    return acc;
}, {});