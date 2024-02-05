import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as regularStar,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faStar as solidStar,
  faEye,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import OverlayProduct from "./OverlayProduct";

interface Data {
  id?: string;
  title: string;
  description: string;
  published: boolean;
  type: string;
  link: string;
  image: string[]; //@try array later
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
  //data: Data[];
  //#For the whole gp of project cards approach (5 diff: big div, list title, this one, arg, del map)
  //*Q using 2 interfaces approach is correct/ good practice?
  item: Data;
}

const ProjectCard = ({ item }: Props) => {
  const [overlayVisibility, setOverlayVisibility] = useState(false);

  return (
    <>
      <div className="col-lg-4 col-md-4 col-6 my-2">
        <div className="product-grid">
          <div className="product-image">
            <a
              onClick={() => setOverlayVisibility(true)}
              style={{ cursor: "pointer" }}
              className="image"
            >
              <img className="pic-1" src={`../public/${item.image[0]}`} />
              <img className="pic-2" src={`../public/${item.image[1]}`} />
            </a>
            {item.displayLbl && (
              <span className="product-hot-label">{item.labelContent}</span>
            )}
            <ul className="product-links d-flex justify-content-center">
              {/*<li>
                <a href="#" data-tip="Add to Wishlist">
                  <FontAwesomeIcon icon={faHeart} size="1x" color="black" />
                </a>
                </li>*/}
              <li>
                <div className="p-2" style={{ fontWeight: "600" }}>
                  {item.title}
                </div>
              </li>
              <li>
                <a
                  onClick={() => setOverlayVisibility(true)}
                  data-tip="Quick View"
                  className="image"
                >
                  <FontAwesomeIcon icon={faEye} size="1x" />
                  {/* className="faMyBrandStyle" */}
                </a>
              </li>
            </ul>
          </div>
          <div className="product-content">
            {/*<a className="add-to-cart" href="#">*/}
            <div>
              <a
                className="add-to-cart d-block d-flex align-items-center"
                href={item.link}
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  size="1x"
                  className="faMyBrandStyle"
                />
                <span>&nbsp;Website</span>
              </a>
            </div>
            <a href={item.link} target="_blank">
              <h3 className="title">{item.title}</h3>
            </a>
            <div className="price">Type: {item.type}</div>
          </div>
        </div>
      </div>

      {/* Set the visibility of the overlayed product desc */}
      {overlayVisibility && (
        <OverlayProduct
          item={item}
          setOverlayClose={() => setOverlayVisibility(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
