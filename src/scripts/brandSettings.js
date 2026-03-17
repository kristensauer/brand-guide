export const brandSettings = {
    logo: {
        src: "public/Splitli Logos-01.png",
        alt: "Splitli",
        variations: [ // you might have wordmarks / different color variants than what is listed here, that's fine just adjust it
            { 
                name: "Primary - Light Background", 
                src: "public/ES493 Splitli Logos-01.jpg",
                bg: "#ffffff", 
                darkText: true,
                description: "Use this version on white or light backgrounds."
            },
            { 
                name: "Primary - Dark Background", 
                src: "public/ES493 Splitli Logos-02.jpg",
                bg: "#333333", 
                darkText: false,
                description: "Use this version on dark or brand-colored backgrounds."
            },
            { 
                name: "Monochrome - Black", 
                src: "public/ES493 Splitli Logos-03.jpg",
                bg: "#ffffff", 
                darkText: true,
                description: "For black and white print or single-color applications."
            },
            { 
                name: "Monochrome - White", 
                src: "public/ES493 Splitli Logos-04.jpg",
                bg: "#000000", 
                darkText: false,
                description: "For dark backgrounds where color is not permitted."
            }
        ]
    },
    favicon: "public/ES493 Splitli Logos.svg",
    typography: {
        primaryFont: "Fira Sans", 
        secondaryFont: "Lato",
        baseSize: "19px",
        lineHeight: "1.5",
        paragraphSpacing: "2"
    },
    palette: [ // these will load automatically into your page into the color section
        { name: "White", hex: "#ffffff" },
        { name: "Black", hex: "#000000" },
        { name: "Primary Pink", hex: "#FD43A2" },
        { name: "Secondary Purple", hex: "#6A3AFF" },
        { name: "Card Light Gray", hex: "#D6D6D6" },
        { name: "Card Dark Gray", hex: "#363636" }
    ]
};