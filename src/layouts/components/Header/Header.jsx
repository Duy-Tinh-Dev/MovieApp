import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { apiService } from "~/services";
import images from "~/assets/images";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import Popover from "~/components/Popover";
import Search from "../Search";
import Tippy from "@tippyjs/react/headless";
import Popper from "~/components/Popper";
import Slider from "../Slider";
import Image from "~/components/Image";
import icon from "~/assets/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMoneyBillWave,
  faTelevision,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Header() {
  const [dataSlider, setDataSlider] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getDataSlider = async () => {
      const params = {};
      let type = "all";
      let time = "day";
      const response = await apiService.getTrending(type, time, params);
      setDataSlider(response.results.slice(0, 6));
    };
    getDataSlider();
  }, []);

  const menuListOption = [
    {
      heading: "Sign up for a package to receive VIP benefits",
      data: [
        {
          key: 1,
          title: "100.00+ hours of content & 200 TV channels",
          link: "/",
          icon: <img src={icon.promotionVip} alt="promotionVip" />,
        },
        {
          key: 2,
          title: "See the earliest & exclusive content",
          link: "/test2",
          icon: <img src={icon.promotionHot} alt="promotionHot" />,
        },
        {
          key: 3,
          title: "No ads",
          icon: <img src={icon.promotionAds} alt="promotionAds" />,
        },
        {
          key: 4,
          title: "Optional Subtitles/ Dubbing/ Voiceovers",
          icon: <img src={icon.promotionSub} alt="promotionSub" />,
        },
        {
          key: 5,
          title: "view Full HD/4K. picture quality",
          icon: <img src={icon.promotion4k} alt="promotion4k" />,
        },
      ],
    },
  ];
  const NavListOption = [
    {
      id: 1,
      path: "/",
      name: "Home",
      icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
      id: 2,
      path: "/movie",
      name: "Movie",
      icon: <FontAwesomeIcon icon={faMoneyBillWave} />,
    },
    {
      id: 3,
      path: "/tv",
      name: "TV",
      icon: <FontAwesomeIcon icon={faTelevision} />,
    },
  ];
  return (
    <div className={cx("wrapper")}>
      <header className={cx("top")}>
        <div className={cx("navigation")}>
          <Link to="/" className={cx("logo")}>
            <Image src={images.logo} alt="logo"></Image>
          </Link>
          <nav className={cx("navigation-list")}>
            {NavListOption.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={cx("navigation-item", {
                  active: item.path === location.pathname,
                })}
              >
                {item.icon}
                <span className={cx("name")}>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className={cx("action")}>
          <Menu menuList={menuListOption}>
            <Button primary>Sign up the package</Button>
          </Menu>
          <Popover text="Click to enter the coupon code for the package">
            <Button text to="/hello" className={cx("action-item")}>
              Enter code
            </Button>
          </Popover>
          <Search />
          <Tippy
            interactive
            placement="bottom-end"
            offset={[0, 11]}
            render={() => {
              return (
                <Popper className={cx("wrap-btn-account")}>
                  <Button outline className={cx("button")}>
                    Log in
                  </Button>
                  <Button outline className={cx("button")}>
                    Register
                  </Button>
                </Popper>
              );
            }}
          >
            <FontAwesomeIcon icon={faUser} className={cx("action-item")} />
          </Tippy>
        </div>
      </header>
      <Slider dataSlider={dataSlider} />
    </div>
  );
}

export default Header;
