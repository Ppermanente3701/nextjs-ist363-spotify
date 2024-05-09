import Heading from "../../html/Heading";
import Image from "next/image";
import styles from "./Grid.module.scss";
import Paragraph from "../../html/Paragraph";

const Grid = ({ items }) => {
  return (
    <ul className={styles.grid}>
      {items.map((item, index) => {
        return (
          <li className={styles.grid__item} key={`ablum-${index}`}>
            <Image
              src={item.images[0].url}
              alt={item.name}
              width={item.images[0].width}
              height={item.images[0].height}
              className="responsive-img"
            />
            <Paragraph>{item.name}</Paragraph>
          </li>
        );
      })}
    </ul>
  );
};
export default Grid;
