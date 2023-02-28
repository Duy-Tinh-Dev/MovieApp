import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);
function Header({ children, classNames, onClick }) {
  const headerStyle = cx("wrapper", {
    [classNames]: classNames,
  });
  return (
    <h4 className={headerStyle} onClick={onClick}>
      {children}
    </h4>
  );
}

export default Header;
