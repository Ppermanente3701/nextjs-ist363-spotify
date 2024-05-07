import classnames from "classnames/bind";
import styles from "./Paragraph.module.scss";

const cx = classnames.bind(styles);

const Paragraph = ({
  caption,
  children,
  intro,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}) => {
  const paragraphClasses = cx({
    paragraph: true,
    intro: intro,
    caption: caption,
    [`margin-right--${marginRight}`]: marginRight,
    [`margin-top--${marginTop}`]: marginTop,
    [`margin-left--${marginLeft}`]: marginLeft,
    [`margin-bottom--${marginBottom}`]: marginBottom,
  });
  return <p className={paragraphClasses}>{children}</p>;
};
export default Paragraph;
