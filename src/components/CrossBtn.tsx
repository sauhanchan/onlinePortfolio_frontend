import { useState } from "react";

interface Props {
  closeFunction: () => void;
  btnCss: string;
}

const CrossBtn = ({ closeFunction, btnCss }: Props) => {
  const [closeBtnDisplay, setCloseBtnDisplay] = useState("d-block");

  const closeCrossAndExternalComp = () => {
    setCloseBtnDisplay("d-none");
    closeFunction();
  };

  return (
    <>
      <button
        className={`close ${closeBtnDisplay} ${btnCss} closeBtnStyle`}
        aria-label="Close"
        onClick={() => {
          setCloseBtnDisplay("d-none");
          closeFunction();
        }}
      >
        <span aria-hidden="true" className="cross">
          &#10006;
        </span>
      </button>
    </>
  );
};

export default CrossBtn;
