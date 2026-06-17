import React from 'react';

const Footer = () => {
    return (
        <footer className="py-10 pb-48 bg-black border-t border-gray-900 px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <div className="text-gray-400 text-[10px] md:text-xs tracking-wide space-y-6">
                    <p className="font-semibold">
                        © 2025 – Resina Master Pro | Todos los derechos reservados | <a href="#" className="underline hover:text-primary transition-colors">Políticas de Privacidad</a>
                    </p>

                    <div className="max-w-3xl mx-auto opacity-40 leading-relaxed uppercase">
                        <span className="font-black text-white/80">DESCARGOS DE RESPONSABILIDAD IMPORTANTES:</span> Este sitio no es parte del sitio web de Facebook o Facebook, Inc. Además, este sitio no está respaldado por Facebook de ninguna manera. <span className="font-bold">FACEBOOK</span> es una marca registrada de FACEBOOK, Inc.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
