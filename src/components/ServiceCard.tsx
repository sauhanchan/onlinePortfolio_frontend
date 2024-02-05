import { ReactNode } from "react";

interface serviceType {
  colMdNo: number;
  imageSrc: string;
  fontAwesomeIcon: ReactNode;
  title: string;
}

interface Props {
  item: serviceType;
}

const ServiceCard = ({ item }: Props) => {
  return (
    <div className={`col-lg-6 col-md-${item.colMdNo} mb-4`}>
      <div className="rounded-3 overlay-container">
        <img src={item.imageSrc} className="w-100 image-zoom-in" />
        <a href="contact">
          <div className="overlay">
            <div className="d-flex flex-column justify-content-center align-items-center h-100 text-dark mobileStyle">
              <h3>
                {item.fontAwesomeIcon} {item.title}
              </h3>
              <br></br>
              <h4 className="badge bg-dark p-2 text-light w-50">
                Let me help you!
              </h4>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
