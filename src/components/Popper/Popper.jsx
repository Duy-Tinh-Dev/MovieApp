import classNames from "classnames/bind";
import styles from "./Popper.module.scss";
const cx = classNames.bind(styles);
function Popper({ children, className }) {
  const popperClass = cx("wrapper", {
    [className]: className,
  });
  return <div className={popperClass}>{children}</div>;
}

export default Popper;
