import Rick from "../assets/rick.gif";

const Loading = () => {
  return (
    <div className="loading-screen">
        <h1 className="text-center m-4">Loading ...</h1>
    <div className="loading-overlay">
      <div className="loading-spinner d-flex justify-content-center mt-5">
        <img src={Rick} alt="" />
      </div>
    </div>
  </div>
  );
};

export default Loading;
