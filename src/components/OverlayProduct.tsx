import CrossBtn from "./CrossBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faXmark,
  faChevronDown,
  faChevronUp,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

interface Data {
  id?: string;
  title: string;
  description: string;
  published: boolean;
  type: string;
  link: string;
  image: string[];
  displayLbl: boolean;
  labelContent: string;
  language: string;
  libOrFramework: string;
  tool: string;
  skill: string;
  other: string;
  __v: Number;
}

interface Props {
  item: Data;
  setOverlayClose: () => void;
}
const OverlayProduct = ({ item, setOverlayClose }: Props) => {
  const [arrowTypeVisibility, setArrowTypeVisible] = useState(false);
  const [arrowLangVisibility, setArrowLangVisible] = useState(false);
  const [arrowLibFrVisibility, setArrowLibFrVisible] = useState(false);
  const [arrowToolVisibility, setArrowToolVisible] = useState(false);
  const [arrowSkillVisibility, setArrowSkillVisible] = useState(false);
  const [arrowDescVisibility, setArrowDescVisible] = useState(false);
  const [showAllVisibility, setShowAllVisible] = useState(false);

  const handleArrowTypeClick = () => {
    setArrowTypeVisible(!arrowTypeVisibility);
  };
  const handleArrowLangClick = () => {
    setArrowLangVisible(!arrowLangVisibility);
  };
  const handleArrowLibFrClick = () => {
    setArrowLibFrVisible(!arrowLibFrVisibility);
  };
  const handleArrowToolClick = () => {
    setArrowToolVisible(!arrowToolVisibility);
  };
  const handleArrowSkillClick = () => {
    setArrowSkillVisible(!arrowSkillVisibility);
  };
  const handleArrowDescClick = () => {
    setArrowDescVisible(!arrowDescVisibility);
  };
  const showAll = () => {
    setArrowTypeVisible(true);
    setArrowLangVisible(true);
    setArrowLibFrVisible(true);
    setArrowToolVisible(true);
    setArrowSkillVisible(true);
    setArrowDescVisible(true);
    setShowAllVisible(false);
  };

  const hideAll = () => {
    setArrowTypeVisible(false);
    setArrowLangVisible(false);
    setArrowLibFrVisible(false);
    setArrowToolVisible(false);
    setArrowSkillVisible(false);
    setArrowDescVisible(false);
    setShowAllVisible(true);
  };

  useEffect(() => {
    if (
      arrowTypeVisibility === true &&
      arrowLangVisibility === true &&
      arrowLibFrVisibility === true &&
      arrowToolVisibility === true &&
      arrowSkillVisibility === true &&
      arrowDescVisibility === true
    ) {
      setShowAllVisible(false);
    }
    if (
      arrowTypeVisibility === false &&
      arrowLangVisibility === false &&
      arrowLibFrVisibility === false &&
      arrowToolVisibility === false &&
      arrowSkillVisibility === false &&
      arrowDescVisibility === false
    ) {
      setShowAllVisible(true);
    }
  }, [
    arrowTypeVisibility,
    arrowLangVisibility,
    arrowLibFrVisibility,
    arrowToolVisibility,
    arrowSkillVisibility,
    arrowDescVisibility,
  ]);
  return (
    <>
      <div className="overlayProductInfo p-4 text-center">
        <CrossBtn closeFunction={setOverlayClose} btnCss="crossBtn mt-3 ml-4" />
        <a href={item.image[1]} target="_blank">
          <img src={item.image[1]} width="90%" className="img-fluid"></img>
        </a>
        <h3 className="pt-3 pb-1">Title: {item.title}</h3>
        <div className="d-flex justify-content-end">
          <div className="d-md-none showAllHideAllStyle">
            {showAllVisibility ? (
              <div onClick={showAll}>
                <FontAwesomeIcon icon={faEye} />
                &nbsp;&nbsp;Show All
              </div>
            ) : (
              <div onClick={hideAll}>
                <FontAwesomeIcon icon={faEyeSlash} />
                &nbsp;&nbsp;Hide All
              </div>
            )}
          </div>
        </div>

        {/* For the summary table*/}
        <div className="row col-lg-9 col-md-10 col-12 py-1 px-auto">
          <table className="table-responsive-sm mt-1 mb-4 overlayProjTable">
            <tr className="d-md-none">
              <th className="d-flex justify-content-between">
                <div>Type:</div>
                <div onClick={handleArrowTypeClick} className="fontIconHover">
                  <FontAwesomeIcon
                    icon={arrowTypeVisibility ? faChevronDown : faChevronUp}
                    size="1x"
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th className="d-none d-md-table-cell">Type:</th>
              <td
                className={arrowTypeVisibility ? "" : "d-none d-md-table-cell"}
              >
                {item.type}
              </td>
            </tr>
            <tr className="d-md-none">
              <th className="d-flex justify-content-between">
                <div>Languages:</div>
                <div onClick={handleArrowLangClick} className="fontIconHover">
                  <FontAwesomeIcon
                    icon={arrowLangVisibility ? faChevronDown : faChevronUp}
                    size="1x"
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th className="d-none d-md-table-cell">Languages:</th>
              <td
                className={arrowLangVisibility ? "" : "d-none d-md-table-cell"}
              >
                {item.language}
              </td>
            </tr>
            <tr className="d-md-none">
              <th className="d-flex justify-content-between">
                <div>Libraries/Frameworks:</div>
                <div onClick={handleArrowLibFrClick} className="fontIconHover">
                  <FontAwesomeIcon
                    icon={arrowLibFrVisibility ? faChevronDown : faChevronUp}
                    size="1x"
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th className="d-none d-md-table-cell">Libraries/Frameworks:</th>
              <td
                className={arrowLibFrVisibility ? "" : "d-none d-md-table-cell"}
              >
                {item.libOrFramework}
              </td>
            </tr>
            <tr className="d-md-none">
              <th className="d-flex justify-content-between">
                <div>Design/ Dev tool(s):</div>
                <div onClick={handleArrowToolClick} className="fontIconHover">
                  <FontAwesomeIcon
                    icon={arrowToolVisibility ? faChevronDown : faChevronUp}
                    size="1x"
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th className="d-none d-md-table-cell">Design/ Dev tool(s):</th>
              <td
                className={arrowToolVisibility ? "" : "d-none d-md-table-cell"}
              >
                {item.tool}
              </td>
            </tr>
            <tr className="d-md-none">
              <th className="d-flex justify-content-between">
                <div>Skill(s):</div>
                <div onClick={handleArrowSkillClick} className="fontIconHover">
                  <FontAwesomeIcon
                    icon={arrowSkillVisibility ? faChevronDown : faChevronUp}
                    size="1x"
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th className="d-none d-md-table-cell">Skill(s):</th>
              <td
                className={arrowSkillVisibility ? "" : "d-none d-md-table-cell"}
              >
                {item.skill}
              </td>
            </tr>
            <tr className="d-md-none">
              <th className="d-flex justify-content-between">
                <div>Description:</div>
                <div onClick={handleArrowDescClick} className="fontIconHover">
                  <FontAwesomeIcon
                    icon={arrowDescVisibility ? faChevronDown : faChevronUp}
                    size="1x"
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th className="d-none d-md-table-cell">Description:</th>
              <td
                className={arrowDescVisibility ? "" : "d-none d-md-table-cell"}
              >
                {item.description}
              </td>
            </tr>
          </table>
        </div>
        <div className="row col-8">
          <div className="d-flex flex-wrap justify-content-around">
            <div className="my-2 mx-2">
              <a href={item.link} target="_blank">
                <button>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x" />
                  &nbsp;&nbsp;OPEN LINK
                </button>
              </a>
            </div>
            <div className="my-2 mx-2">
              <button onClick={setOverlayClose}>
                <FontAwesomeIcon icon={faXmark} size="1x" />
                &nbsp;&nbsp;CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverlayProduct;
