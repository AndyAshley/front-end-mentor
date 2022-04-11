import styles from "../components/css/numberedbutton.module.css";

export default function NumberedButton({ setActive, btnName, style, btnText, label }) {
  return (
    <>
      <button className={styles.NumberedButton} onClick={setActive} name={btnName} style={style} aria-label={label}>
        {btnText}
      </button>
    </>
  );
}
