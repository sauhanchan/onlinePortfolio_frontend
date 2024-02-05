const Carousel = () => {
  return (
    <div
      id="carouselBanners"
      className="carousel slide carousel-fade zindexCustomCarousel"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators mb-md-2 mb-0">
        <button
          type="button"
          data-bs-target="#carouselBanners"
          data-bs-slide-to="0"
          className="active bg-secondary"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          className="bg-secondary"
          data-bs-target="#carouselBanners"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          className="bg-secondary"
          data-bs-target="#carouselBanners"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href="about">
            <div className="bannerHomepageMdLg">
              <img
                src="homepageBannerJ_MdLg.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="bannerHomepageSm">
              <img
                src="homepageBannerJ_mobile.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </a>
          <div className="carousel-caption d-none d-md-block">
            {/*<h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>*/}
            <a href="about" className="d-block">
              <button className="my-3">About</button>
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <a href="services">
            <div className="bannerHomepageMdLg">
              <img
                src="homepageBannerServices_MdLg.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="bannerHomepageSm">
              <img
                src="homepageBannerServices_mobile.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </a>
          <div className="carousel-caption d-none d-md-block">
            <a href="services" className="d-block">
              <button className="my-3">Services</button>
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <a href="projects">
            <div className="bannerHomepageMdLg">
              <img
                src="homepageBannerProj_MdLg.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="bannerHomepageSm">
              <img
                src="homepageBannerProj_mobile.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </a>
          <div className="carousel-caption d-none d-md-block text-dark"></div>
        </div>
      </div>
      <button
        className="carousel-control-prev buttonPrevNext"
        type="button"
        data-bs-target="#carouselBanners"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next buttonPrevNext"
        type="button"
        data-bs-target="#carouselBanners"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
