import { FC } from "react";
import { Stats, Links } from "../";
import styles from "./UserCreds.module.css";

interface UserCredsProps {
  name: string;
  login: string;
  joined: string;
  avatar: string;
  bio: string;
  repos: string;
  followers: string;
  following: string;
  location: string;
  blog: string;
  twitter: string;
  company: string;
}
const UserCreds: FC<UserCredsProps> = ({
  name,
  login,
  joined,
  avatar,
  bio,
  repos,
  followers,
  following,
  location,
  blog,
  twitter,
  company,
}) => {
  const calculateDate = (joinDate: string) => {
    let tempDate = new Date(joinDate);
    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${tempDate.getDate()} ${
      monthNames[tempDate.getMonth()]
    } ${tempDate.getFullYear()}`;
  };
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img className={styles.avatarimg} src={avatar} alt="avatar" />
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <div className={styles.names}>
            <h1>{name}</h1>
            <a
              href={`https:\\github.com/${login}`}
              target="blank"
            >{`@${login}`}</a>
            <p className={styles.bio}>{bio}</p>
          </div>
          <p className={styles.date}>Joined {calculateDate(joined)}</p>
        </div>
        <Stats followers={followers} following={following} repos={repos} />
        <Links
          twitter={twitter}
          company={company}
          blog={blog}
          location={location}
        />
      </div>
    </div>
  );
};

export default UserCreds;
