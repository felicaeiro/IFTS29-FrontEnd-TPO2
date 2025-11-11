// Ejercicios de strings y arrays en JavaScript

// 1. Calcular el área de un rectángulo
calcularAreaRectangulo = (long, lat) => {
  return long * lat;
};

console.log(calcularAreaRectangulo(5, 3));

// 2. Contar palabras en una cadena
contarPalabras = (cadena) => {
  const totalPalabras = cadena.split(' ').length;
  return totalPalabras;
};

console.log(contarPalabras('Humahuaca es un lugar copado'));

// 3. Contar vocales en una cadena
contarVocales = (cadena) => {
  const vocales = ['a', 'e', 'i', 'o', 'u'];

  let contador = 0;
  for (let letra of cadena.toLowerCase()) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }
  return contador;
};

console.log(contarVocales('JavaScript'));

// 4. Encontrar el palíndromo
esPalindromo = (cadena) => {
  return cadena === cadena.split('').reverse().join('');
};

console.log(esPalindromo('neuquen'));

// 5. Crear un programa para convertir la edad de un perro a años humanos
edadCanina = () => {
  const años = parseInt(prompt('Ingrese los años de su perro:'));
  const edadCanina = años * 7;
  console.log(`Tu perro tiene ${edadCanina} años humanos`);
};

edadCanina();

// 6. Convertir la primera letra de cada palabra en mayúscula
capitalizarPalabras = (cadena) => {
  const cadenaCamelCase = cadena
    .split(' ')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
  return cadenaCamelCase;
};

console.log(capitalizarPalabras('hola mundo desde javascript'));

// 7. Generar los primeros N números de la sucesión de Fibonacci
fibonacci = (numero) => {
  const fib = [0, 1];
  for (let i = 2; i < numero; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n);
};

console.log(fibonacci(5));

// 8. Lista de Productos
const productos = [
  {
    id: 1,
    nombre: 'Laptop',
    precio: 1200,
    stock: 15,
    categoria: 'electrónica',
  },
  { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
  { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
  {
    id: 4,
    nombre: 'Monitor',
    precio: 300,
    stock: 20,
    categoria: 'electrónica',
  },
  { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' },
];

// 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio
productos.forEach((p) => {
  console.log(`Nombre del producto: ${p.nombre}`);
  console.log(`Precio del producto: ${p.precio}`);
});

// 2. Usando map: Crear un array con solo los nombres de los productos
const nombres = productos.map((p) => p.nombre);
console.log(nombres);

// 3. Usando filter: Obtener productos electrónicos con stock mayor a 20
const productosFiltrados = productos.filter(
  (p) => p.categoria === 'electrónica' && p.stock > 20
);
console.log(productosFiltrados);

// 4. Usando find: Encontrar el producto con id 3
console.log(productos.find((p) => p.id === 3));

// 5. Usando reduce: Calcular el valor total del inventario (precio * stock)
const valorTotal = productos.reduce(
  (total, p) => total + p.precio * p.stock,
  0
);
console.log(valorTotal);

// 9. Estudiantes y Calificaciones
const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
  { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
  { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
  { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] },
];

// 1. Usando forEach: Mostrar nombre y edad de cada estudiante
estudiantes.forEach((e) => {
  console.log(`Nombre: ${e.nombre} - Edad: ${e.edad}`);
});

// 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones
const estudiantesConPromedio = estudiantes.map((e) => ({
  ...e,
  promedio:
    e.calificaciones.reduce((a, b) => a + b, 0) / e.calificaciones.length,
}));

const arrayPromedio = estudiantesConPromedio.map((e) => ({
  nombre: e.nombre,
  promedio: e.promedio,
}));

console.log(arrayPromedio);

// 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5
const promedioMayor = estudiantesConPromedio.filter((e) => {
  return e.promedio > 7.5;
});
console.log(promedioMayor);

// 4. Usando find: Encontrar estudiante llamado 'María'
console.log(estudiantes.find((e) => e.nombre === 'María'));

// 5. Usando reduce: Calcular la edad promedio de los estudiantes
const edadPromedio =
  estudiantes.reduce((total, e) => total + e.edad, 0) / estudiantes.length;
console.log(edadPromedio);

// 10. Películas
const peliculas = [
  {
    id: 1,
    titulo: 'El Padrino',
    año: 1972,
    duracion: 175,
    genero: 'drama',
    rating: 9.2,
  },
  {
    id: 2,
    titulo: 'Pulp Fiction',
    año: 1994,
    duracion: 154,
    genero: 'crimen',
    rating: 8.9,
  },
  {
    id: 3,
    titulo: 'El Señor de los Anillos',
    año: 2001,
    duracion: 178,
    genero: 'fantasía',
    rating: 8.8,
  },
  {
    id: 4,
    titulo: 'Interestelar',
    año: 2014,
    duracion: 169,
    genero: 'ciencia ficción',
    rating: 8.6,
  },
  {
    id: 5,
    titulo: 'Parásitos',
    año: 2019,
    duracion: 132,
    genero: 'drama',
    rating: 8.6,
  },
];

// 1. Usando forEach: Mostrar título y año de cada película
peliculas.forEach((p) => {
  console.log(`Titulo: ${p.titulo} - Año: ${p.año}`);
});

// 2. Usando map: Crear array de títulos en mayúsculas
const titulosMayuscula = peliculas.map((p) => p.titulo.toUpperCase());
console.log(titulosMayuscula);

// 3. Usando filter: Obtener películas de drama con rating mayor a 8.5
const peliculasFiltradas = peliculas.filter(
  (p) => p.genero === 'drama' && p.rating > 8.5
);
console.log(peliculasFiltradas);

// 4. Usando find: Encontrar película estrenada en 2014
console.log(peliculas.find((p) => p.año === 2014));

// 5. Usando reduce: Calcular la duración total de todas las películas
const duracionTotal = peliculas.reduce((total, p) => total + p.duracion, 0);
console.log(duracionTotal);
