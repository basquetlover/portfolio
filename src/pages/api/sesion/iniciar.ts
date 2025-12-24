import type { APIRoute } from "astro";
import bcrypt from 'bcrypt';
import crypto from 'crypto';
//import CryptoJS from 'crypto-js';
import { supabase  } from "../../../utils/supabase"; // Asegúrate de que esto apunte a tu configuración de Supabase
import { setSourceMapRange } from "typescript";

interface Usuario {
    id: string;
    nombre: string;
    email: string;
    contraseña: string; // Asegúrate de que este campo sea el correcto
}

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    let politica_cookies = cookies.get("all_cookies");
    
    //if(politica_cookies){
        const formData = await request.formData();
        const email = formData.get("email")?.toString(); // <input name="email" id="4584" />
        const password = formData.get("password")?.toString(); // <input name="password" id="4684" />
        let id_session = "";
     

    // Validar que se proporcionen email y contraseña
    if (!email || !password) {
        return new Response(
            `<div class="bg-red-600 bg-opacity-30 border-3 border-red-700 text-white rounded-lg p-2 my-2 flex items-center text-center">Usuario y contraseña obligatorios</div>`, 
            { status: 400, headers: { "Content-Type": "text/html" } }
        );
    }

    // Consultar el usuario en la base de datos
    let { data: Usuarios, error } = await supabase
        .from('usuarios') // Especifica el tipo aquí
        .select('*')
        .eq('email', email)
        .single();

    

    // Validar la contraseña
    const isPasswordValid = await bcrypt.compare(password, Usuarios.contrasena);
    if (!isPasswordValid) {
        return new Response(
            `<div class="bg-red-600 bg-opacity-30 border-3 border-red-700 text-white rounded-lg p-2 my-2 flex items-center text-center">Usuario o contraseña inválido</div>`, 
            { status: 400, headers: { "Content-Type": "text/html" } }
        );
    }

    



const secretKey = "8a0a6b86ab0faebd915652fb11a5b4131e76849c7403d93756f677a4b1a85714";
const ivLength = 16; // AES block size

// Función para encriptar
function encrypt(text: string) {
  const iv = crypto.randomBytes(ivLength);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secretKey, 'hex'), iv);
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');

  // Devuelve IV + texto cifrado en Base64
  return iv.toString('base64') + ':' + encrypted;
}

function encryptAlfaNum(text: string) {
  const encrypted = encrypt(text);
  // Codificar en Base64 y eliminar caracteres no alfanuméricos
  const alphanumeric = Buffer.from(encrypted).toString('base64').replace(/[^a-zA-Z0-9]/g, '');
  return alphanumeric;
}


// Ejemplo de uso

    if(!Usuarios.session_id){
        const session_id = encryptAlfaNum(email);
        const { data, error } = await supabase
        .from('usuarios')
        .update({ token: session_id })
        .eq('id', Usuarios.id)
        .select();

        
        id_session = session_id;
    }

    if(Usuarios.session_id){
        id_session = Usuarios.session_id
    }
    // Si la contraseña es válida, establecer la cookie de sesión

    if(id_session !== ""){
        
        // Caduca en 7 días
        const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        cookies.set('session_id', id_session, { path: '/', httpOnly: true, secure: true, expires });
    }
    


    return new Response(
        `<div class="bg-red-600 bg-opacity-30 border-3 border-red-700 text-white rounded-lg p-2 my-2 flex items-center text-center">No s'han acceptat les cookies necessàries.</div>`, 
        { status: 400, headers: { "Content-Type": "text/html" } }
    );
    
};