import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { Header, Footer } from "../components";
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className={cx("wrap-children")}>{children}</div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
