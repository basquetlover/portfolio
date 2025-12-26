import React, { useId, useState, useRef } from 'react';

type Props = {
usuario?: any;
};

export default function IniciarSesion({ usuario }: Props) {
const [open, setOpen] = useState(false);
const [errorHtml, setErrorHtml] = useState('');
const modalRef = useRef<HTMLDivElement | null>(null);
const formRef = useRef<HTMLFormElement | null>(null);
// ID único por instancia para evitar colisiones si el componente se usa varias veces
const uid = useId();



const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const handleModalClick = (event: React.MouseEvent) => {
    if (event.target === modalRef.current) {
    handleClose();
    }
};

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorHtml('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
    const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
    });

    const contentType = response.headers.get('Content-Type') || '';

    if (contentType.includes('text/html')) {
        const html = await response.text();
        setErrorHtml(html);
    } else if (contentType.includes('application/json')) {
        const jsonResponse = await response.json();
        if (jsonResponse.success) {
        window.location.reload();
        } else {
        setErrorHtml(
            `<div class="bg-red-600 bg-opacity-30 border-3 border-red-700 text-white rounded-lg p-2 my-2 flex items-center">Error al iniciar sesión</div>`
        );
        }
    }
    } catch (err) {
    setErrorHtml(
        `<div class="bg-red-600 bg-opacity-30 border-3 border-red-700 text-white rounded-lg p-2 my-2 flex items-center">Error de conexión</div>`
    );
    }
};

return (
    <>
    {usuario ? (
        <a href="/panel" className="px-4 py-2 bg-magenta text-blanco font-semibold rounded-md hover:bg-rosa hover:text-azul duration-300">
        Ir al Panel
        </a>
    ) : (
        <>
        <button id={`${uid}-btn`} type="button" aria-expanded={open} aria-controls={`${uid}-modal`} className="px-4 py-2 bg-magenta cursor-pointer active:scale-95 text-blanco font-semibold rounded-md hover:bg-rosa hover:text-azul duration-300" onClick={handleOpen}>
            Iniciar Sesión
        </button>

        <div
            id={`${uid}-modal`}
            ref={modalRef}
            onClick={handleModalClick}
            className={`${open ? 'fixed' : 'hidden'} w-full h-full z-50 bg-azul bg-opacity-80  top-0 left-0`}
        >
            <form method="POST" action="/api/sesion/iniciar" id={`${uid}-form`} ref={formRef} onSubmit={handleSubmit} className="w-full h-full flex justify-center items-center  duration-300">
            <div className="bg-blanco rounded-md p-6 w-96 flex flex-col gap-y-4 shadow-lg shadow-black/30">
                <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-azuloscuro">Iniciar Sesión</h2>
                <button id={`${uid}-cerrar`} type="button" className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-full hover:bg-magenta hover:text-blanco duration-300" onClick={handleClose} aria-label="Cerrar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
                </div>
                <div id={`${uid}-error`} dangerouslySetInnerHTML={{ __html: errorHtml }}></div>
                <input type="email" name="email" placeholder="Correo Electrónico" className="w-full px-4 py-2 border border-gris rounded-md focus:outline-none focus:ring-2 focus:ring-magenta" />
                <input type="password" name="password" placeholder="Contraseña" className="w-full px-4 py-2 border border-gris rounded-md focus:outline-none focus:ring-2 focus:ring-magenta" />
                <button type="submit" className="w-full px-4 py-2 bg-magenta text-blanco font-semibold rounded-md hover:bg-rosa hover:text-azul duration-300">Iniciar Sesión</button>
            </div>
            </form>
        </div>
        </>
    )}
    </>
);
}
