import React from "react";
import { register } from "swiper/element/bundle";
import classNames from "classnames/bind";
import styles from "./slider.module.scss";
import { apiService } from "~/services";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
register();
function Slider({ classNames, dataSlider }) {
  const slideItems = dataSlider.map((item) => {
    const pathImage = item.backdrop_path || item.poster_path;
    const title = item.title || item.original_name;
    const image = pathImage && apiService.getImage(pathImage);
    return (
      <swiper-slide key={item.id}>
        <div className={cx("image")}>
          <img src={image} alt={title} />
        </div>
        <div className={cx("content")}>
          <h3 className={cx("heading")}>{title}</h3>
          <p className={cx("description")}>{item.overview}</p>
          <div className={cx("button-group")}>
            <Button leftIcon={<FontAwesomeIcon icon={faPlay} />}>
              Watch now
            </Button>
            <Button outline leftIcon={<FontAwesomeIcon icon={faCircleInfo} />}>
              Detail
            </Button>
          </div>
        </div>
      </swiper-slide>
    );
  });

  return (
    <swiper-container
      autoplay
      class={cx("wrapper", {
        [classNames]: classNames,
      })}
      slidesPerView={1}
      speed={1500}
      loop={true}
      effect={"fade"}
      pagination
      navigation
    >
      {slideItems}
    </swiper-container>
  );
}

export default Slider;
