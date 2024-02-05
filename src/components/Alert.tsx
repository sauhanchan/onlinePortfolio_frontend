import { ReactNode } from "react";
//import "../App.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div
      className="alert text-white alert-dismissible fade show zindexCustomTop text-center py-2 fs-6"
      role="alert"
    >
      <img src="circles.gif" alt="" width={"7px"} className="pb-1 me-3"></img>
      {children}
      <img src="circles.gif" alt="" width={"7px"} className="pb-1 ms-3"></img>
      <button
        type="button"
        className="btn-close pb-2 alertCloseBtn"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
        style={{}}
      ></button>
    </div>
  );
};

export default Alert;
