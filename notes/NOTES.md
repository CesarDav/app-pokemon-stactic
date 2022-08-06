## Sugerencias :

    1 Crear un repositorio donde ya tengas inicia el proyecto para despues poder clonar.

## Nueva Libreria de componentes

    2 leer documentacion https://nextui.org/

## Archivo "\_document"

    1 Es una archivo especial de next que sirve para poder extender y manipular las aplicacions de next.
    2 Leer documentacion: https://nextjs.org/docs/advanced-features/custom-document
    3 Los arhivos en next creado con un "_" son especiales

## Desifinicion de props en React con Typescript

    1 Leer documentacion: https://www.pluralsight.com/guides/defining-props-in-react-function-component-with-typescript

## Api de pokemon

    1 Leer documentacion: https://pokeapi.co/

## Componente `<Images/>`

    1 El componente image en next es poderoso.
    2 Ayuda a trabajar con el lazzi load.
    3 Puede hacer preFecht
    4 Puede ser reponsive
    5 Leer documentacion: https://nextjs.org/docs/api-reference/next/image
    6 Las imagenes tienen que estar dentro de la carpeta de public puesto next por defecto genera las paginas de manera estatica
    7 Para permiter imagenes en paginas que no sea de forma dinamica hay que permitir el domino de donde el cual se quiere obtener las imagenes

## GetSaticProps

    1 Si queremos tener el mejor rendimiento tenemos que usar la tecnica SSG: Static-site generation, puesto que de esta forma las paginas ya estan construidas y el servido solo tiene que servir la pagina corespondiente al request.
    2 Haba momentos donde la tecnica SSR: Server-side rendering sera ultil por que tal el cliente necesite ver unos cambios en vivo.
    3 Para el ejemplo de esta aplicacion estamos usando el SSG puesto que de antemano sabemos que informacion vamos a servir.
    4 La funcion GetSaticProps solo se va a ejecutar del lado del servidor al momento de hacer el build
    5 La funcion getStaticProps te permite pasar props a las paginas de next.
    6 Esta funcion solo se puede ser llamada en las paginas de next.
    7 Debes usar getStaticProps cuando:
        - Los datos necesarios para renderizar la página están disponibles en tiempo de construcción antes de la solicitud del usuario.
        - Los datos provienen de un CMS headless.
        - Los datos pueden ser cacheados públicamente (no son específicos del usuario).
        - La página debe ser pre-renderizada (para SEO) y ser muy rápida - getStaticProps genera archivos HTML y JSON, los cuales pueden ser cacheados por un CDN para mejorar el rendimiento.
        - import { GetStaticProps } from 'next'
    8 Leer documentacion: https://nextjs.org/docs/basic-features/data-fetching/overview


    ## Parametros por url
        1 Leer documentaion: https://nextjs.org/docs/routing/dynamic-routes


    ## getStaticPaths
        1 Deberías usar getStaticPaths si estás pre-renderizando estáticamente páginas que usan rutas dinámicas
        2 Leer documentacion: https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
        3 Al usar las funciones como getStaticPaths o getstaticProps se tiene que tener cuidado con la informacion que se maneja.Se tiene que trabajar con la data necesaria que se va a usar.

    ## Tips:
        1 Las aplicaciones de next corren tanto en el backend como en el front por lo tanto puede generar error.
        2 Se recomienda usar url amigables puesto que es mas faicl para el usuario recordar la url y para los bot de google es mas facil indexar la pagina.
        Ejemplo : user esto "https:://www.pagina/usuario/cesar.com" en vez de esto "https:://www.pagina/usuario/1c3kalsda.com"
        3 Leer documentacion para SEO
            https://ahrefs.com/blog/open-graph-meta-tags/
