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
        categoria: 'full stack',
        subcategoria: 'lenguaje tipado',
        descripcion: 'Superset de JavaScript que añade tipado estático opcional, mejorando la robustez y mantenibilidad del código en proyectos grandes y complejos.',
    },
    {
        nombre: 'Supabase',
        id: 'supabase',
        categoria: 'backend',
        subcategoria: 'base de datos',
        descripcion: 'Plataforma de backend como servicio que proporciona una base de datos PostgreSQL, autenticación, almacenamiento y funciones en tiempo real, facilitando el desarrollo de aplicaciones web y móviles.',
    },
    {
        nombre: 'Resend',
        id: 'resend',
        categoria: 'backend',
        subcategoria: 'servicio de email',
        descripcion: 'Servicio de envío de correos electrónicos diseñado para desarrolladores, que ofrece una API sencilla y escalable para gestionar campañas de email y notificaciones transaccionales.',
    },
    {
        nombre: 'Vercel',
        id: 'vercel',
        categoria: 'despliegue',
        descripcion: 'Plataforma de despliegue y alojamiento optimizada para aplicaciones frontend y sitios estáticos, que ofrece integración continua, escalabilidad automática y un rendimiento excepcional.',
    },
    {
        nombre: 'Chart.js',
        id: 'chartjs',
        categoria: 'frontend',
        subcategoria: 'librería de gráficos',
        descripcion: 'Librería de JavaScript sencilla y flexible para crear gráficos interactivos y visualizaciones de datos en aplicaciones web, compatible con una amplia variedad de tipos de gráficos.',
    },
    {
        nombre: 'React',
        id: 'react',
        categoria: 'frontend',
        descripcion: 'Biblioteca de JavaScript para construir interfaces de usuario, que permite crear componentes reutilizables y gestionar el estado de la aplicación de manera eficiente.',
    },
    {
        nombre: 'Node.js',
        id: 'nodejs',
        categoria: 'backend',
        descripcion: 'Entorno de ejecución de JavaScript del lado del servidor, que permite construir aplicaciones escalables y de alto rendimiento utilizando un modelo de E/S no bloqueante y orientado a eventos.',
    },
    {
        nombre: 'HTML5',
        siglas_significado: 'HyperText Markup Language 5',
        id: 'html5',
        categoria: 'frontend',
        descripcion: 'Lenguaje de marcado estándar para la creación de páginas web, que introduce nuevas características y elementos para mejorar la estructura, presentación y funcionalidad del contenido web.',
    },
    {
        nombre: 'CSS',
        siglas_significado: 'Cascading Style Sheets',
        id: 'css',
        categoria: 'frontend',
        descripcion: 'Lenguaje de estilos utilizado para describir la presentación de documentos HTML, permitiendo controlar el diseño, colores, fuentes y disposición de los elementos en una página web.',
    },
    {
        nombre: 'JavaScript',
        id: 'javascript',
        categoria: 'full stack',
        descripcion: 'Lenguaje de programación interpretado, ampliamente utilizado para el desarrollo web, que permite crear contenido dinámico e interactivo en el navegador y en el servidor.',
    },
    {
        nombre: 'GitHub',
        id: 'github',
        categoria: 'despliegue',
        subcategoria: 'hosting de código',
        descripcion: 'Plataforma de alojamiento de código fuente y control de versiones basada en Git, que facilita la colaboración entre desarrolladores y la gestión de proyectos de software.',
    }
];


// Agrupar por categoría
export const LENGUAJES_POR_CATEGORIA = LENGUAJES_INFO.reduce((acc, lang) => {
    if (!acc[lang.categoria]) acc[lang.categoria] = [];
    acc[lang.categoria].push(lang);
    return acc;
}, {} as Record<string, typeof LENGUAJES_INFO>);