import styles from "./Button.module.css";

function Button({ title, onClick, disabled, id }) {
  return (
    <button id={id}onclick={onClick} disabled={disabled} data-testid="button-component" className={styles.button}>
      {title}
    </button>
  );
}

export default Button;
