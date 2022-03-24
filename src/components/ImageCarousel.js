import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { Grid } from "@mui/material";

export default function ImageCarousel({ images }) {
  const carousel = useRef();
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    customPaging: function (i) {
      return (
        <a>
          <img
            src={images[i].src}
            height="100%"
            width="100%"
            alt={images[i].alt}
          />
        </a>
      );
    },
  };
  console.log(images);
  return (
    <div>
      <Grid>
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Slider style={{ width: "39%" }} {...settings} ref={carousel}>
            {images.map((item) => (
              <div key={item.id}>
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </div>
  );
}
