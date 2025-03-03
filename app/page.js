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

  return <div className={style.div}>
    <h1 className={style.h1}>Dama</h1>
    <div className={style.tabuleiro}>{casas}</div>
  </div> 
}
