export const brandSettings = {
    logo: {
        src: "public/Splitli Logos-01.png",
        srcDark: "public/Splitli Logos-02.png",
        alt: "Splitli",
        variations: [ // you might have wordmarks / different color variants than what is listed here, that's fine just adjust it
            { 
                name: "Primary - Light Background", 
                src: "public/Splitli Logos-01.png",
                bg: "#ffffff", 
                darkText: true,
                description: "Use this version on white or light backgrounds."
            },
            { 
                name: "Primary - Dark Background", 
                src: "public/Splitli Logos-02.png",
                bg: "#333333", 
                darkText: false,
                description: "Use this version on dark or brand-colored backgrounds."
            },
            { 
                name: "Monochrome - Black", 
                src: "public/Splitli Logos-03.png",
                bg: "#ffffff", 
                darkText: true,
                description: "For black and white print or single-color applications."
            },
            { 
                name: "Monochrome - White", 
                src: "public/Splitli Logos-04.png",
                bg: "#000000", 
                darkText: false,
                description: "For dark backgrounds where color is not permitted."
            }
        ]
    },
    favicon: "/favicon.ico",
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