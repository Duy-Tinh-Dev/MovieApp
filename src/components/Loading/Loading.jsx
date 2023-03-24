import classNames from "classnames/bind";
import style from "./loading.module.scss";
const cx = classNames.bind(style);
function Loading() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("middle")}>
        <div className={cx("bar", "bar1")}></div>
        <div className={cx("bar", "bar2")}></div>
        <div className={cx("bar", "bar3")}></div>
        <div className={cx("bar", "bar4")}></div>
        <div className={cx("bar", "bar5")}></div>
        <div className={cx("bar", "bar6")}></div>
        <div className={cx("bar", "bar7")}></div>
        <div className={cx("bar", "bar8")}></div>
      </div>
    </div>
  );
}

export default Loading;
