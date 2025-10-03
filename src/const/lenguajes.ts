export const LENGUAJES = [
    {
        nombre: 'Astro',
        id: 'astro',
        categoria: 'frontend',
        subcategoria: 'framework',
    },
    {
        nombre: 'Tailwind',
        id: 'tailwindcss',
        categoria: 'frontend',
        subcategoria: 'framework de estilos',
    },
    {
        nombre: 'Typescript',
        id: 'typescript',
        categoria: 'full stack',
        subcategoria: 'lenguaje tipado',
    },
    {
        nombre: 'Supabase',
        id: 'supabase',
        categoria: 'backend',
        subcategoria: 'base de datos',
    },
    {
        nombre: 'Resend',
        id: 'resend',
        categoria: 'backend',
        subcategoria: 'servicio de email',
    },
    {
        nombre: 'Vercel',
        id: 'vercel',
        categoria: 'despliegue',
    },
    {
        nombre: 'Chart.js',
        id: 'chartjs',
        categoria: 'frontend',
        subcategoria: 'librería de gráficos',
    },
    {
        nombre: 'React',
        id: 'react',
        categoria: 'frontend',
    },
    {
        nombre: 'Node.js',
        id: 'nodejs',
        categoria: 'backend',
    },
    {
        nombre: 'HTML5',
        id: 'html5',
        categoria: 'frontend',
    },
    {
        nombre: 'CSS',
        id: 'css',
        categoria: 'frontend',
    },
    {
        nombre: 'JavaScript',
        id: 'javascript',
        categoria: 'full stack',
    }
];

