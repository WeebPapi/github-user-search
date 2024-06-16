import React, { FC, useState } from "react";

import styles from "./GithubUserSearch.module.css";

import axios from "axios";
import { UserCreds } from "../";

interface GithubUserSearchProps {}

const GithubUserSearch: FC<GithubUserSearchProps> = () => {
  const apiKey = import.meta.env.VITE_APITOKEN;
  const [value, setValue] = useState("");
  const [fulfilled, setFulfilled] = useState(false);

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [joined, setJoined] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [repos, setRepos] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [location, setLocation] = useState("");
  const [blog, setBlog] = useState("");
  const [twitter, setTwitter] = useState("");
  const [company, setCompany] = useState("");

  const handleClick = () => {
    const url = `https://api.github.com/users/${value.trim()}`;
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
      .then((res) => {
        setFulfilled(true);
        let info = res.data;
        console.log(info);
        setAvatar(info.avatar_url);
        setLogin(info.login);
        setName(info.name);
        setJoined(info.created_at);
        setBio(info.bio ? info.bio : "This profile does not have a bio");
        setRepos(info.public_repos);
        setFollowers(info.followers);
        setFollowing(info.following);
        setLocation(info.location ? info.location : "Not available");
        setBlog(info.blog ? info.blog : "Not available");
        setTwitter(
          info.twitter_username ? info.twitter_username : "Not available"
        );
        setCompany(info.company ? info.company : "Not available");
      })
      .catch(() => {
        alert("User not found!");
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.inputbox}>
        <input
          className={styles.input}
          value={value}
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Search GitHub username..."
        ></input>
        <button type="button" onClick={handleClick}>
          Search
        </button>
      </div>
      {fulfilled ? (
        <UserCreds
          login={login}
          name={name}
          joined={joined}
          avatar={avatar}
          bio={bio}
          repos={repos}
          followers={followers}
          following={following}
          location={location}
          blog={blog}
          twitter={twitter}
          company={company}
        />
      ) : null}
    </div>
  );
};

export default GithubUserSearch;
