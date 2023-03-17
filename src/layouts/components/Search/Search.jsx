import React, { useRef, useState, useEffect } from "react";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./search.module.scss";
import { apiService } from "~/services";
import useDebounce from "~/hooks/useDebounce";
import Button from "~/components/Button";
import SearchItem from "~/components/SearchItem";
import Popper from "~/components/Popper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
const Search = React.forwardRef((props, ref) => {
  const [elementSearch, setElementSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [dataSearch, setDataSearch] = useState([]);
  const refInput = useRef();
  const deBounceValue = useDebounce(valueInput, 600);

  useEffect(() => {
    if (elementSearch) {
      refInput.current.focus();
    }
  }, [elementSearch]);

  useEffect(() => {
    const getData = async () => {
      let response = [];
      let params = {};
      if (!deBounceValue) {
        let type = "all";
        let time = "day";
        response = await apiService.getTrending(type, time, params);
        setDataSearch(response.results);
      } else {
        params = { query: deBounceValue };
        setLoading(true);
        response = await apiService.searchMovie(params);
        setDataSearch(response.results);
        setLoading(false);
      }
    };
    getData();
  }, [deBounceValue]);

  const handleChangeValue = (event) => {
    setValueInput(event.target.value);
  };

  const handleClearInput = () => {
    setValueInput("");
    refInput.current.focus();
  };

  const handleCloseSearch = () => {
    setElementSearch(false);
    setValueInput("");
  };
  const onMount = (instance) => {
    if (window.innerWidth <= 420) {
      instance.popper.classList.add(cx("mobile-position"));
    }
  };
  const tippyRef = useRef(null);
  return (
    <div>
      <Tippy
        allowHTML={true}
        offset={[0, -30]}
        placement="right-start"
        interactive
        onClickOutside={handleCloseSearch}
        visible={elementSearch}
        onMount={onMount}
        onCreate={(instance) => (tippyRef.current = instance)}
        popperOptions={{
          modifiers: [
            {
              name: "computeStyles",
              options: {
                adaptive: false,
                gpuAcceleration: false,
              },
            },
          ],
        }}
        render={() => {
          return (
            <Popper
              className={cx("search-menu")}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <div className={cx("search-bar")}>
                <input
                  ref={refInput}
                  className={cx("search-input")}
                  type="text"
                  placeholder="Movie name, show, actor, TV chanel"
                  onChange={handleChangeValue}
                  value={valueInput}
                />
                {!!valueInput ? (
                  loading ? (
                    <Button className={cx("loading")}>
                      <FontAwesomeIcon icon={faSpinner} />
                    </Button>
                  ) : (
                    <Button
                      className={cx("btn-clear")}
                      onClick={handleClearInput}
                    >
                      <FontAwesomeIcon icon={faClose} />
                    </Button>
                  )
                ) : (
                  <Button className={cx("btn-search")}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
                )}
              </div>
              <div className={cx("search-result")}>
                <h4 className={cx("search-heading")}>Tìm kiếm nhiều nhất</h4>
                <div className={cx("search-body")}>
                  {dataSearch.length > 0 &&
                    dataSearch.map((item) => {
                      return (
                        <SearchItem key={item.id} data={item}></SearchItem>
                      );
                    })}
                </div>
              </div>
            </Popper>
          );
        }}
      >
        <Button
          className={cx("btn-search", {
            hidden: elementSearch,
          })}
          onClick={() => {
            setElementSearch(true);
          }}
        >
          <span className={cx("description")}>
            Tap to search for favorite content
          </span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </Tippy>
    </div>
  );
});
export default Search;
