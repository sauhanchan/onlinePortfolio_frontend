interface Props {
  title: string;
  titleHide: string;
}

const DividerTitle = ({ title, titleHide }: Props) => {
  return (
    <>
      <div className="line-container my-4">
        <div className="line"></div>
        <div className="text">
          <h3>
            {title}
            <span className="mobileDisplayNone">{titleHide}</span>
          </h3>
        </div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default DividerTitle;
