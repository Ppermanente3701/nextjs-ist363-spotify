import { useState } from "react";

import Container from "../../layout/Container";
import Col from "../../layout/Col";
import Image from "next/image";
import styles from "./Showcase.module.scss";
import Row from "../../layout/Row";

const Showcase = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.showcase}>
      <div className={styles.showcase__images}>
        <ul
          className={styles.showcase__images__list}
          style={{
            width: `${items.length * 100}%`,
            transform: `translateX(-${(activeIndex / items.lenth) * 100}%)`,
          }}
        >
          {items.map((item, index) => {
            return (
              <li className={styles.showcase__images__item} key={index}>
                <Image
                  src={item.images[0].url}
                  alt={item.name}
                  width={item.images[0].width}
                  height={item.images[0].height}
                  className={styles.showcase__images__list__item__image}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.showcase__content}>
        <Container>
          <Row alignItems="flex-end" paddingBottom={2}>
            <Col md={1}>
              <span className={styles.showcase__counter}>
                {activeIndex + 1}/{items.length}
              </span>
            </Col>
            <Col xs={3} md={5}>
              <span className={styles.showcase__number}>{activeIndex + 1}</span>
            </Col>
            <Col xs={9} md={6}>
              <h2 className={styles.showcase__artist}>
                {items[activeIndex].name}
              </h2>
            </Col>
          </Row>
          <Row paddingBottom={2} paddingTop={2} borderTop={1}>
            <Col md={1}>
              <Row justifyContent="space-between">
                <button
                  onClick={() => {
                    setActiveIndex(activeIndex <= 0 ? 0 : activeIndex - 1);
                  }}
                >
                  Prev
                </button>
                <button
                  onClick={() => {
                    setActiveIndex(
                      activeIndex >= items.length - 1
                        ? items.length - 1
                        : activeIndex + 1
                    );
                  }}
                >
                  Next
                </button>
              </Row>
            </Col>
            <Col md={5}>Latest releases</Col>
            <Col md={6}>
              <button>Watch music video</button>
              <button>View artist page</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Showcase;
