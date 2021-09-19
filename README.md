# Bootcamp Full Stack Web Developer #


## Práctica Final - Módulo: Desarrollo Backend en NodeJS/MongoDB

### NodePop

Esta práctica consiste en desarrollar el API que se ejecutará en el servidor de un servicio de venta de artículos de segunda mano llamado Nodepop.

El servicio mantiene anuncios de compra o venta de artículos y permite buscar con filtros por varios criterios, por tanto la API incluye los métodos necesarios para esto.

Cada anuncio tiene los siguientes datos:

- Nombre del artículo
- Estado del artículo: "En Venta" o "Se Compra" (True="En Venta")
- Precio: Precio del artículo en caso de ser una oferta de venta. En caso de que sea un anuncio de "Se Compra", será el precio que el solicitante estaría dispuesto a pagar.
- Foto del artículo
- Tags del anuncio

Operaciones que pueden realizarse en la API:

- Mostrar todos los anuncios
- Mostrar anuncios con filtros por tag, estado del anuncio (venta o compra), rango de precio (precio min. y precio max.) y nombre de artículo (que empiece por el dato buscado)
- Creación de anuncios
- Actualizar anuncios por id
- Eliminar anuncios por id

El API utilizará base de datos MongoDB. Además del API, contiene una página (frontend) que muestra una lista de anuncios con filtros en su página principal. Obtiene información de la base de datos y los muestra en una página EJS con una lista de anuncios, en la que si ponemos filtros en la URL los aplica. Por ejemplo: http://localhost:3000/?nombre=Bicicleta


## Instrucciones

Antes de nada debemos usar el siguiente comando para instalar todas las dependencias del proyecto (carpeta "node_modules"):

    npm install

### Desarrollo:

Para arrancar el proyecto en modo desarrollo se usará:

    npm run dev


### Inicializar la base de datos:

Para inicializar la base de datos con los datos de ejemplo, se ha creado un Script que realizará todo este proceso. Para ello debe ejecutar el siguiente comando desde la raíz del proyecto:

    npm run install_bd

### Rutas del FRONT:

Para ir a la página principal de la aplicación:

> http://localhost:3000/

Para filtrar los resultados por parametro:

> http://localhost:3000/?parametro=valor

Para filtrar los resultados por parametro ordenados por orden ascendente o descendente:

*Ascendente*
> http://localhost:3000/?parametro=valor&sort=parametroParaOrdenar

*Descendente*
> http://localhost:3000/?parametro=valor&sort=-parametroParaOrdenar


### Rutas del API:

Para facilitar las pruebas que quieran realizarse a través de POSTMAN, en el proyecto está incluido el fichero "Proyecto Backend Node.js.postman_collection.json" con todas las rutas para poder importarlas en la aplicación de POSTMAN.

No obstante a continuación se mostrarán todas las rutas disponibles por métodos:

**GET:**

Mostrar todos los anuncios:

> http://localhost:3000/apiv1/anuncios

Mostrar anuncios filtrados por rango de precio (cambiar "/10/150" por el rango deseado):

> http://localhost:3000/apiv1/anuncios/10/150

Mostrar anuncios filtrados por tags (cambiar "lifestyle" por el tag que quiera buscar):

> http://localhost:3000/apiv1/anuncios/?tags=lifestyle

Mostrar anuncios filtrados por nombre (cambiar "Bicicleta" por el nombre a buscar):

> http://localhost:3000/apiv1/anuncios/?nombre=Bicicleta

Mostrar anuncios filtrados por estado del artículo "En Venta" o "Se Compra" (Para buscar "En Venta" dejar "true", para "Se Compra" cambiar a "false"):

> http://localhost:3000/apiv1/anuncios/?venta=true

Si se quiere que los resultados se muestren en orden se puede aplicar a la url un parámetro según si se quiere un orden "ascendente" o "descendente". 

Por ejemplo:

Orden Ascendente - Muestra anuncios con tags "lifestyle" ordenados por precio de forma ascendente:

> http://localhost:3000/apiv1/anuncios/?tags=lifestyle&sort=precio

Orden Descendente - Muestra anuncios con tags "lifestyle" ordenados por precio de forma descendente:

> http://localhost:3000/apiv1/anuncios/?tags=lifestyle&sort=-precio


**POST:**

> http://localhost:3000/apiv1/anuncios

**PUT:**

> http://localhost:3000/apiv1/anuncios/IDdelAnuncio

**DELETE:**

> http://localhost:3000/apiv1/anuncios/IDdelAnuncio



