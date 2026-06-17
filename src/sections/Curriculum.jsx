import AnimatedList from '../components/react-bits/AnimatedList';
import ShinyText from '../components/react-bits/ShinyText';

const modules = [
    {
        title: "MÓDULO 1: Introducción al mundo de la resina",
        content: [
            "Bienvenida al curso",
            "Cómo conseguir la guía",
            "Fundamentos (qué es la resina)",
            "Componentes",
            "Proporciones y mezclas",
            "Tipos de resina y sus aplicaciones",
            "Diferencias entre resina epóxica, poliéster y UV"
        ]
    },
    {
        title: "MÓDULO 2: Seguridad e higiene en el trabajo con resina",
        content: [
            "Equipos de protección personal",
            "Moldes y superficies",
            "Manipulación y almacenamiento de químicos"
        ]
    },
    {
        title: "MÓDULO 3: Herramientas y materiales básicos",
        content: [
            "Materiales",
            "Kit básico"
        ]
    },
    {
        title: "MÓDULO 4: Preparación y mezcla correcta de la resina",
        content: [
            "Tiempo de trabajo y curado",
            "Temperatura y ambiente"
        ]
    },
    {
        title: "MÓDULO 5: Colorantes, pigmentos y efectos especiales",
        content: [
            "Pigmentos y aditivos",
            "Tipo de técnicas con resina epóxica"
        ]
    },
    {
        title: "MÓDULO 6: Resina sin errores – acabados limpios y profesionales",
        content: [
            "Burbujas: por qué aparecen y cómo evitarlas",
            "Uso correcto del calor (sin arruinar la pieza)",
            "Mezcla consciente y control del ambiente",
            "Técnicas de asentado de la resina"
        ]
    },
    {
        title: "MÓDULO 7: Del molde a la pieza",
        content: [
            "Preparación y cuidado de los moldes",
            "Técnicas de vertido y desmolde",
            "Creación de piezas paso a paso",
            "Acabados básicos post desmolde"
        ]
    },
    {
        title: "MÓDULO 8: Personalización creativa, llaveros y dijes con identidad",
        content: [
            "Introducción a la personalización en resina",
            "Inserción de letras y elementos planos",
            "Uso de flores secas y elementos naturales",
            "Llavero con glitter (glitter, efectos y texturas)",
            "Composición y equilibrio visual",
            "Curado, desmolde y evaluación final",
            "Llavero con borde irregular",
            "Llavero mini letras (última tendencia)",
            "Llavero con base de acrílico",
            "Llavero con borde redondo"
        ]
    },
    {
        title: "MÓDULO 9: Joyería y accesorios minimalistas",
        content: [
            "Creación de accesorios paso a paso",
            "Vertido limpio y control de burbujas en moldes pequeños",
            "Evaluación estética",
            "Montaje y ensamblaje de piezas",
            "Collar con dijes de resina",
            "Aretes de resina",
            "Sets combinables y comerciales",
            "Anillos de resina",
            "Gancho para cabello",
            "Pulseras de resina",
            "Peines de resina"
        ]
    },
    {
        title: "MÓDULO 10: Especial celulares",
        content: [
            "Popsocket con resina",
            "Soporte para celular con glitter (cómo usarlo sin que se hunda)"
        ]
    },
    {
        title: "MÓDULO 11: Porta llaves paso a paso",
        content: [
            "Superficies aptas para trabajar con resina",
            "Preparación de colores y resina para arte abstracto",
            "Técnicas básicas de vertido (pouring)",
            "Secado, curado y evaluación de la obra"
        ]
    },
    {
        title: "MÓDULO 12: Porta retrato con resina",
        content: [
            "Comprender el trabajo por capas",
            "Encapsulado de elementos orgánicos y decorativos",
            "Encapsulado de fotos y recuerdos"
        ]
    },
    {
        title: "MÓDULO 13: Imanes y piezas utilitarias. Diseño funcional en resina",
        content: [
            "Creación de imanes decorativos",
            "Diseño limpio y atractivo",
            "Evaluación final"
        ]
    },
    {
        title: "MÓDULO 14: Portavasos creativos (técnicas decorativas en resina)",
        content: [
            "Bases y preparación de moldes para portavasos",
            "Técnica estilo mármol",
            "Diseños con vinilo",
            "Técnicas especiales: geoda, glitter y degradados",
            "Evaluación estética y acabado final"
        ]
    },
    {
        title: "MÓDULO 15: Diseño de agenda con resina y lapicero",
        content: [
            "Fondos y efectos base",
            "Efecto Milky Way paso a paso",
            "Encapsulado de elementos decorativos en tapas",
            "Personalización con nombres, frases y logos",
            "Curado y evaluación de la tapa",
            "Lapicero de resina"
        ]
    },
    {
        title: "MÓDULO 16: Armado de agendas personalizadas",
        content: [
            "Encuadernado con anillos de acero",
            "Marca páginas",
            "Sets y combinaciones vendibles",
            "Ideas para vender agendas personalizadas"
        ]
    },
    {
        title: "MÓDULO 17: Encapsulado con papel waterproof",
        content: [
            "Diseñando en Canva",
            "Preparación e impresión",
            "Aplicación sobre pieza de resina",
            "Sellado y acabado final"
        ]
    },
    {
        title: "MÓDULO 18: Personalización profesional de vasos y termos",
        content: [
            "Preparación correcta del vaso o termo",
            "Base y cubiertas de color",
            "Técnica ombré",
            "Técnica Milky Way",
            "Técnica galaxia",
            "Técnica geoda",
            "Tiempos de secado y curado",
            "Sellado final, pulido y evaluación"
        ]
    },
    {
        title: "MÓDULO 19: Relojes en resina",
        content: [
            "Tipos de relojes en resina",
            "Materiales y mecanismos",
            "Diseño del reloj",
            "Perforado y montaje del mecanismo",
            "Uso decorative y presentación"
        ]
    },
    {
        title: "MÓDULO 20: Cuadro y lámpara decorativa",
        content: [
            "Cuadro personalizado",
            "Lámpara (encapsulado con luces)"
        ]
    },
    {
        title: "MÓDULO 21: Arte útil (bandeja de resina)",
        content: [
            "Técnicas decorativas",
            "Bandeja paso a paso",
            "Curado, desmolde y evaluación final"
        ]
    },
    {
        title: "MÓDULO 22: Tu negocio creativo en resina",
        content: [
            "Ideas de negocio rentables con poca inversión",
            "Branding básico para tu marca de resina",
            "Empaque creativo que suma valor",
            "Etiquetas y detalles personalizados"
        ]
    },
    {
        title: "MÓDULO 23: Próximos pasos",
        content: [
            "Cómo llevar esto al siguiente nivel",
            "Despedida"
        ]
    },
    {
        title: "BONOS ADICIONALES",
        content: [
            "Logo desde cero",
            "Cases personalizados",
            "Moldes caseros",
            "Identificadores de mascotas",
            "Llavero NFC",
            "Taza ombré",
            "Recuerdos de recién nacido"
        ]
    }
];

const Curriculum = () => {
    return (
        <section className="py-24 bg-black px-4 relative overflow-hidden">
            {/* Fondo decorativo sutil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <div className="text-center mb-16">
                    <ShinyText text="RESINA MASTER PRO 23 MÓDULOS + BONOS" className="text-primary font-bold tracking-widest text-sm mb-4" />
                    <h2 className="text-4xl md:text-6xl font-black text-white italic">En Resina Master Pro aprenderás</h2>
                </div>

                <AnimatedList
                    items={modules}
                    showGradients={true}
                    enableArrowNavigation={true}
                    displayScrollbar={false}
                    className="w-full max-w-4xl"
                />
            </div>
        </section>
    );
};

export default Curriculum;
