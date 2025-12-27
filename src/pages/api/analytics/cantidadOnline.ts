import { supabase } from "@utils/supabase";

export async function POST({ request }: { request: Request }) {
  try {
    const { proyectoID } = await request.json();
    if (!proyectoID) return new Response(JSON.stringify({ count: 0 }), { status: 400 });

    const today = new Date().toISOString().split("T")[0];
    //console.log(today)
    const { data, error } = await supabase
      .from("analytics_daily_devices")
      .select("last_seen_at")
      .eq("proyecto_id", proyectoID)
      .eq("date", today);

    if (error) throw error;

    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);

    const count = data?.filter((item: any) => {
      const lastSeen = new Date(item.last_seen_at);
      return lastSeen >= fiveMinutesAgo && lastSeen <= now;
    }).length || 0;

    return new Response(JSON.stringify({ count }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ count: 0 }), { status: 500 });
  }
}
