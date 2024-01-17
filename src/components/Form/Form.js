import Button from "../Button/Button";

import styles from "./Form.module.css";

const Form = () => (
  <section className={styles.wrapper}>
    <p className={styles.text}>Let’s go. Get a link to download the app.</p>
    <form className={styles.form}>
      <input placeholder="Enter mobile phone number" className={styles.input} />
      <Button text="Apply to drive" />
    </form>
  </section>
);

export default Form;
