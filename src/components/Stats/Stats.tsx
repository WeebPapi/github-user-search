import { FC } from "react";
import styles from "./Stats.module.css";

interface StatsProps {
  followers: string;
  following: string;
  repos: string;
}

const Stats: FC<StatsProps> = ({ followers, following, repos }) => {
  return (
    <div className={styles.stats}>
      <div className={styles.entry}>
        <h3>Repos</h3>
        <p>{repos}</p>
      </div>
      <div className={styles.entry}>
        <h3>Followers</h3>
        <p>{followers}</p>
      </div>
      <div className={styles.entry}>
        <h3>Following</h3>
        <p>{following}</p>
      </div>
    </div>
  );
};

export default Stats;
