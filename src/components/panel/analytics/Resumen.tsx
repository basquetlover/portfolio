import { useEffect, useState, useCallback } from "react";
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Filler,
Tooltip,
Legend,
} from "chart.js";
import type { Tick } from "chart.js"; // solo tipos
import { Line } from "react-chartjs-2";
import UsuariosOnline from "../UsuariosOnline";

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Filler,
Tooltip,
Legend
);

type DiaUsuarios = {
dia: string;       // ej: "19 Dic"
user_count: number;
};

type Props = {
proyectoID: string;
};

export default function Resumen({ proyectoID,  }: Props) {
const [dataAPI, setDataAPI] = useState<DiaUsuarios[]>([]);
    const [totalUsuarios, setTotalUsuarios] = useState(0);
    const [onlineUsuarios, setOnlineUsuarios] = useState(0);
const fetchData = useCallback(async () => {
    try {
    const res = await fetch("/api/analytics/usuariosTotalesRangoFecha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ proyectoID, dias: 7 }),
    });

    const data: DiaUsuarios[] = await res.json();
    setDataAPI(data);
    const total = data.reduce((acc, d) => acc + d.user_count, 0);
    setTotalUsuarios(total);
    } catch (err) {
    console.error("Error al obtener usuarios:", err);
    setDataAPI([]);
    }
}, [proyectoID]);

useEffect(() => {
    fetchData();
    const handler = () => fetchData();
    window.addEventListener("usuarioActualizado", handler);
    return () => window.removeEventListener("usuarioActualizado", handler);
}, [fetchData]);



if (!dataAPI.length) return null;

const labels = dataAPI.map((d) => d.dia);
const values = dataAPI.map((d) => d.user_count);
const lastIndex = values.length - 1;
const maxValue = Math.max(...values);

const chartData = {
    labels,
    datasets: [
    {
        label: "Usuarios",
        data: values,
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        backgroundColor: "rgba(236, 72, 153, 0.2)",
        borderColor: "rgb(236, 72, 153)",
        segment: {
        borderDash: (ctx: any) =>
            ctx.p0DataIndex === lastIndex - 1 ? [6, 6] : undefined,
        },
    },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 300 },
    plugins: { legend: { display: false } },
    scales: {
    y: {
        beginAtZero: true,
        grid: { color: "rgba(255,255,255,0.2)" },
        ticks: {
        color: "#fff", // numeros en blanco
        stepSize: 2,
        callback: function (tickValue: string | number, index: number, ticks: Tick[]) {
            const value = typeof tickValue === "string" ? parseFloat(tickValue) : tickValue;
            const maxAdjusted = maxValue + 2; // siempre 1 fila más
            if (value > maxAdjusted) return null;
            return value;
        },
        },
        max: maxValue + 2, // límite superior siempre 1 fila más
    },
    x: {
        grid: { display: false },
        ticks: { color: "#fff" }, // fechas en blanco
    },
    },
};

return (
    <div className="h-72 p-2 rounded border border-rosa ">
        <span className="flex flex-row items-center gap-x-5">
            <a href={`/panel/estadisticas?proyectoID=${proyectoID}`} className="font-semibold text-xl hover:text-magenta duration-300">{totalUsuarios} Visitores</a>
            <p className="flex flex-row items-center gap-x-1">
                <span className={`w-2 h-2  rounded-full ${onlineUsuarios > 0 ? 'bg-green-600':'bg-gray-600'}`}>&nbsp;</span>
                <UsuariosOnline 
                    proyectoID={proyectoID} 
                    onChange={(count) => setOnlineUsuarios(count)} 
                />
                Online
            </p>
        </span>
        
        <div className="w-full h-60">
            <Line data={chartData} options={options} />
        </div>
    </div>
    
);
}