export const LENGUAJES_INFO = [
    {
        nombre: 'Astro',
        id: 'astro',
        web: 'https://astro.build',
        categoria: 'frontend',
        subcategoria: 'framework',
        descripcion: 'Framework moderno para construir sitios web rápidos y optimizados, utilizando componentes de múltiples frameworks como React, Vue y Svelte.',
        apartados: [
            {
                tipo: 'parrafo',
                titulo: '¿Qué es Astro?',
                contenido: [
                    {
                        texto: `Astro es un framework moderno para crear sitios web estáticos y dinámicos.`,
                    },
                    {
                        texto: `✨ Permite renderizar solo el HTML necesario, reduciendo el JavaScript en el navegador y mejorando la velocidad.`,
                        
                    },
                    {
                        texto: `🚀 Soporta componentes de múltiples frameworks como React, Vue y Svelte, facilitando la integración con tecnologías existentes.`,
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Características principales',
                contenido: [
                    {
                        texto: `⚡ Islas de componentes → solo el JS necesario se envía al navegador.`,
                    },
                    {
                        texto: `🌐 Renderizado estático por defecto → páginas rápidas y SEO-friendly.`,
                    },
                    {
                        texto: `🔄 Compatibilidad multi-framework → React, Vue, Svelte, Solid, etc.`,
                    },
                    {
                        texto: `📦 Integraciones modernas → Tailwind, Markdown, CMS, APIs externas.`,
                    },
                    {
                        texto: `🛠 Build optimizado → imágenes, scripts y CSS minificados automáticamente.`
                    }
                    
                ]
            },
            {
                tipo: 'codigo',
                titulo: 'Ejemplo básico 📂',
                contenido: [
                    {
                        texto: `
    ---
    // Componente Astro
    const title = "¡Hola, Astro!";
    ---
    <html lang="es">
    <head>
        <title>{title}</title>
    </head>
    <body>
        <h1>{title}</h1>
        <p>Este es un sitio construido con Astro 🚀</p>
    </body>
    </html>
                    `,
                    }
                    
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Ventajas de Astro',
                contenido: [
                    {
                        texto: `✅ Sitios extremadamente rápidos y ligeros`,
                    },
                    {
                        texto: `✅ Compatible con cualquier framework de componentes`,
                    }
                   
                ]
            }
        ]
    },
    {
        nombre: 'Tailwind',
        id: 'tailwindcss',
        web: 'https://tailwindcss.com',
        categoria: 'frontend',
        subcategoria: 'framework de estilos',
        descripcion: 'Framework de CSS utilitario que permite construir diseños personalizados directamente en el HTML, facilitando la creación de interfaces responsivas y modernas.',
        apartados: [
            {
                tipo: `parrafo`,
                titulo: '¿Qué es Tailwind CSS?',
                contenido: [
                    {
                        texto: `Tailwind CSS es un framework CSS “utility-first”, lo que significa que utiliza clases pequeñas y reutilizables para aplicar estilos directamente en el HTML sin escribir CSS personalizado.`, 
                    },
                    {
                        texto: `🚀 Facilita la creación de diseños rápidos, responsivos y consistentes.`
                    }
                ]
            },
            {
                tipo: `lista`,
                titulo: `Características principales`,
                contenido: [
                    {
                        texto: `💨 Utility-First → clases cortas que aplican estilos específicos (text-center, bg-red-500).`,
                    },
                    {
                        texto: `📱 Responsive → soporta breakpoints con prefijos (sm:, md:, lg:).`
                    },
                    {
                        texto: `🎨 Customizable → se pueden extender colores, tipografías, espaciados y más.`
                    },
                    {
                        texto: `⚡ Rápido → evita escribir CSS repetitivo y acelera el desarrollo.`,
                    },
                    {
                        texto: `🔄 Consistente → diseño uniforme en toda la web.`
                    }
                ]
            },
            {
                tipo: 'codigo',
                titulo: 'Ejemplo básico 📂',
                contenido: [
                    {
                    texto: `
    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    Haz clic aquí
    </button>

                    `
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Ventajas de Tailwind',
                contenido: [
                    {
                        texto: `Desarrollo rápido sin CSS repetitivo`
                    },
                    {
                        texto: `Fácil de mantener y escalar`
                    },
                    {
                        texto: `Integración sencilla con frameworks modernos (React, Vue, Astro…)`
                    },
                    {
                        texto: `Perfecto para prototipos y producción`
                    }
                ]
            }
        ]
    },
    {
        nombre: 'Typescript',
        id: 'typescript',
        web: 'https://www.typescriptlang.org',
        categoria: 'full stack',
        subcategoria: 'lenguaje tipado',
        descripcion: 'Superset de JavaScript que añade tipado estático opcional, mejorando la robustez y mantenibilidad del código en proyectos grandes y complejos.',
        apartados: [
            {
                tipo: 'parrafo',
                titulo: '¿Qué es TypeScript?',
                contenido: [
                    {
                        texto: `TypeScript (TS) es un superconjunto de JavaScript que añade tipado estático opcional y herramientas avanzadas para desarrollo escalable.`
                    },
                    {
                        texto: `🚀 Se compila a JavaScript, por lo que funciona en navegadores y Node.js.`
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Características principales',
                contenido: [
                    {
                        texto: `📝 Tipado estático opcional → detecta errores antes de ejecutar el código.`
                    },
                    {
                        texto: `⚡ Compilación a JavaScript → compatible con cualquier proyecto JS.`
                    },
                    {
                        texto: `🛠 Orientado a objetos → clases, interfaces, herencia, enums.`
                    },
                    {
                        texto: `🔄 Compatible con JS → cualquier código JS válido funciona en TS.`
                    },
                    {
                        texto: `📦 Ideal para proyectos grandes → más fácil de mantener y escalar.`
                    }
                ]
            },
            {
                tipo: 'codigo',
                titulo: 'Ejemplo básico 📂',
                contenido: [
                    {
                        texto: `
    // Variable con tipo explícito
    let nombre: string = "Juan";

    // Función con tipos
    function suma(a: number, b: number): number {
    return a + b;
    }

    // Interfaz
    interface Persona {
    nombre: string;
    edad: number;
    }

    const persona: Persona = { nombre: "Ana", edad: 25 };

                        `
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Ventajas de TypeScript',
                contenido: [
                    {
                        texto: `✅ Reduce errores en tiempo de ejecución`
                    },
                    {
                        texto: `✅ Mejora autocompletado y documentación en editores`
                    },
                    {
                        texto: `✅ Facilita desarrollo de aplicaciones grandes y equipos colaborativos`
                    },
                    {
                        texto: `✅ Compatible con frameworks modernos: React, Angular, Vue`
                    }
                ]
            }
        ]
    },
    {
        nombre: 'Supabase',
        id: 'supabase',
        web: 'https://supabase.com',
        categoria: 'backend',
        subcategoria: 'base de datos',
        precio: `25€/mes`,
        descripcion: 'Plataforma de backend como servicio que proporciona una base de datos PostgreSQL, autenticación, almacenamiento y funciones en tiempo real, facilitando el desarrollo de aplicaciones web y móviles.',
        apartados: [
            {
                tipo: 'parrafo',
                titulo: '¿Qué es Supabase?',
                contenido: [
                    {
                        texto: `Supabase es una plataforma de backend como servicio (BaaS) que ofrece una solución completa para construir aplicaciones web y móviles.`,
                    },
                    {
                        texto: `🚀 Es open source, ideal para proyectos web y móviles que necesitan un backend rápido y escalable.`
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Características principales',
                contenido: [
                    {
                        texto: `🗄 Base de datos PostgreSQL → segura y escalable.`
                    },
                    {
                        texto: `🔑 Autenticación de usuarios → email/password, OAuth, magic links.`
                    },
                    {
                        texto: `🔄 APIs automáticas → RESTful y GraphQL.`
                    },
                    {
                        texto: `🌐 Tiempo real → suscripciones a cambios de datos instantáneos.`
                    },
                    {
                        texto: `📦 Almacenamiento → subir y gestionar archivos fácilmente.`
                    }
                ]
            },
            {
                tipo: 'codigo',
                titulo: 'Ejemplo básico 📂',
                contenido: [
                    {
                        texto: `
    import { createClient } from '@supabase/supabase-js'

    const supabaseUrl = 'https://xyzcompany.supabase.co'
    const supabaseKey = 'PUBLIC_ANON_KEY'
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Obtener usuarios
    const { data, error } = await supabase
    .from('users')
    .select('*')

    console.log(data)
                        `
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Ventajas de Supabase',
                contenido: [
                    {
                        texto: `✅ Configuración rápida de backend`
                    },
                    {
                        texto: `✅ Tiempo real y APIs automáticas`
                    },
                    {
                        texto: `✅ Compatible con Frontend moderno: React, Vue, Svelte, Astro`
                    },
                    {
                        texto: `✅ Base de datos escalable y segura`
                    }
                ]
            }
        ]
    },
    {
        nombre: 'Resend',
        id: 'resend',
        web: 'https://resend.com',
        categoria: 'backend',
        subcategoria: 'servicio de email',
        precio: '20€/mes',
        descripcion: 'Servicio de envío de correos electrónicos diseñado para desarrolladores, que ofrece una API sencilla y escalable para gestionar campañas de email y notificaciones transaccionales.',
        apartados: [
            {
                tipo: 'parrafo',
                titulo: '¿Qué es Resend?',
                contenido: [
                    {
                        texto: `Resend es una API de correo electrónico diseñada para desarrolladores que permite enviar correos electrónicos transaccionales y de marketing a gran escala. Ofrece una interfaz sencilla y elegante que se integra fácilmente en tu código con SDKs para varios lenguajes de programación.`
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Características principales',
                contenido: [
                    {
                        texto: `🚀 Envío rápido y fiable: Envía correos electrónicos transaccionales y de marketing sin complicaciones.`
                    },
                    {
                        texto: `🔐 Seguridad: Verificación de dominio con SPF y DKIM para proteger la reputación del dominio.`
                    },
                    {
                        texto: `📊 Visibilidad completa: Accede a registros detallados, eventos de correo electrónico y análisis en tiempo real.`
                    },
                    {
                        texto: `🛠️ Integración sencilla: SDKs disponibles para Node.js, Python, Ruby, PHP, Go, Rust, Java, Elixir, .NET, REST y SMTP.`
                    },
                    {
                        texto: `📅 Programación de correos electrónicos: Envía correos electrónicos en momentos específicos utilizando lenguaje natural.`
                    },
                    {
                        texto: `📤 Envío masivo: Realiza envíos de correos electrónicos a múltiples destinatarios con facilidad.`
                    }
                ]
            },
            {
                tipo: 'codigo',
                titulo: 'Ejemplo básico 📂',
                contenido: [
                    {
                        texto: `
    import { Resend } from 'resend';

    const resend = new Resend('tu_api_key');

    async function enviarCorreo() {
    const { data, error } = await resend.emails.send({
        from: 'tu_correo@tudominio.com',
        to: 'destinatario@dominio.com',
        subject: 'Asunto del correo',
        html: '<p>Contenido del correo en HTML</p>',
    });

    if (error) {
        console.error('Error al enviar el correo:', error);
    } else {
        console.log('Correo enviado con éxito:', data);
    }
    }

    enviarCorreo();
                        `
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: `Tipos de correos electrónicos`,
                contenido: [
                    {
                        texto: `Correos electrónicos transaccionales: Son mensajes esenciales que los usuarios no pueden darse de baja, como confirmaciones de pedidos, restablecimiento de contraseñas y notificaciones de cuentas.`
                    },
                    {
                        texto: `Correos electrónicos de marketing: Son mensajes promocionales o informativos que pueden ser enviados a múltiples destinatarios, como boletines, ofertas y actualizaciones de productos.`
                    }
                ]
            }
        ]
    },
    {
        nombre: 'Vercel',
        id: 'vercel',
        web: 'https://vercel.com',
        categoria: 'despliegue',
        precio: '20€/mes',
        descripcion: 'Plataforma de despliegue y alojamiento optimizada para aplicaciones frontend y sitios estáticos, que ofrece integración continua, escalabilidad automática y un rendimiento excepcional.',
        apartados: [
            {
                tipo: 'parrafo',
                titulo: '¿Qué es Vercel?',
                contenido: [
                    {
                        texto: `Vercel es una plataforma de despliegue y alojamiento en la nube diseñada para aplicaciones frontend y sitios estáticos. Ofrece una experiencia de desarrollo optimizada con integración continua, escalabilidad automática y un rendimiento excepcional.`
                    },
                    {
                        texto: `🚀 Permite publicar proyectos de React, Next.js, Astro, Vue, Svelte y más, con integración continua (CI/CD) y escalabilidad automática.`
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Características principales',
                contenido: [
                    {
                        texto: `⚡ Deploy rápido y automático → con integración desde GitHub, GitLab o Bitbucket.`
                    },
                    {
                        texto: `📦 Optimización de assets → imágenes, scripts y CSS se sirven automáticamente optimizados.`
                    },
                    {
                        texto: `🌐 CDN global → entrega de contenido rápida y segura en todo el mundo.`
                    },
                    {
                        texto: `🔄 Preview Deploys → cada rama o pull request genera un despliegue temporal para revisión.`
                    },
                    {
                        texto: `🛠 Integraciones con frameworks → Next.js, Astro, Svelte, Vue, React.`
                    },
                    {
                        texto: `📊 Análisis y métricas → seguimiento del rendimiento y uso de la aplicación.`
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Ventajas de Vercel',
                contenido: [
                    {
                        texto: `✅ Despliegue sencillo y rápido`
                    },
                    {
                        texto: `✅ Escalabilidad automática sin preocuparse por servidores`
                    },
                    {
                        texto: `✅ CDN global y optimización de assets`
                    },
                    {
                        texto: `✅ Preview deploys para revisión de cambios`
                    }
                ]
            }
        ]
    },
    {
        nombre: 'Chart.js',
        id: 'chartjs',
        web: 'https://www.chartjs.org',
        categoria: 'frontend',
        subcategoria: 'librería de gráficos',
        descripcion: 'Librería de JavaScript sencilla y flexible para crear gráficos interactivos y visualizaciones de datos en aplicaciones web, compatible con una amplia variedad de tipos de gráficos.',
        apartados:[
            {
                tipo: 'parrafo',
                titulo: '¿Qué es Chart.js?',
                contenido: [
                    {
                        texto: `Chart.js es una librería de JavaScript que permite crear gráficos interactivos y visualizaciones de datos en aplicaciones web de manera sencilla y flexible.`
                    },
                    {
                        texto: `🎨 Soporta gráficos de líneas, barras, pastel, radar y más, con animaciones y personalización completa.`
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Características principales',
                contenido: [
                    {
                        texto: `📈 Gráficos interactivos → animaciones y eventos de hover/click.`
                    },
                    {
                        texto: `🎨 Personalización completa → colores, estilos, etiquetas y más.`
                    },
                    {
                        texto: `🔄 Responsive → se adapta automáticamente a distintos tamaños de pantalla.`
                    },
                    {
                        texto: `🛠 Fácil integración → funciona con HTML, Canvas y frameworks como React, Vue o Angular.`
                    },
                    {
                        texto: `📦 Módulos extensibles → plugins y soporte para gráficos avanzados.`
                    }
                ]
            },
            {
                tipo: 'codigo',
                titulo: 'Ejemplo básico 📂',
                contenido: [{
                    texto: `
    <canvas id="miGrafico" width="400" height="200"></canvas>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
    const ctx = document.getElementById('miGrafico').getContext('2d');
    const miGrafico = new Chart(ctx, {
        type: 'bar', // tipo de gráfico: bar, line, pie...
        data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        datasets: [{
            label: 'Ventas',
            data: [12, 19, 3, 5],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
        },
        options: {
        responsive: true,
        plugins: {
            legend: { display: true },
            tooltip: { enabled: true }
        }
        }
    });
    </script>
                    `
                }]
            },
            {
                tipo: 'lista',
                titulo: 'Tipos de gráficos disponibles',
                contenido: [
                    {
                        texto: `Gráfico de líneas`
                    },
                    {
                        texto: `Gráfico de barras`
                    },
                    {
                        texto: `Gráfico circular`
                    },
                    {
                        texto: `Gráfico de radar`
                    },
                    {
                        texto: `Gráfico de dispersión`
                    },
                    {
                        texto: `Gráfico de área`
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Ventajas de Chart.js',
                contenido: [
                    {
                        texto: `✅ Fácil de usar e integrar`
                    },
                    {
                        texto: `✅ Gráficos interactivos y responsivos`
                    },
                    {
                        texto: `✅ Amplia variedad de tipos de gráficos`
                    },
                    {
                        texto: `✅ Personalización completa`
                    },
                    {
                        texto: `✅ Compatible con cualquier framework o proyecto vanilla JS`
                    }
                ]
            }
        ]
    },
    {
        nombre: 'React',
        id: 'react',
        web: 'https://react.dev',
        categoria: 'frontend',
        descripcion: 'Biblioteca de JavaScript para construir interfaces de usuario, que permite crear componentes reutilizables y gestionar el estado de la aplicación de manera eficiente.',
        apartados: [
            {
                tipo: 'parrafo',
                titulo: '¿Qué es React?',
                contenido: [
                    {
                        texto: `React es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario (UI) de manera eficiente y declarativa.`
                    },
                    {
                        texto: `🚀 Facilita el desarrollo de aplicaciones web SPA (Single Page Applications) y se integra con herramientas modernas como Tailwind CSS, TypeScript y Astro.`
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Características principales',
                contenido: [
                    {
                        texto: `🏗 Componentes reutilizables → divide la UI en piezas independientes y mantenibles.`
                    },
                    {
                        texto: `🔄 Virtual DOM → actualiza solo lo necesario, mejorando el rendimiento.`
                    },
                    {
                        texto: `⚡ Declarativo → describe cómo debe lucir la UI y React se encarga de actualizarla.`
                    },
                    {
                        texto: `🌐 Ecosistema moderno → Hooks, Context, Router, State Management.`
                    },
                    {
                        texto: `🛠 Integración sencilla → compatible con librerías y frameworks frontend y backend.`
                    }
                ]
            },
            {
                tipo: 'codigo',
                titulo: 'Ejemplo básico 📂',
                contenido: [
                    {
                        texto: `
    import React from 'react';
    import ReactDOM from 'react-dom/client';

    function App() {
    const nombre = "Mundo";
    return <h1>¡Hola, {nombre}! ⚛️</h1>;
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);

                        `
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Ventajas de React',
                contenido: [
                    {
                        texto: `✅ Desarrollo rápido con componentes reutilizables`
                    },
                    {
                        texto: `✅ Excelente rendimiento con Virtual DOM`
                    },
                    {
                        texto: `✅ Fácil integración con tecnologías modernas`
                    },
                    {
                        texto: `✅ Ideal para aplicaciones web SPA y móviles (React Native)`
                    }
                ]
            }
        ]
    },
    {
        nombre: 'Node.js',
        id: 'nodejs',
        web: 'https://nodejs.org',
        categoria: 'backend',
        descripcion: 'Entorno de ejecución de JavaScript del lado del servidor, que permite construir aplicaciones escalables y de alto rendimiento utilizando un modelo de E/S no bloqueante y orientado a eventos.',
        apartados: [
            {
                tipo: 'parrafo',
                titulo: '¿Qué es Node.js?',
                contenido: [
                    {
                        texto: `Node.js es un entorno de ejecución de JavaScript del lado del servidor basado en el motor V8 de Chrome. Permite construir aplicaciones escalables y de alto rendimiento utilizando un modelo de E/S no bloqueante y orientado a eventos.`
                    },
                    {
                        texto: `🚀 Ideal para aplicaciones web en tiempo real, APIs y servicios backend.`
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Características principales',
                contenido: [
                    {
                        texto: `⚡ Event-driven y non-blocking I/O → alta eficiencia y escalabilidad.`
                    },
                    {
                        texto: `🌐 Basado en V8 → motor de JavaScript de Google Chrome, rápido y confiable.`
                    },
                    {
                        texto: `🛠 NPM → gestor de paquetes con miles de librerías disponibles.`
                    },
                    {
                        texto: `🔄 Tiempo real → ideal para WebSockets y aplicaciones en tiempo real.`
                    },
                    {
                        texto: `📦 Cross-platform → funciona en Windows, macOS y Linux.`
                    }
                ]
            },
            {
                tipo: 'codigo',
                titulo: 'Ejemplo básico 📂',
                contenido: [
                    {
                        texto: `
    const http = require('http');

    const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola desde Node.js! 🟢');
    });

    server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
    });

                        `
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Ventajas de Node.js',
                contenido: [
                    {
                        texto: `✅ Alta escalabilidad y rendimiento`
                    },
                    {
                        texto: `✅ Gran ecosistema de librerías con NPM`
                    },
                    {
                        texto: `✅ Ideal para aplicaciones en tiempo real`
                    },
                    {
                        texto: `✅ Permite usar JavaScript en frontend y backend`
                    },
                ]
            }
        ]
    },
    {
        nombre: 'HTML5',
        siglas_significado: 'HyperText Markup Language 5',
        id: 'html5',
        web: 'https://developer.mozilla.org/es/docs/Web/HTML',
        categoria: 'frontend',
        descripcion: 'Lenguaje de marcado estándar para la creación de páginas web, que introduce nuevas características y elementos para mejorar la estructura, presentación y funcionalidad del contenido web.',
        apartados: [
            {
                tipo: 'parrafo',
                titulo: '¿Qué es HTML5?',
                contenido: [
                    {
                        texto: `HTML5 es la quinta versión del lenguaje de marcado HTML, utilizado para estructurar y presentar contenido en la web. Introduce nuevas características y elementos que mejoran la semántica, multimedia y accesibilidad de las páginas web.`
                    },
                    {
                        texto: `🌐 Es la base de cualquier sitio web moderno, trabajando en conjunto con CSS y JavaScript.`
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Características principales',
                contenido: [
                    {
                        texto: `🏷 Semántica → <header>, <footer>, <article>, <section>, <nav>.`
                    },
                    {
                        texto: `🎥 Soporte nativo para multimedia → <video>, <audio>, <canvas>.`
                    },
                    {
                        texto: `🛠 Formularios mejorados → nuevos tipos de input y validación.`
                    },
                    {
                        texto: `🔄 APIs integradas → Geolocalización, almacenamiento local, arrastrar y soltar.`
                    },
                    {
                        texto: `📱 Diseño responsivo → mejor soporte para dispositivos móviles.`
                    }
                ]
            },
            {
                tipo: 'codigo',
                titulo: 'Ejemplo básico 📂',
                contenido: [
                    {
                        texto: `
    <!DOCTYPE html>
    <html lang="es">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi página HTML5</title>
    </head>
    <body>
    <header>
        <h1>🌟 Bienvenido a HTML5 🌟</h1>
    </header>
    <main>
        <section>
        <h2>Sección principal</h2>
        <p>Contenido relevante aquí</p>
        </section>
    </main>
    <footer>
        <p>© 2025 Mi sitio web</p>
    </footer>
    </body>
    </html>

                        `
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Ventajas de HTML5',
                contenido: [
                    {
                        texto: `✅ Estructura semántica clara`
                    },
                    {
                        texto: `✅ Soporte nativo para multimedia`
                    },
                    {
                        texto: `✅ Mejor accesibilidad y SEO`
                    },
                    {
                        texto: `✅ Compatible con dispositivos móviles y diseño responsivo`
                    }
                ]
            }
        ]
    },
    {
        nombre: 'CSS',
        siglas_significado: 'Cascading Style Sheets',
        id: 'css',
        web: 'https://developer.mozilla.org/es/docs/Web/CSS',
        categoria: 'frontend',
        descripcion: 'Lenguaje de estilos utilizado para describir la presentación de documentos HTML, permitiendo controlar el diseño, colores, fuentes y disposición de los elementos en una página web.',
        apartados: [
            {
                tipo: 'parrafo',
                titulo: '¿Qué es CSS?',
                contenido: [
                    {
                        texto: `CSS (Cascading Style Sheets) es un lenguaje de estilos utilizado para describir la presentación y el diseño de documentos HTML. Permite controlar aspectos visuales como colores, fuentes, márgenes, disposición y animaciones de los elementos en una página web.`
                    },
                    {
                        texto: `🎨 Trabaja en conjunto con HTML y JavaScript para crear experiencias web atractivas y funcionales.`
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Características principales',
                contenido: [
                    {
                        texto: `🎨 Estilos y diseño → controla colores, fuentes, tamaños, márgenes, padding.`
                    },
                    {
                        texto: `📐 Layouts → Flexbox, Grid, posicionamiento y diseño responsivo.`
                    },
                    {
                        texto: `🔄 Cascada y herencia → reglas que determinan cómo se aplican los estilos.`
                    },
                    {
                        texto: `🛠 Selectores avanzados → clases, IDs, atributos, pseudo-clases y pseudo-elementos.`
                    },
                    {
                        texto: `⚡ Animaciones y transiciones → efectos visuales sin JavaScript.`
                    }
                ]
            },
            {
                tipo: 'codigo',
                titulo: 'Ejemplo básico 📂',
                contenido: [
                    {
                        texto: `
    body {
    background-color: #f0f0f0; /* fondo gris claro */
    font-family: Arial, sans-serif; /* tipografía */
    color: #333; /* color de texto */
    }

    h1 {
    color: #ff5733; /* color naranja */
    text-align: center; /* centrado */
    }
                        `
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Ventajas de CSS',
                contenido: [
                    {
                        texto: `✅ Separación de contenido y presentación`
                    },
                    {
                        texto: `✅ Control total sobre el diseño y estilo`
                    },
                    {
                        texto: `✅ Diseño responsivo para dispositivos móviles`
                    },
                    {
                        texto: `✅ Animaciones y efectos visuales`
                    }
                ]
            }
        ]
    },
    {
        nombre: 'JavaScript',
        id: 'javascript',
        web: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
        categoria: 'full stack',
        descripcion: 'Lenguaje de programación interpretado, ampliamente utilizado para el desarrollo web, que permite crear contenido dinámico e interactivo en el navegador y en el servidor.',
        apartados: [
            {
                tipo: 'parrafo',
                titulo: '¿Qué es JavaScript?',
                contenido: [
                    {
                        texto: `JavaScript (JS) es un lenguaje de programación interpretado, ampliamente utilizado para el desarrollo web. Permite crear contenido dinámico e interactivo en el navegador, así como aplicaciones del lado del servidor con Node.js.`
                    },
                    {
                        texto: `🚀 Funciona tanto en el navegador (frontend) como en servidores con Node.js (backend).`
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Características principales',
                contenido: [
                    {
                        texto: `⚡ Lenguaje interpretado → no requiere compilación previa.`
                    },
                    {
                        texto: `🌐 Funciona en navegadores y servidores (Node.js).`
                    },
                    {
                        texto: `🛠 Soporte para programación orientada a objetos, funcional y basada en eventos.`
                    },
                    {
                        texto: `🔄 Manipulación del DOM → interactúa con elementos HTML y CSS.`
                    },
                    {
                        texto: `📦 Amplio ecosistema → miles de librerías y frameworks (React, Vue, Angular, etc.).`
                    }
                ]
            },
            {
                tipo: 'codigo',
                titulo: 'Ejemplo básico 📂',
                contenido: [
                    {
                        texto: `
    // Saludo en la consola
    const nombre = "Mundo";
    console.log("¡Hola, {nombre}! 🌟");

    // Función para sumar números
    function suma(a, b) {
    return a + b;
    }

    console.log(suma(5, 3)); // 8
                        `
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Ventajas de JavaScript',
                contenido: [
                    {
                        texto: `✅ Lenguaje versátil para frontend y backend`
                    },
                    {
                        texto: `✅ Gran ecosistema de librerías y frameworks`
                    },
                    {
                        texto: `✅ Permite crear experiencias web interactivas`
                    },
                    {
                        texto: `✅ Fácil de aprender y ampliamente soportado`
                    }
                ]
            }
        ]
    },
    {
        nombre: 'GitHub',
        id: 'github',
        web: 'https://github.com',
        categoria: 'despliegue',
        subcategoria: 'hosting de código',
        descripcion: 'Plataforma de alojamiento de código fuente y control de versiones basada en Git, que facilita la colaboración entre desarrolladores y la gestión de proyectos de software.',
        apartados: [
            {
                tipo: 'parrafo',
                titulo: '¿Qué es GitHub?',
                contenido: [
                    {
                        texto: `GitHub es una plataforma de alojamiento de código fuente y control de versiones basada en Git. Facilita la colaboración entre desarrolladores, la gestión de proyectos de software y el seguimiento de cambios en el código.`
                    },
                    {
                        texto: `🌐 Es ampliamente utilizado en la industria del software para proyectos de código abierto y privados.`
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Características principales',
                contenido: [
                    {
                        texto: `🔄 Control de versiones → seguimiento de cambios con Git.`
                    },
                    {
                        texto: `🤝 Colaboración → pull requests, revisiones de código y gestión de issues.`
                    },
                    {
                        texto: `📁 Repositorios → almacenamiento y organización del código fuente.`
                    },
                    {
                        texto: `🛠 Integraciones → CI/CD, GitHub Actions, y más.`
                    }
                ]
            },
            {
                tipo: 'codigo',
                titulo: 'Ejemplo básico 📂',
                contenido: [
                    {
                        texto: `
    git clone https://github.com/usuario/proyecto.git
    git checkout -b nueva-funcionalidad
    git add .
    git commit -m "Añadida nueva funcionalidad"
    git push origin nueva-funcionalidad
                        `
                    }
                ]
            },
            {
                tipo: 'lista',
                titulo: 'Ventajas de GitHub',
                contenido: [
                    {
                        texto: `✅ Facilita la colaboración en proyectos de software`
                    },
                    {
                        texto: `✅ Control de versiones eficiente con Git`
                    },
                    {
                        texto: `✅ Amplias integraciones y herramientas para desarrolladores`
                    },
                    {
                        texto: `✅ Ideal para proyectos de código abierto y privados`
                    }
                ]
            }
        ]
    }
];


// Agrupar por categoría
export const LENGUAJES_POR_CATEGORIA = LENGUAJES_INFO.reduce((acc, lang) => {
    if (!acc[lang.categoria]) acc[lang.categoria] = [];
    acc[lang.categoria].push(lang);
    return acc;
}, {} as Record<string, typeof LENGUAJES_INFO>);