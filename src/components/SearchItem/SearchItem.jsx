import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./searchItem.module.scss";
import { apiService } from "~/services";
import Image from "../Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function SearchItem({ classNames, data }) {
  const pathImage = data.backdrop_path || data.poster_path;
  const image = pathImage && apiService.getImage(pathImage);
  const name = data.original_title || data.original_name;
  const SearchItemStyle = cx("wrapper", {
    [classNames]: classNames,
  });
  return (
    <Link className={SearchItemStyle}>
      <div className={cx("thumb")}>
        <Image src={image} />
      </div>
      <span className={cx("content")}>{name}</span>
      <FontAwesomeIcon
        icon={faPlay}
        className={cx("icon-play")}
      ></FontAwesomeIcon>
    </Link>
  );
}

export default SearchItem;
