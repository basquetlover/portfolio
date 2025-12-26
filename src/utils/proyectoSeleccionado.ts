import { supabase } from "@utils/supabase";
import { verificarSesion } from "@utils/usuario";

export async function proyectosUsuario(request: Request) {
  const usuario = await verificarSesion(request);
  const usuario_ID = usuario.id;

  const { data, error } = await supabase
    .from("proyectos")
    .select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return (data ?? [])
    .map((proyecto: any) => {
      const usuarios = Array.isArray(proyecto.usuario_id)
        ? proyecto.usuario_id
        : proyecto.usuario_id
        ? [proyecto.usuario_id]
        : [];

      const usuarioProyecto = usuarios.find(
        (u: any) => u.usuarioID === usuario_ID
      );

      if (!usuarioProyecto) return null;

      // 👉 DEVOLVEMOS TODO EL PROYECTO
      return {
        ...proyecto,
        rolUsuario: usuarioProyecto.rolUsuario
      };
    })
    .filter(Boolean);
}
