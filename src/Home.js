const Home = () => {
  const handleClick = (e) => {
    console.log("Hello Ninjas");
  };
  const handleClickAgain = (name) => {
    console.log("Hello" + name);
  };
  return (
    <div className="Home">
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={(e) => {
          handleClickAgain("Mario");
        }}
      >
        Click Me Again
      </button>
    </div>
  );
};

export default Home;
