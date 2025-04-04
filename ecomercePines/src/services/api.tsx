
import { client } from "../supabase/client";

// Obtener todos los personajes
export async function getAllProducts() {
  const { data, error } = await client
    .from("productos")
    .select("*");

  if (error) throw error;
  return data;
}
// Obtiene un producto por id y su reseña
export async function getProductById(id: number) {
  const { data, error } = await client
    .from("productos")
    .select("*, opiniones(*)")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

//Obtiene todos los productos de una categoría
export async function getAllProductsByCategory(category: number) {
  const { data, error } = await client
    .from("productos")
    .select("*")
    .eq("categoria_id", category);

  if (error) throw error;
  return data;
}
// Obtiene todos los productos destacados
export async function getFeaturedProducts() {
  const { data, error } = await client
  .from('productos_destacados')
  .select(`
    id,
    productos (
      id,
      nombre,
      precio,
      descripcion,
      imagen_path,
      stock
    )
  `);

  if (error) throw error;
  console.log(data);
  return data;
}
//Agrega reseña a un producto de acuerdo a su id de usuario y producto
export async function agregarOpinion(producto_id: number, calificacion: number, comentario: string, cliente_id: string) {
  const { data, error } = await client
    .from("opiniones")
    .insert([{ producto_id, calificacion, comentario, cliente_id }]);

  if (error) throw error;
  return data;
}

// Agrega un producto al carrito de un usuario
export async function addToCart(producto_id: number, cantidad: number, cliente_id: string) {
  // 1. Buscar si el usuario ya tiene un carrito
  const { data: carrito, error: errorCarrito } = await client
    .from("carritos")
    .select("id")
    .eq("cliente_id", cliente_id)
    .maybeSingle();

  if (errorCarrito) throw errorCarrito;

  let carrito_id = carrito?.id;

  // 2. Si no existe, crear uno
  if (!carrito_id) {
    const { data: nuevoCarrito, error: errorNuevo } = await client
      .from("carritos")
      .insert({ cliente_id })
      .select()
      .single();

    if (errorNuevo) throw errorNuevo;
    carrito_id = nuevoCarrito.id;
  }

  // 3. Verificar si el producto ya está en el carrito
  const { data: existente, error: errorExistente } = await client
    .from("items_carrito")
    .select("id, cantidad")
    .eq("carrito_id", carrito_id)
    .eq("producto_id", producto_id)
    .maybeSingle();

  if (errorExistente) throw errorExistente;

  if (existente) {
    // 4. Si existe, actualizar la cantidad
    const nuevaCantidad = existente.cantidad + cantidad;

    const { error: errorUpdate } = await client
      .from("items_carrito")
      .update({ cantidad: nuevaCantidad })
      .eq("id", existente.id);

    if (errorUpdate) throw errorUpdate;
    return "actualizado";
  } else {
    // 5. Si no existe, insertarlo
    const { error: errorInsert } = await client
      .from("items_carrito")
      .insert({ carrito_id, producto_id, cantidad });

    if (errorInsert) throw errorInsert;
    return "agregado";
  }
}


// Elimina un producto del carrito de un usuario
export async function removeFromCart(cartitem_id: number, producto_id: number) {
  const { error } = await client
    .from("items_carrito")
    .delete()
    .eq("producto_id", producto_id)
    .eq("id", cartitem_id);

  return { error };
}


export async function updateQuantityInCart(id:number, cantidad:number) {
  const { error } = await client
  .from('items_carrito')
  .update({ cantidad:  cantidad})
  .eq('id', id);
  return error;
}

// Vacía todos los productos del carrito del usuario
export async function clearCart(cliente_id: string) {
  // Obtener el carrito del cliente
  const { data: carrito, error: errorCarrito } = await client
    .from("carritos")
    .select("id")
    .eq("cliente_id", cliente_id)
    .maybeSingle();

  if (errorCarrito) throw errorCarrito;
  if (!carrito) return; // No hay carrito que vaciar

  // Eliminar todos los items de ese carrito
  const { error: errorItems } = await client
    .from("items_carrito")
    .delete()
    .eq("carrito_id", carrito.id);

  if (errorItems) throw errorItems;
}
