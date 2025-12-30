import whois from "whois-json";
import { parse } from "tldts";

type WhoisData = {
  domainName?: string;
  registrar?: string;
  registrarUrl?: string;
  creationDate?: string;
  registrarRegistrationExpirationDate?: string;
};

const dominiosPopulares = ["com", "net", "org", "es", "info", "eu"];

export async function POST({ request }: { request: Request }) {
  try {
    const { dominio } = await request.json();
    if (!dominio)
      return new Response(JSON.stringify({ error: "dominio requerido" }), {
        status: 400,
      });

    const parsed = parse(dominio);
    const dominioReal = parsed.domain;

    if (!dominioReal) {
    return new Response(JSON.stringify({ error: "Dominio inválido" }), { status: 400 });
    }
    //const dominioRaiz = parsed.domain; // e.g. iescalvia.com
    const nombreBase = dominioReal?.split(".")[0] ?? dominio; // iescalvia

    // Info del dominio principal
    const domainInfo: any = { dominio: dominioReal };

    try {
      const whoisRaw: any = await whois(dominioReal);
      const whoisInfo: any = Array.isArray(whoisRaw) ? whoisRaw[0] : whoisRaw;

      if (whoisInfo?.domainName) {
        domainInfo.registro = {
          registrado_en: whoisInfo.creationDate,
          caduca_en: whoisInfo.registrarRegistrationExpirationDate,
          registrador: whoisInfo.registrar,
          url_registro: whoisInfo.registrarUrl,
        };
        domainInfo.exists = true;
      } else {
        domainInfo.registro = null;
        domainInfo.exists = false;
      }
    } catch {
      domainInfo.registro = null;
      domainInfo.exists = false;
    }

    // Generar sugerencias cambiando solo la extensión
    const sugerencias = await Promise.all(
      dominiosPopulares.map(async (ext) => {
        const dom = `${nombreBase}.${ext}`;
        let info: any = { dominio: dom, extension: ext };

        try {
          const whoisRaw: any = await whois(dom);
          const whoisInfo: any = Array.isArray(whoisRaw) ? whoisRaw[0] : whoisRaw;

          if (whoisInfo?.domainName) {
            info.exists = true;
            info.registro = {
              registrado_en: whoisInfo.creationDate,
              caduca_en: whoisInfo.registrarRegistrationExpirationDate,
              registrador: whoisInfo.registrar,
              url_registro: whoisInfo.registrarUrl,
            };
          } else {
            info.exists = false;
            info.registro = null;
          }
        } catch {
          info.exists = false;
          info.registro = null;
        }

        return info;
      })
    );

    return new Response(JSON.stringify({ domainInfo, sugerencias }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "error interno" }), {
      status: 500,
    });
  }
}
