import avatarImg from "../assets/img/avatar.jpg";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <img src={avatarImg} alt="avatar-image" width="100%" />
      </div>
      <div className="col-md-8">
        <h2 className={styles.name}>
          Фамилия и имя: <span>Василий Катков</span>
        </h2>
        <p className={styles.id} style>
          Id: <span>3</span>
        </p>
        <p className={styles.mail}>
          Email: <span>vasya@mail.ru</span>
        </p>
      </div>
    </div>
  );
};
