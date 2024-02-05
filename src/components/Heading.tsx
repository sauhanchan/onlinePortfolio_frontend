interface Props {
  heading: string;
}

const Heading = ({ heading }: Props) => {
  return (
    <div className="headingClass container-fluid bg-light pt-4 pb-2 mb-4">
      {heading}
      <div className="col-6">
        <hr className="border-2 border-top border-dark"></hr>
      </div>
    </div>
  );
};

export default Heading;
