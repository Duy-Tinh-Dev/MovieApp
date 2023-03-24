import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { loading } from "~/redux/useSelector";
import { handleChangeLoading } from "~/redux/slice/loadingSlice";
import { useSelector, useDispatch } from "react-redux";
import Loading from "~/components/Loading/Loading";
const cx = classNames.bind(styles);
function Home() {
  const dispatch = useDispatch();
  // const count = useSelector(loading);
  const handleTest = () => {
    dispatch(handleChangeLoading(true));
  };
  return (
    <div className={cx("wrapper")}>
      <h1>This is home page</h1>
      <button onClick={handleTest}>Test</button>
    </div>
  );
}

export default Home;
