import classnames from "classnames/bind";
import styles from "./Heading.module.scss";

const cx = classnames.bind(styles);

const Heading = ({
  children,
  level,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}) => {
  const Tag = `h${level}`;

  const headingClasses = cx({
    heading: true,
    [`heading--${level}`]: level,
    [`margin-right--${marginRight}`]: marginRight,
    [`margin-top--${marginTop}`]: marginTop,
    [`margin-left--${marginLeft}`]: marginLeft,
    [`margin-bottom--${marginBottom}`]: marginBottom,
  });
  return <Tag className={headingClasses}>{children}</Tag>;
};
export default Heading;
