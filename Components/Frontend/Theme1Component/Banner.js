const Banner = () => {
  return (
    <>
      <section id="banner">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="banner_contents">
                <img
                  className="img-fluid"
                  src="frontend_asset/img/banner/banner1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-4">
              <div className="banner_contents">
                <img
                  className="img-fluid"
                  src="frontend_asset/img/banner/banner2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-4">
              <div className="banner_contents">
                <img
                  className="img-fluid"
                  src="frontend_asset/img/banner/banner3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
