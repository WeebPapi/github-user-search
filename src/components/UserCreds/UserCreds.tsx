import React, { FC } from "react";
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
            <h2>{`@${login}`}</h2>
            <p className={styles.bio}>{bio}</p>
          </div>
          <p className={styles.date}>Joined {calculateDate(joined)}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCreds;
