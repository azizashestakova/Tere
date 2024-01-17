import Map from "../../assets/map.png";
import PlayIcon from "../../assets/play.svg";
import AppStoreIcon from "../../assets/appStore.svg";

import Button from "../Button/Button";

import styles from "./Preview.module.css";

const Preview = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.description}>
        <h1 className={styles.title}>
          DOWNLOAD APP, SAVE MONEY, MAKE FRIENDS!
        </h1>
        <p className={styles.text}>
          Its simple and its free. Play your part in reducing Carbon Footprint
          and help Mother Nature to sustain its beauty. So what are you waiting
          for ? lets ride together
        </p>
        <div className={styles.buttons}>
          <Button text="Download" src={PlayIcon} />
          <Button text="Download" src={AppStoreIcon} />
        </div>
      </div>

      <img className={styles.img} src={Map} alt="Карта" />
    </section>
  );
};

export default Preview;
