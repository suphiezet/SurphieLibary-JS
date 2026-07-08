 # 🛸 SurphieLibrary JS 

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

A **SurphieLibrary JS** é uma biblioteca ultra-leve e analítica de estilização dinâmica via JavaScript[cite: 4, 5]. Ela foi desenhada estrategicamente para poupar seu tempo: chega de perder horas debugando arquivos CSS gigantescos ou quebrando a cabeça com sintaxes complexas[cite: 4, 5]. Com uma única linha de código estruturado, você injeta efeitos avançados, profundidade, modos de cores inteligentes e layouts responsivos diretamente na lógica do seu software[cite: 4, 5].

---

## ⚡ Por que usar a SurphieLibrary?

> *"Por que passar 5 hours batendo a cabeça na parede por causa de uma sintaxe esquecida, se eu posso passar 5 minutos estruturando a lógica perfeita e dedicar meu tempo caçando e blindando o código contra os bugs reais?"* — **Suphiezet**

Abaixo está uma demonstração prática de como a sintaxe limpa da biblioteca simplifica o fluxo de desenvolvimento do frontend, rodando de forma estável diretamente no ecossistema do GitHub:

```javascript
// surphielibrary-terminal_preview.js

// 1. Centralize e adicione profundidade com estilo analítico
surphie.Center("main-card");
surphie.Depth("main-title");
surphie.Glow("main-title", "cyber-pink", 25);

```

---

## 🛠️ Guia do Arsenal Metódico (10 Comandos da V1)

Abaixo estão detalhados todos os comandos nativos inclusos na **Versão 1** da biblioteca. Eles foram organizados com blocos específicos de marcação para ativação correta do realce de sintaxe.

### 1. Arredondamento Rápido

```javascript
surphie.Round("id")

```

Aplica dinamicamente propriedades de transição de borda e arredondamento perfeito no elemento especificado pelo ID.

* **Exemplo de uso:**
```javascript
surphie.Round("profile-avatar");

```



### 2. Tipografia em Nuvem Automatizada

```javascript
surphie.Font.cursive("id") // ou surphie.Font."nome_da_fonte"

```

Conecta o elemento a um repositório otimizado em nuvem de fontes tipográficas pré-selecionadas e renderiza a família tipográfica instantaneamente.

* **Exemplo de uso:**
```javascript
surphie.Font.cursive("title-header");

```



### 3. Engine de Gradientes Avançados

```javascript
surphie.Gradient.colors("cor1", "cor2").mix() // ou .random()

```

Injeta gradientes calculados diretamente sobre o elemento. O método `.mix()` mescla as cores de forma linear balanceada, enquanto o método `.random()` distribui os ângulos e as intensidades de forma expressiva e forte.

* **Exemplo de uso:**
```javascript
surphie.Gradient.colors("#ff5c7c", "#00ffff").mix("background-id");

```



### 4. Sobreposição Dupla Cromática

```javascript
surphie.Twocolors("id").red("hex").blue("hex")

```

Aplica duas tonalidades sobrepostas de forma estruturada. A primeira cor assume a proeminência frontal, enquanto a segunda cor cria uma camada reflexiva traseira coordenada, mantendo ambas perfeitamente visíveis ao usuário.

* **Exemplo de uso:**
```javascript
surphie.Twocolors("hero-section").red("#ff0000").blue("#0000ff");

```



### 5. Injeção de Glassmorphism (Efeito Vidro)

```javascript
surphie.Glass("id", intensidade_blur)

```

O clássico efeito fosco contemporâneo. Você passa o ID do alvo e um valor inteiro para a força do desfoque; a biblioteca calcula e injeta de forma autônoma o `backdrop-filter`, opacidades de fundo e contornos de contraste necessários.

* **Exemplo de uso:**
```javascript
surphie.Glass("glass-card", 15);

```



### 6. Detecção do Tema Escuro do Sistema (Dark Mode)

```javascript
surphie.Theme.auto() // ou surphie.Theme.toggle("id_do_botao")

```

Lê nativamente os metadados de preferência de exibição do sistema operacional (`prefers-color-scheme`) do usuário. O método `.auto()` configura o fundo e o contraste automaticamente, enquanto o `.toggle()` atrela o disparo e a transição suave a um elemento clicável específico.

* **Exemplo de uso:**
```javascript
surphie.Theme.auto();

```



### 7. Detecção do Tema Claro do Sistema (Light Mode)

```javascript
surphie.ThemeWhite.auto() // ou surphie.ThemeWhite.toggle("id_do_botao")

```

A exata contraparte analítica do gerenciador escuro. Aplica inversão inteligente e equilibrada de paletas claras e bases limpas de contraste sem cansar a visão do usuário.

* **Exemplo de uso:**
```javascript
surphie.ThemeWhite.toggle("sun-icon-btn");

```



### 8. Emissão de Brilho Neon (Glow Aura)

```javascript
surphie.Glow("id", "cor", intensidade)

```

Gera um efeito simulado de iluminação traseira expansiva. Ideal para dar um visual Cyberpunk de alta tecnologia, aplicando sombras balanceadas em múltiplas camadas milimetricamente calculadas.

* **Exemplo de uso:**
```javascript
surphie.Glow("neon-button", "#50fa7b", 20);

```



### 9. O Centralizador Supremo

```javascript
surphie.Center("id_pai")

```

A cura definitiva para as dores de cabeça estruturais de alinhamento CSS. Ao referenciar o ID do elemento contêiner pai, a biblioteca reconfigura a hierarquia dos elementos internos aplicando as melhores práticas de posicionamento e flexibilidade de eixos, alinhando tudo perfeitamente ao meio da tela.

* **Exemplo de uso:**
```javascript
surphie.Center("main-flex-wrapper");

```



### 10. Efeito de Profundidade Tridimensional

```javascript
surphie.Depth("id")

```

Injeta oclusão de ambiente e sombras de projeção calculadas. É altamente recomendado para blocos de textos, headers e cartões que precisam se destacar visualmente das camadas de fundo, dando uma percepção tridimensional (3D) limpa.

* **Exemplo de uso:**
```javascript
surphie.Depth("floating-text");

```



---

## 🔓 Licença Livre & Customização Total

> "Você poderá usar e alterar a biblioteca do jeito que quiser."
> 
> 

Este projeto é totalmente de código aberto sob a licença **MIT**. Como arquiteto da lógica do seu próprio ecossistema, fique 100% à vontade para fazer forks, criar pull requests, alterar a mecânica dos motores internos de estilo ou adicionar seus próprios comandos personalizados na arquitetura!