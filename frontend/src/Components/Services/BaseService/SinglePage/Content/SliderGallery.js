import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { SingleBaseContext } from "../../../../../Providers/Services/BaseService/SingleBaseProvider";

const SliderGallery = () => {
  const { data } = useContext(SingleBaseContext);
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imageHeight = "400px";

  return (
    <div style={{ width: "100%", overflow: "hidden", height: "300px" }}>
      <Slider {...settings}>
        {data.images &&
          data.images.map((el, index) => (
            <div key={index}>
              <img
                // src="https://lh3.googleusercontent.com/p/AF1QipOIk3RUx3ApBZpK7jbAudt_--q98B93vbGmlaMH=s680-w680-h510"
                src={`http://127.0.0.1:8000/uploads/${el}`}
                alt={el}
                className="rounded-md img-fluid"
                style={{
                  maxHeight: imageHeight,
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default SliderGallery;
