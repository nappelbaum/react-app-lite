//import avatarImg from "../assets/img/avatar.jpg";
import styles from "./Profile.module.css";

export const Profile = (props) => {
 let user = props.function();
//  console.log(user);
  return (
    <div className="row">
      <div className="col-md-4">
        <img src={user.avatar} alt="avatar-image" width="100%" />
      </div>
      <div className="col-md-8">
        <h2 className={styles.name}>
          Фамилия и имя: <span>{user.name} {user.lastname}</span>
        </h2>
        <p className={styles.id} style={{fontWeight: 700, backgroundColor: "green"}}>
          Id: <span>{user.id}</span>
        </p>
        <p className={styles.mail}>
          Email: <span>{user.email}</span>
        </p>
      </div>
    </div>
  );
};
