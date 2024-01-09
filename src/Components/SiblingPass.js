import { useLocation, useParams, useNavigate } from "react-router-dom";

const SiblingComponent1 = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div>
      <h1>Sibling Component 1</h1>
      <p>{data.name}</p>
    </div>
  );
};

const SiblingComponent2 = () => {
  const params = useParams();
  const data = params.name;

  return (
    <div>
      <h1>Sibling Component 2</h1>
      <p>{data}</p>
    </div>
  );
};

const SiblingPass = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sibling-component-2", {
      state: {
        name: "John Doe",
      },
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Navigate to Sibling Component 2</button>
    </div>
  );
};

export default SiblingPass;
