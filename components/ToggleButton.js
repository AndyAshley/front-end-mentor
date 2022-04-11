import styles from "../components/css/togglebutton.module.css";

export default function ToggleButton({ setActive, btnText, btnName, style, label }) {
  return (
    <>
      <button className={styles.ToggleButton} onClick={setActive} name={btnName} style={style} aria-label={label}>
        {btnText}
      </button>
    </>
  );
}
