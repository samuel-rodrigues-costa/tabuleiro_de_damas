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
