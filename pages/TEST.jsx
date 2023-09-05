import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
        <div>
          <Image src="/prg1.PNG" alt="prg1" width={342} height={607} />
          </div>
          <div>
          <Image src="/prg2.PNG" alt="prg2" width={342} height={607} />
          </div>
          <div>
          <Image src="/prg3.PNG" alt="prg3" width={342} height={607} />
          </div>
          <div>
          <Image src="/prg4.PNG" alt="prg4" width={342} height={607} />
          </div>
          <div>
          <Image src="/prg5.PNG" alt="prg5" width={342} height={607} />
          </div>
          <div>
          <Image src="/prg6.PNG" alt="prg6" width={342} height={607} />
          </div>
          <div>
          <Image src="/prg7.PNG" alt="prg7" width={342} height={607} />
          </div>
        </Slider>
      </div>
    );
  }
}