import { FC } from "react";
import styles from "./Links.module.css";
import {
  companyIcon,
  locationIcon,
  twitterIcon,
  websiteIcon,
} from "../../assets";

interface LinksProps {
  location: string;
  twitter: string;
  blog: string;
  company: string;
}

const Links: FC<LinksProps> = ({ location, twitter, blog, company }) => {
  const available = (val: string) => {
    if (val === "Not available") return false;
    return true;
  };
  return (
    <div className={styles.container}>
      <div className={styles.entry}>
        <img src={locationIcon} alt="location" />
        <p className={available(location) ? styles.link : styles.altlink}>
          {location}...
        </p>
      </div>
      <div className={styles.entry}>
        <img src={twitterIcon} alt="twitter" />
        <a
          href={available(twitter) ? twitter : undefined}
          className={available(twitter) ? styles.link : styles.altlink}
        >
          {twitter.slice(0, 13)}...
        </a>
      </div>
      <div className={styles.entry}>
        <img src={websiteIcon} alt="blog" />
        <a
          href={available(blog) ? blog : undefined}
          className={!(blog === "Not available") ? styles.link : styles.altlink}
        >
          {blog.slice(0, 13)}...
        </a>
      </div>
      <div className={styles.entry}>
        <img src={companyIcon} alt="company" />
        <p
          className={
            !(company === "Not available") ? styles.link : styles.altlink
          }
        >
          {company}...
        </p>
      </div>
    </div>
  );
};

export default Links;
