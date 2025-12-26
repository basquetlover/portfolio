import type { APIRoute } from "astro";


export const GET: APIRoute = async ({ cookies, redirect }) => {

const user_session = cookies.get("session_id");
if(user_session){
    cookies.delete('session_id', { path: '/' });
}

    
// Redirige a la página de inicio de sesión
return redirect("/");
};