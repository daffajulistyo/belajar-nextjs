import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    
      <Layout pageTitle='Home Page'>
        <Image src="/slack.png" width={300} height={300} alt="Profile" />
        <h1 className={styles["title-homepage"]}>Welcome Page</h1>
        <p>Lorem ipsum dolor sit, amet consecteetur adipisicing elit. Sunt magnam repudiandae incidunt eligendi laboriosam quo eos, eveniet odit neque vitae assumenda eaque nisi molestias facere aspernatur explicabo autem pariatur non!</p>
        <p>Lorem ipsum dolor sit, amet consecteetur adipisicing elit. Sunt magnam repudiandae incidunt eligendi laboriosam quo eos, eveniet odit neque vitae assumenda eaque nisi molestias facere aspernatur explicabo autem pariatur non!</p>
        <p>Lorem ipsum dolor sit, amet consecteetur adipisicing elit. Sunt magnam repudiandae incidunt eligendi laboriosam quo eos, eveniet odit neque vitae assumenda eaque nisi molestias facere aspernatur explicabo autem pariatur non!</p>
        <p>Lorem ipsum dolor sit, amet consecteetur adipisicing elit. Sunt magnam repudiandae incidunt eligendi laboriosam quo eos, eveniet odit neque vitae assumenda eaque nisi molestias facere aspernatur explicabo autem pariatur non!</p>
        <p>Lorem ipsum dolor sit, amet consecteetur adipisicing elit. Sunt magnam repudiandae incidunt eligendi laboriosam quo eos, eveniet odit neque vitae assumenda eaque nisi molestias facere aspernatur explicabo autem pariatur non!</p>
        <p>Lorem ipsum dolor sit, amet consecteetur adipisicing elit. Sunt magnam repudiandae incidunt eligendi laboriosam quo eos, eveniet odit neque vitae assumenda eaque nisi molestias facere aspernatur explicabo autem pariatur non!</p>
      </Layout>
    
    
  );
};

export default Home;
