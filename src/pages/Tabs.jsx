import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTabAction, setLangAction } from "../redux/common";
import "./Tabs.css";

const langNames = ["en", "ua", "ru"];
const tabs = [1, 2, 3, 4];

export const Tabs = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { tab, lang } = useSelector((state) => state.common);

  useEffect(() => {
    history.replace({
      search: `?tab=${tab}&lang=${lang}`,
    });
  }, [history, lang, tab]);

  const changeTab = (newTab) => {
    if (tab !== newTab) dispatch(setTabAction(newTab));
  };

  const changeLang = (newLang) => {
    if (lang !== newLang) dispatch(setLangAction(newLang));
  };

  return (
    <div>
      <div>
        {langNames.map((name) => (
          <span
            className={`lang ${lang === name ? "current" : ""}`}
            onClick={() => changeLang(name)}
            key={name}
          >
            {name}
          </span>
        ))}
      </div>
      <div>
        <h1>My tabs</h1>
        <div className="tabs">
          {tabs.map((index) => (
            <h2
              className={`tab ${tab === index ? "current" : ""}`}
              onClick={() => changeTab(index)}
              key={index}
            >
              Tab {index}
            </h2>
          ))}
        </div>
        <Tab />
      </div>
    </div>
  );
};

const Tab = () => {
  const [value, onChange] = useState("");

  return (
    <form>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
      {value && (
        <>
          <input type="submit" value="Save" />
          <button onClick={() => onChange("")}>Clear</button>
        </>
      )}
    </form>
  );
};
