import LogoIcon from "../../assets/logo.svg";

import Button from "../Button/Button";

import styles from "./Header.module.css";

const nav = ["Home", "How tere works", "Tere benefits"]; //TODO:: in external file

const Header = () => (
  //TODO:: Добавить класс при скролле
  <header className={styles.header}>
    <a className={styles.linkLogo} href="/">
      <img className={styles.logo} src={LogoIcon} alt="Логотип" />
    </a>
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {nav.map((item) => (
            <li className={styles.item}>
              <a href="/" className={styles.link}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button text="Help Center" color="green" />
    </div>
  </header>
);

export default Header;
