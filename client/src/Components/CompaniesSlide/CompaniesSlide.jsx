import "./CompaniesSlide.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { companies } from "../../data/companies";

function CompaniesSlide() {
  var settings = {
    speed: 500,
    //dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    //pauseOnHover: true,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          //dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          //pauseOnHover: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          //dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          //pauseOnHover: true,
        },
      },
    ],
  };

  return (
    <div className="sidePadding companiesSlide">
      <div className="imgCard">
        <Slider {...settings}>
          {companies.map((item, idx) => (
            <img
              style={{ width: "50px" }}
              key={idx}
              src={item?.img}
              alt="platform"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CompaniesSlide;
