import React, { useEffect, useRef, useState } from "react";

const TLD_CHECK_REGEX = /\.(?:[a-z]{2,63})(?:\.[a-z]{2,63})?$/i;

function splitDomain(domain: string) {
    const parts = domain.split(".");
    const extension = parts.slice(-1)[0]; // última parte
    const nombre = parts.slice(0, -1).join("."); // el resto
    return { nombre, extension };
}

export default function RastrearDom() {
    const [domain, setDomain] = useState("");
    const [tldValid, setTldValid] = useState<boolean | null>(null);
    const [checking, setChecking] = useState(false);
    const [exists, setExists] = useState<boolean | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [domainInfo, setDomainInfo] = useState<any>(null);
    const debounceRef = useRef<number | null>(null);

function normalizarProveedor(registrador: string) {
    if (!registrador) return null;

    if (registrador.includes("DonDominio")) return "DonDominio";
    if (registrador.includes("Vercel")) return "Vercel";
    if (registrador.includes("OVH")) return "OVH";
    if (registrador.includes("Cloudflare")) return "Cloudflare";
    if (registrador.includes("GoDaddy")) return "GoDaddy";
    if (registrador.includes("Namecheap")) return "Namecheap";
    if (registrador.includes("Amazon Registrar")) return "Amazon";
    if (registrador.includes("IONOS SE")) return "Ionos";
    if (registrador.includes("Name.com")) return "Name";

    return null; // no conocido
}


    const handleSearch = async () => {
        const dominio = domain.trim();
        if (!dominio) return;
        setChecking(true);
        setExists(null);
        setError(null);
        try {
            const res = await fetch("/api/DetectarDom", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ dominio })
            });

            const data = await res.json();
            setExists(data.domainInfo.exists);
            setDomainInfo(data);

        } catch (err) {
            setError("Error de red al consultar la API.");
            console.error(err);
        } finally {
            setChecking(false);
        }
    };

    useEffect(() => {
        setExists(null);
        setError(null);

        if (debounceRef.current) {
            window.clearTimeout(debounceRef.current);
            debounceRef.current = null;
        }

        if (!domain) {
            setTldValid(null);
            return;
        }

        debounceRef.current = window.setTimeout(() => {
            const valid = TLD_CHECK_REGEX.test(domain.trim());
            setTldValid(valid);
        }, 500);

        return () => {
            if (debounceRef.current) {
                window.clearTimeout(debounceRef.current);
                debounceRef.current = null;
            }
        };
    }, [domain]);

    return (
        <div className="w-full mt-10">
            <h3 className="text-4xl text-center font-semibold text-magenta">
                Comprobar disponibilidad de dominio
            </h3>

            <p className="text-center mt-2">
                Introduce el dominio que quieres usar para tu web y comprobaremos <br/> si está disponible
                o si ya se encuentra en uso.
            </p>

            <div className="w-max mx-auto flex flex-row place-items-center mb-2 mt-5">
                <input
                    id="domainInput"
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-96 px-3 py-2 rounded-s-full text-azul focus:ring-2 focus:ring-magenta focus:border-transparent focus:outline-none outline-none group"
                    placeholder="ejemplo.com"
                />
                <button className="bg-magenta px-3 py-2 rounded-e-full group-focus-within:ring-2 ring-magenta"
                        onClick={handleSearch} disabled={checking}>
                    {checking ? "Comprobando..." : "Buscar"}
                </button>
            </div>

            {/* EXTENSIÓN NO VÁLIDA */}
            {tldValid === false && (
                <div className="flex items-center justify-center gap-2 mt-6 mb-4 w-max bg-red-600/10 border mx-auto border-red-800 text-blanco px-4 py-2 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"/>
                    </svg>
                    <p className="text-sm font-medium">
                        Introduce un dominio con una extensión válida (.com, .es, .net…)
                    </p>
                </div>
            )}

            {/* DOMINIO EXISTENTE */}
            {exists && domainInfo?.domainInfo && (() => {
                const { nombre, extension } = splitDomain(domainInfo.domainInfo.dominio);
                const proveedor = normalizarProveedor(domainInfo.domainInfo.registro?.registrador);
                return (
                    <>
                        <p className="text-lg mb-2 mt-5 text-center">
                            Datos encontrados del dominio <span className="text-magenta font-semibold">{domainInfo.domainInfo.dominio}</span>
                        </p>

                        <div className="flex items-center justify-center gap-2 mt-6 mb-4 w-max bg-red-600/10 border mx-auto border-red-800 text-blanco px-4 py-2 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"/>
                            </svg>
                            <p className="text-sm font-medium">
                                Este dominio ya está registrado. Puedes consultar sus datos a continuación.
                            </p>
                        </div>

                        {/* CABECERA */}
                        <div className="w-max mx-auto font-semibold text-azul grid bg-rosa p-2 rounded grid-cols-[250px_100px_100px_100px_100px_150px] gap-x-1">
                            <p>Dominio</p>
                            <p>Ext.</p>
                            <p>Estado</p>
                            <p>Creado</p>
                            <p>Caduca</p>
                            <p>Proveedor</p>
                        </div>

                        {/* FILA DATOS */}
                        <div className="w-max mx-auto grid grid-cols-[250px_100px_100px_100px_100px_150px] gap-x-1 p-2 rounded-b">
                            <p>{nombre}</p>
                            <p>.{extension}</p>
                            <p className="text-red-600 font-semibold">Registrado</p>
                            <p>{new Date(domainInfo.domainInfo.registro.registrado_en).toLocaleDateString()}</p>
                            <p>{new Date(domainInfo.domainInfo.registro.caduca_en).toLocaleDateString()}</p>
                            <a href={domainInfo.domainInfo.registro.url_registro} target="_blank" rel="noopener noreferrer"
                               className="text-magenta flex items-center">
                                {proveedor ? (
                                    <img src={`/proveedores/${proveedor}.svg`} alt={proveedor} className="w-auto h-5" title={proveedor}/>
                                ) : (
                                    <span className="text-sm font-medium text-blanco">{domainInfo.domainInfo.registro.registrador}</span>
                                )}
                            </a>
                        </div>
                    </>
                );
            })()}

            {/* DOMINIO DISPONIBLE */}
            {!exists && domainInfo?.domainInfo && (() => {
                const { nombre, extension } = splitDomain(domainInfo.domainInfo.dominio);
                const precioAprox = extension === "com" ? 20 : 19;

                const email = "alemanytomaspere@gmail.com";
                const subject = encodeURIComponent(`Solicitud de registro del dominio ${domainInfo.domainInfo.dominio}`);
                const body = encodeURIComponent(
                    `Estimado equipo de soporte,

Me pongo en contacto para solicitar el registro del dominio ${domainInfo.domainInfo.dominio} para nuestro proyecto/web. 

Agradecería que nos informen de los pasos necesarios para completar el proceso de registro y cualquier detalle relevante sobre disponibilidad y coste.

Quedo atento a su respuesta.

Muchas gracias por su atención.

Atentamente,`
                );
                const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

                return (
                    <div className="flex flex-col items-center mt-6 mb-6">
                        <div className="flex items-center justify-center gap-2 w-max bg-green-600/10 border border-green-800 text-green-700 px-4 py-2 rounded mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                            </svg>
                            <p className="text-sm font-medium">
                                Este dominio está disponible: <span className="font-semibold text-green-800">{domainInfo.domainInfo.dominio}</span>
                            </p>
                        </div>

                        {/* MINI TABLA */}
                        <div className="w-max mx-auto font-semibold text-azul grid bg-rosa p-2 rounded grid-cols-[250px_100px_100px] gap-x-1 mb-2">
                            <p>Dominio</p>
                            <p>Ext.</p>
                            <p>Precio aprox.</p>
                        </div>

                        <div className="w-max mx-auto grid grid-cols-[250px_100px_100px] gap-x-1 p-2 rounded-b mb-4">
                            <p>{nombre}</p>
                            <p>.{extension}</p>
                            <p>~{precioAprox} €/año</p>
                        </div>

                        <a href={mailtoLink} target="_blank" rel="noopener noreferrer"
                           className="bg-green-600 text-white font-semibold px-6 py-2 rounded hover:bg-green-700 transition">
                            Solicitar registro
                        </a>
                    </div>
                );
            })()}

            {/* SUGERENCIAS */}
            {domainInfo?.sugerencias?.length > 0 && (
                <div className="mt-6">
                    <p className="text-center text-2xl text-rosa font-semibold mb-2">Sugerencias de otros dominios:</p>

                    {/* CABECERA */}
                    <div className="w-max mx-auto font-semibold text-azul grid bg-rosa p-2 rounded grid-cols-[250px_100px_100px_100px_100px_150px] gap-x-1">
                        <p>Dominio</p>
                        <p>Ext.</p>
                        <p>Estado</p>
                        <p>Creado</p>
                        <p>Caduca</p>
                        <p>Proveedor / Acción</p>
                    </div>

                    {domainInfo.sugerencias.map((sug: any) => {
                        const { nombre, extension: ext } = splitDomain(sug.dominio);
                        const proveedor = sug.exists ? normalizarProveedor(sug.registro?.registrador) : null;
                        const precioAprox = !sug.exists ? (ext === "com" ? 20 : 19) : null;

                        const email = "alemanytomaspere@gmail.com";
                        const subject = encodeURIComponent(`Solicitud de registro del dominio ${sug.dominio}`);
                        const body = encodeURIComponent(
                            `Estimado equipo de soporte,

Me pongo en contacto para solicitar el registro del dominio ${sug.dominio} para nuestro proyecto/web. 

Agradecería que nos informen de los pasos necesarios para completar el proceso de registro y cualquier detalle relevante sobre disponibilidad y coste.

Quedo atento a su respuesta.

Muchas gracias por su atención.

Atentamente,`
                        );
                        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

                        return (
                            <div key={sug.dominio} className="w-max mx-auto grid grid-cols-[250px_100px_100px_100px_100px_150px] gap-x-1 p-2 border-magenta border-b">
                                <p>{nombre}</p>
                                <p>.{ext}</p>
                                <p className={sug.exists ? "text-red-600 font-semibold" : "text-green-600 font-semibold"}>
                                    {sug.exists ? "Registrado" : "Disponible"}
                                </p>
                                <p>{sug.exists ? new Date(sug.registro.registrado_en).toLocaleDateString() : "-"}</p>
                                <p>{sug.exists ? new Date(sug.registro.caduca_en).toLocaleDateString() : "-"}</p>
                                <td className="flex items-center justify-center">
                                    {sug.exists ? (
                                        proveedor ? (
                                            <img src={`/proveedores/${proveedor}.svg`} alt={proveedor} className="w-auto h-5" title={proveedor}/>
                                        ) : (
                                            <span className="text-sm font-medium text-blanco">{sug.registro?.registrador}</span>
                                        )
                                    ) : (
                                        <a href={mailtoLink} target="_blank" rel="noopener noreferrer"
                                            className="bg-green-600 text-white font-semibold px-2 py-1 rounded hover:bg-green-700 transition">
                                            Solicitar registro
                                        </a>
                                    )}
                                </td>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
