import styles from "../components/css/paginationbutton.module.css";

export default function PaginationButton({ setActive, btnName, style, label }) {
  return (
    <>
      <button className={styles.PaginationButton} onClick={setActive} name={btnName} style={style} aria-label={label}></button>
    </>
  );
}
