// components/UsuariosOnline.tsx
import { useState, useEffect } from "react";

type Props = {
proyectoID: string;
onChange?: (count: number) => void; // <-- callback opcional
};

export default function UsuariosOnline({ proyectoID, onChange }: Props) {
const [online, setOnline] = useState<number>(0);

const fetchUsuariosOnline = async () => {
    try {
    const res = await fetch("/api/analytics/cantidadOnline", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ proyectoID }),
    });
    const data = await res.json();
    setOnline(data.count);

    // Llamar al callback si existe
    if (onChange) onChange(data.count);

    // Evento global opcional
    if (data.count > 0) {
        window.dispatchEvent(new Event("usuarioActualizado"));
    }
    } catch (err) {
    console.error("Error al obtener usuarios online:", err);
    setOnline(0);
    if (onChange) onChange(0);
    }
};

useEffect(() => {
    fetchUsuariosOnline(); // fetch inicial
    const interval = setInterval(fetchUsuariosOnline, 4.5 * 60 * 1000); // cada 4,5 minutos
    return () => clearInterval(interval);
}, [proyectoID]);

return <span>{online}</span>;
}
