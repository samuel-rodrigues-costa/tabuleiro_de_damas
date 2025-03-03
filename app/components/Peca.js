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
