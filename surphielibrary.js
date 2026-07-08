/**
 * SurphieLibrary JS v1.3.0
 * Biblioteca de estilização fluida via JavaScript.
 * Correção: Isolamento completo de elementos na troca de temas.
 * Otimização: Aceleração de Hardware via GPU (will-change) para renderização de fundo isolada.
 * Autor: Surphiezet
 */

const surphie = {
    // Cache interno automático para evitar buscas repetidas no DOM
    _cache: {},

    // Método auxiliar interno que gerencia o cache de forma automatizada
    _getElement: function(id) {
        if (!this._cache[id] || !document.body.contains(this._cache[id])) {
            this._cache[id] = document.getElementById(id);
        }
        return this._cache[id];
    },

    // OTIMIZAÇÃO AUTOMÁTICA: Injeta aceleração de hardware para isolar o fundo e proteger as palavras/caixas
    _initOptimization: function() {
        if (!document.getElementById("surphie-theme-opt")) {
            const style = document.createElement("style");
            style.id = "surphie-theme-opt";
            style.innerHTML = `
                body {
                    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    will-change: background-color;
                }
            `;
            document.head.appendChild(style);
        }
    },

    // 1. Arredonda as bordas de um elemento pelo ID
    Round: function(id, radius = "15px") {
        const element = surphie._getElement(id);
        if (element) {
            element.style.borderRadius = radius;
        }
    },

    // 2. Gerenciamento de fontes nativas e em nuvem
    Font: {
        cursive: function(id) {
            const element = surphie._getElement(id);
            if (element) {
                if (!document.getElementById("surphie-font-cursive")) {
                    const link = document.createElement("link");
                    link.id = "surphie-font-cursive";
                    link.rel = "stylesheet";
                    link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap";
                    document.head.appendChild(link);
                }
                element.style.fontFamily = "'Dancing Script', cursive";
            }
        },
        load: function(id, fontName) {
            const element = surphie._getElement(id);
            if (element) {
                const formattedFont = fontName.replace(/ /g, "+");
                const styleId = `surphie-font-${formattedFont}`;
                if (!document.getElementById(styleId)) {
                    const link = document.createElement("link");
                    link.id = styleId;
                    link.rel = "stylesheet";
                    link.href = `https://fonts.googleapis.com/css2?family=${formattedFont}&display=swap`;
                    document.head.appendChild(link);
                }
                element.style.fontFamily = `'${fontName}', sans-serif`;
            }
        }
    },

    // 3. Aplicação de gradientes reais e de alto contraste
    Gradient: function(id) {
        const element = surphie._getElement(id);
        return {
            mix: function(color1, color2) {
                if (element) {
                    element.style.background = `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
                }
            },
            random: function() {
                if (element) {
                    const hue1 = Math.floor(Math.random() * 360);
                    const hue2 = (hue1 + 120 + Math.floor(Math.random() * 120)) % 360; 
                    const c1 = `hsl(${hue1}, 100%, 50%)`;
                    const c2 = `hsl(${hue2}, 100%, 50%)`;
                    element.style.background = `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`;
                }
            }
        };
    },

    // 4. Aplicação de duas cores em ordem de sobreposição (Frente e Trás)
    Twocolors: function(id) {
        const element = surphie._getElement(id);
        return {
            front: function(colorFront) {
                if (element) {
                    element.style.color = colorFront;
                }
                return this;
            },
            back: function(colorBack) {
                if (element) {
                    element.style.backgroundColor = colorBack;
                }
                return this;
            }
        };
    },

    // 5. Efeito de Glassmorphism com desfoque injetado
    Glass: function(id, blurIntensity = "10px") {
        const element = surphie._getElement(id);
        if (element) {
            element.style.backdropFilter = `blur(${blurIntensity})`;
            element.style.webkitBackdropFilter = `blur(${blurIntensity})`;
            element.style.background = "rgba(255, 255, 255, 0.15)";
            element.style.border = "1px solid rgba(255, 255, 255, 0.25)";
        }
    },

    // 6. CORREÇÃO: Altera UNICAMENTE o fundo do body para escuro, isolando o resto[cite: 1]
    Theme: {
        auto: function() {
            surphie._initOptimization();
            if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.body.style.backgroundColor = "#121212";
            }
        },
        toggle: function(buttonId) {
            surphie._initOptimization();
            const btn = surphie._getElement(buttonId);
            if (btn) {
                btn.addEventListener("click", () => {
                    const isDark = document.body.style.backgroundColor === "rgb(18, 18, 18)" || document.body.style.backgroundColor === "#121212";
                    document.body.style.backgroundColor = isDark ? "#f0f2f5" : "#121212";
                });
            }
        }
    },

    // 7. CORREÇÃO: Altera UNICAMENTE o fundo do body para claro, isolando o resto[cite: 1]
    ThemeWhite: {
        auto: function() {
            surphie._initOptimization();
            if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
                document.body.style.backgroundColor = "#ffffff";
            }
        },
        toggle: function(buttonId) {
            surphie._initOptimization();
            const btn = surphie._getElement(buttonId);
            if (btn) {
                btn.addEventListener("click", () => {
                    const isWhite = document.body.style.backgroundColor === "rgb(255, 255, 255)" || document.body.style.backgroundColor === "white" || document.body.style.backgroundColor === "#ffffff";
                    document.body.style.backgroundColor = isWhite ? "#121212" : "#ffffff";
                });
            }
        }
    },

    // 8. Efeito de brilho/gradiente cinza nas bordas e entorno
    Glow: function(id, color = "gray", intensity = "15px") {
        const element = surphie._getElement(id);
        if (element) {
            element.style.boxShadow = `0 0 ${intensity} ${color}`;
        }
    },

    // 9. Centraliza os elementos filhos horizontalmente e verticalmente usando o ID pai
    Center: function(parentId) {
        const element = surphie._getElement(parentId);
        if (element) {
            element.style.display = "flex";
            element.style.justifyContent = "center";
            element.style.alignItems = "center";
            element.style.flexDirection = "column";
            element.style.minHeight = "250px";
        }
    },

    // 10. Adiciona efeito 3D real e extrudado (Múltiplas camadas sólidas)
    Depth: function(id) {
        const element = surphie._getElement(id);
        if (element) {
            element.style.position = "relative";
            element.style.fontWeight = "900";
            element.style.letterSpacing = "2px";
            element.style.textShadow = `
                1px 1px 0px #d9d9d9, 
                2px 2px 0px #cccccc, 
                3px 3px 0px #c0c0c0, 
                4px 4px 0px #b3b3b3, 
                5px 5px 0px #a6a6a6, 
                6px 6px 0px #999999, 
                7px 7px 0px #8c8c8c, 
                8px 8px 9px rgba(0,0,0,0.4), 
                8px 8px 20px rgba(0,0,0,0.2)
            `;
            element.style.boxShadow = `
                1px 1px 0px #ccc, 
                2px 2px 0px #ccc, 
                3px 3px 0px #ccc, 
                4px 4px 0px #bbb, 
                5px 5px 0px #aaa, 
                6px 6px 15px rgba(0,0,0,0.3)
            `;
        }
    }
};