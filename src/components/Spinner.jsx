const Spinner = () => {
  return (
    <>
        {/* <center><h3 className="spinner">Loding...</h3></center> */}
      <div class="d-flex justify-content-center  spinner">
        <div class="spinner-border spinnercir" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};
export default Spinner;
