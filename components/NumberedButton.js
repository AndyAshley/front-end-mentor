import styles from "../components/css/numberedbutton.module.css";

export default function NumberedButton({ setActive, btnName, style, btnText }) {
  return (
    <>
      <button className={styles.NumberedButton} onClick={setActive} name={btnName} style={style}>
        {btnText}
      </button>
    </>
  );
}
