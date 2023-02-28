import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);
function Home() {
  return <h1 className={cx("wrapper")}>This is home page</h1>;
}

export default Home;
