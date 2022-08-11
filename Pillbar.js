import * as React from 'react';
import Button from '@mui/material/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import styles from './pillbar.module.css';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosNewIcon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  );
}

export default function ClickableLinkChips() {
  var settings = {
    infinite: false,
    onEdge: null,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 6,
    initialSlide: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.ContentContainer}>
      <Slider {...settings}>
        <div>
          <Button variant="outlined" className={styles.monthsButton}>
            07 May
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            href="#outlined-buttons"
            className={styles.monthsButton}
          >
            11 May
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            href="#outlined-buttons"
            className={styles.monthsButton}
          >
            20 May
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            href="#outlined-buttons"
            className={styles.monthsButton}
          >
            08 June
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            href="#outlined-buttons"
            className={styles.monthsButton}
          >
            22 June
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            href="#outlined-buttons"
            className={styles.monthsButton}
          >
            22 Jul
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            href="#outlined-buttons"
            className={styles.monthsButton}
          >
            28 Ju1
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            href="#outlined-buttons"
            className={styles.monthsButton}
          >
            31 Jul
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            href="#outlined-buttons"
            className={styles.monthsButton}
          >
            1 Aug
          </Button>
        </div>
      </Slider>
    </div>
  );
}
