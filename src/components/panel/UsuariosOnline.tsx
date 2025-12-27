// components/UsuariosOnline.tsx
import { useState, useEffect } from "react";

type Props = {
proyectoID: string;
};

export default function UsuariosOnline({ proyectoID }: Props) {
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
    } catch (err) {
    console.error("Error al obtener usuarios online:", err);
    setOnline(0);
    }
};

useEffect(() => {
    fetchUsuariosOnline(); // fetch inicial

    const interval = setInterval(fetchUsuariosOnline, 60*1000); // cada 4,5 min
    return () => clearInterval(interval); // limpiar interval al desmontar
}, [proyectoID]);

return (
    <span>
        {online}
    </span>
    
);
}
