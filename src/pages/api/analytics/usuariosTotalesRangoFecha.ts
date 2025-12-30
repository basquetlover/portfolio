import { supabase } from "@utils/supabase";

type ResultadoDia = {
dia: string;
user_count: number;
};

const MESES = [
"Ene", "Feb", "Mar", "Abr", "May", "Jun",
"Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
];

// Formatea fecha como YYYY-MM-DD en hora local
function formatISODateLocal(d: Date) {
const year = d.getFullYear();
const month = String(d.getMonth() + 1).padStart(2, "0");
const day = String(d.getDate()).padStart(2, "0");
return `${year}-${month}-${day}`;
}

export async function POST({ request }: { request: Request }) {
try {
    const { proyectoID, dias } = await request.json();
    if (!proyectoID || !dias || dias <= 0) {
    return new Response(JSON.stringify([]), { status: 400 });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const startDate = new Date(today);
    startDate.setDate(today.getDate() - (dias - 1));

    const { data, error } = await supabase
    .from("analytics_daily_devices")
    .select("last_seen_at")
    .eq("proyecto_id", proyectoID);

    if (error) throw error;

    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);

    const resultado: ResultadoDia[] = [];

    for (let i = 0; i < dias; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);

    const diaFormateado = `${d.getDate()} ${MESES[d.getMonth()]}`;
    const diaISO = formatISODateLocal(d);

    let count = 0;

    if (diaISO === formatISODateLocal(today)) {
// Contar todos los usuarios cuyo last_seen_at sea hoy
count = data?.filter((row: any) => {
    const lastSeen = new Date(row.last_seen_at);
    return formatISODateLocal(lastSeen) === diaISO;
}).length || 0;
} else {
        // Días anteriores: contar todos los usuarios de ese día
        count = data?.filter((row: any) => {
        const lastSeen = new Date(row.last_seen_at);
        return formatISODateLocal(lastSeen) === diaISO;
        }).length || 0;
    }

    resultado.push({ dia: diaFormateado, user_count: count });
    }

    //console.log(resultado);
    return new Response(JSON.stringify(resultado), { status: 200 });
} catch (err) {
    console.error(err);
    return new Response(JSON.stringify([]), { status: 500 });
}
}
