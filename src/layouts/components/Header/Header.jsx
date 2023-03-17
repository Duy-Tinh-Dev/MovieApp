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
import Popper from "~/components/Popper";
import Slider from "../Slider";
import Image from "~/components/Image";
import icon from "~/assets/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faMoneyBillWave,
  faTelevision,
  faUser,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Header() {
  const [dataSlider, setDataSlider] = useState([]);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const getDataSlider = async () => {
      const params = {};
      let type = "all";
      let time = "day";
      const { results } = await apiService.getTrending(type, time, params);
      setDataSlider(results.slice(0, 6));
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

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };
  return (
    <div className={cx("wrapper")}>
      <header className={cx("top")}>
        <div className={cx("navigation")}>
          <Button className={cx("btn-menu")} onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <Link to="/" className={cx("logo")}>
            <Image src={images.logo} alt="logo"></Image>
          </Link>
          <nav
            className={cx("navigation-list", {
              active: isOpenMenu,
            })}
          >
            {isOpenMenu && (
              <>
                <Button
                  text
                  className={cx("btn-close-menu")}
                  onClick={toggleMenu}
                >
                  <FontAwesomeIcon icon={faClose} />
                </Button>
                <li className={cx("navigation-item", "wrap-login")}>
                  <button className={cx("btn-user")}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className={cx("name-item")}>Login</span>
                  </button>
                </li>
              </>
            )}
            {NavListOption.map((item) => (
              <li
                key={item.id}
                className={cx("navigation-item", {
                  active: item.path === location.pathname,
                })}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span className={cx("name-item")}>{item.name}</span>
                </Link>
              </li>
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
          <div className={cx("btn-user", "action-item")}>
            <Popper className={cx("popper")}>
              <Button outline className={cx("btn")}>
                Log in
              </Button>
              <Button outline className={cx("btn")}>
                Register
              </Button>
            </Popper>
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
        </div>
      </header>
      <Slider dataSlider={dataSlider} />
    </div>
  );
}

export default Header;
