import styles from "./Button.module.css";

const Button = ({ text, src, color }) => {
  return (
    <button
      //TODO:: add library for classes
      className={[styles.button, color ? styles.buttonGreen : ""].join(" ")}
    >
      {src && <img className={styles.img} src={src} alt="Иконка" />}
      {text}
    </button>
  );
};

export default Button;
