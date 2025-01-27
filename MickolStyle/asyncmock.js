const misProductos =[
{id:1,nombre:"remera 1",precio:15000,img:"https://boraborastore.com.ar/wp-content/uploads/2024/02/bbs2400811.jpg"},
{id:2,nombre:"remera 2",precio:15000,img:"https://www.cristobalcolon.com/fullaccess/item31807foto129430.jpg"},
{id:3,nombre:"remera 3",precio:15000,img:"https://www.cristobalcolon.com/fullaccess/item29530foto122173.jpg"},
{id:4,nombre:"remera 4",precio:15000,img:"https://www.cristobalcolon.com/fullaccess/item30275foto139356.jpg"},
{id:5,nombre:"remera 5",precio:15000,img:"https://www.cristobalcolon.com/fullaccess/item29651foto122685.jpg"},


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
