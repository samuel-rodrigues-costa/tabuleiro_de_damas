# Jogo de Damas em Next.js

Este projeto é um tabuleiro de Damas simples, desenvolvido utilizando **Next.js**. O tabuleiro é responsivo e as peças são posicionadas de acordo com as regras iniciais do jogo de damas.

## Como Rodar o Projeto

### 1. Clonar o Repositório

Clone o repositório para o seu computador:

```bash
git clone https://github.com/samuel-rodrigues-costa/tabuleiro_de_damas.git
```

### 2. Instalar as Dependências

Acesse a pasta do projeto e instale as dependências necessárias:

```bash
cd tabuleiro_de_damas
npm install
```

### 3. Rodar o Servidor de Desenvolvimento

Execute o comando abaixo para iniciar o servidor local:

```bash
npm run dev
```

O projeto será iniciado em `http://localhost:3000`.

## Estrutura de Arquivos

- **`pages/index.js`**: Componente principal que renderiza o tabuleiro e as peças.
- **`components/Casa.js`**: Componente que representa cada casa do tabuleiro.
- **`components/Peca.js`**: Componente que representa cada peça do jogo.
- **`css/style.module.css`**: Arquivo de estilos CSS utilizados pelos componentes.

## Código-Fonte

### `pages/index.js`

```javascript
import style from "./css/style.module.css";
import Casa from "./components/Casa";
import Peca from "./components/Peca";

export default function Tabuleiro() {
  const casas = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const isPreta = (i + j) % 2 !== 0;
      let peca = null;

      // Peças do jogador 1 (vermelho)
      if (isPreta && i < 3) {
        peca = <Peca className={style.peca} jogador={1} />;
      }
      // Peças do jogador 2 (azul)
      else if (isPreta && i > 4) {
        peca = <Peca className={style.peca} jogador={2} />;
      }

      casas.push(
        <Casa className={style.casa} key={`${i}-${j}`} preto={isPreta}>
          {peca}
        </Casa>
      );
    }
  }

  return (
    <div className={style.div}>
      <h1 className={style.h1}>Dama</h1>
      <div className={style.tabuleiro}>{casas}</div>
    </div>
  );
}
```

### `components/Casa.js`

```javascript
export default function Casa(props) {
  return (
    <div
      className={props.className}
      style={{
        backgroundColor: props.preto ? "black" : "white",
      }}
    >
      {props.children}
    </div>
  );
}
```

### `components/Peca.js`

```javascript
export default function Peca(props) {
  return (
    <div
      className={props.className}
      style={{
        backgroundColor: props.jogador === 1 ? "rgb(212, 23, 23)" : "rgb(39, 24, 197)",
      }}
    ></div>
  );
}
```

### `css/style.module.css`

```css
.div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
}

.h1 {
  font-family: 'Arial', sans-serif;
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #3b3b3b;
}

.tabuleiro {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  width: 50vw;
  height: 80vmin;
  border-bottom: 1.2rem solid rgb(61, 38, 57);
  border-right: 0.6rem solid rgb(61, 38, 57);
  border-left: 0.6rem solid rgb(235, 229, 234);
  border-top: 0.2rem solid rgb(235, 229, 234);
  box-shadow: 10px 18px 5px 5px rgb(136, 75, 125);
}

.casa {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.peca {
  width: 70%;
  height: 70%;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgb(221, 203, 224);
  border: 5px groove rgb(247, 130, 202);
}

.peca:hover {
  filter: brightness(130%);
  transform: translateY(-4px);
}
```

## Principais Pontos da Estilização

- **Contêiner Principal (`.div`)**: Utiliza Flexbox para centralizar todo o conteúdo (título e tabuleiro) vertical e horizontalmente, com espaçamento entre os elementos e padding para separar o conteúdo das bordas.

- **Título (`.h1`)**: 
  - Utiliza uma fonte sans-serif com tamanho grande (48px), negrito, letras maiúsculas e espaçamento entre as letras para dar destaque.
  
- **Tabuleiro (`.tabuleiro`)**: 
  - É um grid com 8 colunas e 8 linhas, garantindo um layout simétrico.
  - As dimensões são definidas em unidades relativas (`vw` e `vmin`), permitindo responsividade.
  - As bordas e a sombra aplicadas criam um efeito tridimensional que destaca o tabuleiro.

- **Casas (`.casa`)**: 
  - Cada casa é um container flex que centraliza seu conteúdo, garantindo que as peças fiquem perfeitamente posicionadas no centro.

- **Peças (`.peca`)**: 
  - São círculos, graças ao `border-radius: 50%`, com uma borda decorativa e sombra para efeito de destaque.
  - Ao passar o mouse, as peças ganham brilho e se deslocam ligeiramente para cima, indicando interação.
  
- **Diferenciação de Peças**: 
  - As peças do jogador 1 são vermelhas (`rgb(212, 23, 23)`) e as do jogador 2 são azuis (`rgb(39, 24, 197)`), conforme definido dinamicamente no componente `Peca.js`.

## Conclusão

Este projeto demonstra como criar um tabuleiro de damas simples usando **Next.js**, combinando o poder do Flexbox e do CSS Grid para um layout responsivo e moderno. As peças são estilizadas para ter um visual atraente com efeitos sutis de interação, e o código foi organizado em componentes para facilitar a manutenção e a escalabilidade do projeto.
