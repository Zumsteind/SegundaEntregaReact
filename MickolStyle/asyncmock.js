const misProductos =[
{id:1,nombre:"Remera Hombre",stock:10,precio:15000,img:"https://boraborastore.com.ar/wp-content/uploads/2024/02/bbs2400811.jpg", idCat:"Hombre"},
{id:2,nombre:"Remera Hombre",stock:10,precio:15000,img:"https://www.cristobalcolon.com/fullaccess/item31807foto129430.jpg",idCat:"Hombre"},
{id:3,nombre:"Remera Hombre",stock:10,precio:15000,img:"https://www.cristobalcolon.com/fullaccess/item29530foto122173.jpg",idCat:"Hombre"},
{id:7,nombre:"Remera Mujer",stock:10,precio:15000,img:"https://www.indy.com.ar/cdn/shop/files/9373254-Photoroom.png?v=1723836971&width=713",idCat:"Mujer"},
{id:8,nombre:"Remera Mujer",stock:10,precio:15000,img:"https://www.indy.com.ar/cdn/shop/files/Remera_Dc_Angel_Mujer_Blanco2.webp?v=1734107169&width=713",idCat:"Mujer"},

{id:4,nombre:"Remera Hombre",stock:10,precio:15000,img:"https://www.cristobalcolon.com/fullaccess/item30275foto139356.jpg",idCat:"Hombre"},
{id:5,nombre:"Remera Hombre",stock:10,precio:15000,img:"https://www.cristobalcolon.com/fullaccess/item29651foto122685.jpg",idCat:"Hombre"},
{id:6,nombre:"Remera Hombre",stock:10,precio:15000,img:"https://www.indy.com.ar/cdn/shop/files/Remera_Dc_Rocker_Mujer_Blanco.webp?v=1734116334&width=713",idCat:"Mujer"},


]


//esta trae todos los productos lo envia como promesa
 export const getProductos = () =>{

    return new Promise((resolve)=>{

            setTimeout(()=>
               {
                resolve(misProductos)


               },2000)


    })


}


//este trae solo el producto que coincida con el id que enviamos como parametro

export const getUnProducto = (id) =>{

return new Promise (resolve => {

   setTimeout(()=>{
      const Producto = misProductos.find(item=> item.id === id);
      
      resolve(Producto);

   },2000)
})

}

export const getProductosPorCategoria = (idCategoria) =>{

   return new Promise (resolve => {
   
      setTimeout(()=>{
         const ProductosCategoria = misProductos.filter(item=> item.idCat === idCategoria);
         
         resolve(ProductosCategoria);
   
      },2000)
   })
   
   }
