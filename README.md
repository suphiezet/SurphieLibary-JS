# 🛸 SurphieLibrary JS 

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

A **SurphieLibrary JS** é uma biblioteca ultra-leve e analítica de estilização dinâmica via JavaScript. Ela foi desenhada estrategicamente para poupar seu tempo: chega de perder horas debugando arquivos CSS gigantescos ou quebrando a cabeça com sintaxes complexas. Com uma única linha de código estruturado, você injeta efeitos avançados, profundidade, modos de cores inteligentes e layouts responsivos diretamente na lógica do seu software.

---

## ⚡ Por que usar a SurphieLibrary?

> *"Por que passar 5 horas batendo a cabeça na parede por causa de uma sintaxe esquecida, se eu posso passar 5 minutos estruturando a lógica perfeita e dedicar meu tempo caçando e blindando o código contra os bugs reais?"* — **Suphiezet**

Para evitar as quebras de carregamento de APIs externas (aqueles bugs clássicos de widgets fora do ar), a identidade visual da documentação abaixo foi construída usando **Animações SVG Nativas com CSS Puro**, garantindo renderização 100% estável e fluida diretamente no ecossistema do GitHub.

<div align="center">
  <!-- Painel de Demonstração Animado (CSS Puro Integrado Nativamente) -->
  <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 850 240" width="100%" style="background: #0b0f19; border-radius: 12px; border: 1.5px solid #ff5c7c;">
    <style>
      @keyframes pulseGlow {
        0% { stroke-width: 1.5px; opacity: 0.8; }
        50% { stroke-width: 3px; stroke: #50fa7b; opacity: 1; filter: drop-shadow(0px 0px 8px #50fa7b); }
        100% { stroke-width: 1.5px; opacity: 0.8; }
      }
      .animated-border {
        animation: pulseGlow 4s infinite ease-in-out;
      }
      .code-line {
        font-family: 'Courier New', monospace;
        font-size: 15px;
        font-weight: bold;
        fill: #50fa7b;
      }
      .keyword { fill: #ff79c6; }
      .string { fill: #f1fa8c; }
      .comment { fill: #6272a4; font-style: italic; }
    </style>
    <!-- Moldura com Animação de Pulso Neon -->
    <rect width="100%" height="100%" fill="#0b0f19" rx="12" class="animated-border" stroke="#ff5c7c" stroke-width="1.5"/>
    <!-- Cabeçalho do Terminal -->
    <circle cx="25" cy="25" r="6" fill="#ff5555"/>
    <circle cx="45" cy="25" r="6" fill="#ffb86c"/>
    <circle cx="65" cy="25" r="6" fill="#50fa7b"/>
    <text x="95" y="30" font-family="system-ui, sans-serif" font-size="12" fill="#6272a4" font-weight="bold">surphielibrary-terminal_preview.js</text>
    <line x1="15" y1="45" x2="835" y2="45" stroke="#1e293b" stroke-width="1.5"/>
<!-- Código Sendo Demonstrado de Forma Limpa -->
    <text x="35" y="85" class="code-line">// 1. Centralize e adicione profundidade com estilo analítico</text>
    <text x="35" y="115" class="code-line">surphie.Center("main-card");</text>
    <text x="35" y="145" class="code-line">surphie.Depth("main-title");</text>
    <text x="35" y="175" class="code-line">surphie.Glow("main-title", "cyber-pink", 25);</text>
        <!-- Tag informativa de status estável -->
    <rect x="630" y="70" width="185" height="135" fill="#1e293b" rx="8" stroke="#334155" stroke-width="1"/>
    <text x="722" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffb86c" text-anchor="middle">STATUS DO ENGINE</text>
    <circle cx="665" cy="140" r="7" fill="#50fa7b"/>
    <text x="685" y="145" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#fff">CSS-Pure Active</text>
    <circle cx="665" cy="175" r="7" fill="#50fa7b"/>
    <text x="685" y="180" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#fff">0% Broken Links</text>
  </svg>
</div>

---

## 🛠️ Guia do Arsenal Metódico (10 Comandos da V1)

Abaixo estão detalhados todos os comandos nativos inclusos na **Versão 1** da biblioteca. Eles foram organizados com blocos específicos de marcação para ativação correta do realce de sintaxe.

### 1. Arredondamento Rápido
```javascript
surphie.Round("id")
```