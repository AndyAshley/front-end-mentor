import styles from "../components/css/togglebutton.module.css";

export default function ToggleButton({ setActive, btnText, btnName, style }) {
  return (
    <>
      <button className={styles.ToggleButton} onClick={setActive} name={btnName} style={style}>
        {btnText}
      </button>
    </>
  );
}
