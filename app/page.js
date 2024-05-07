import Heading from "../components/Heading";
import Image from "next/image";
import Paragraph from "../components/Paragraph";
import styles from "./page.module.css";

const Homepage = () => {
  return (
    <main>
      <Heading level={1} marginLeft={6}>
        Spotify
      </Heading>
      <Heading level={2} marginBottom={4}>
        Artists
      </Heading>
      <Heading level={3}>Songs</Heading>
      <Paragraph intro marginBottom={12}>
        LLL
      </Paragraph>
      <Paragraph marginBottom={1}>LLL</Paragraph>
      <Paragraph marginBottom={5}>LLL</Paragraph>
      <Paragraph caption>LLL</Paragraph>
    </main>
  );
};
export default Homepage;
