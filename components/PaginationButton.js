import styles from "../components/css/paginationbutton.module.css";

export default function PaginationButton({ setActive, btnName, style }) {
  return (
    <>
      <button className={styles.PaginationButton} onClick={setActive} name={btnName} style={style}></button>
    </>
  );
}
