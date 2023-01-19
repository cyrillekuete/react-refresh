import { useState } from "react";
const Home = () => {
    const [name, setName] = useState("Mario");
    const [age, setAge] = useState(25);
  const handleClick = (e) => {
      setName("James Williams");
      setAge(28);
  };

  return (
    <div className="Home">
      <h2>Home Page</h2>
          <p>{name} is {age}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
