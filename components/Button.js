export default function Button({ border = "none", background = "transparent", link = "#", text = "I'm a Button", textColor = "#FFF", classname, id }) {
  return (
    <button title={text} className={`button-main ${classname}`} style={{ backgroundColor: `${background}`, border: `${border}` }} id={id}>
      <a href={link} style={{ color: `${textColor}` }}>
        {text}
      </a>
    </button>
  );
}
