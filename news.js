import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';

import styles from './news.module.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
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
          <Card className={styles.cardContainer}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.bing.com/th?id=OVFT.UG3yIlWhA_gyQb8jdWRFWi&pid=News&w=197&h=112&c=14&rs=2&qlt=90&dpr=1.25"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                className={styles.newsDescription}
              >
                NBA 2K23: Game launch will have 5 shot meters, and 20 in total
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row">
                <img
                  src="https://www.bing.com/th?id=ODF.x5pPCe1yMMcYl-pv5RD8fw&pid=news&w=16&h=16&c=14&rs=2&dpr=1.25"
                  alt="news icon"
                  className={styles.newsImageIcon}
                />
                <Button size="small" sx={{ textTransform: 'none' }}>
                  Give Me Sports.
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={styles.cardContainer}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.bing.com/th?id=OVFT.y5YEDWqZsodM4V7YwPtQwy&pid=News&w=197&h=112&c=14&rs=2&qlt=90&dpr=1.25"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                className={styles.newsDescription}
              >
                NBA 2K23: Game launch will have 5 shot meters, and 20 in total
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row">
                <img
                  src="https://www.bing.com/th?id=ODF.MZUNzlnDz-i0Ju0sjHX6oQ&pid=news&w=16&h=16&c=14&rs=2&dpr=1.25"
                  alt="news icon"
                  className={styles.newsImageIcon}
                />
                <Button size="small" sx={{ textTransform: 'none' }}>
                  Indianpolls.com
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={styles.cardContainer}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.bing.com/th?id=OVFT.d35nxncZeh5bBc_k1TtUHy&pid=News&w=197&h=112&c=14&rs=2&qlt=90&dpr=1.25"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                className={styles.newsDescription}
              >
                NBA 2K23: Game launch will have 5 shot meters, and 20 in total
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row">
                <img
                  src="https://www.bing.com/th?id=ODF.TwkuevkHG2GKy2nqI-lS_Q&pid=news&w=16&h=16&c=14&rs=2&dpr=1.25"
                  alt="news icon"
                  className={styles.newsImageIcon}
                />
                <Button size="small" sx={{ textTransform: 'none' }}>
                  CBSSports.com
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={styles.cardContainer}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.bing.com/th?id=OVFT.WHheLLir1yqYT-pFIm1fsy&pid=News&w=197&h=112&c=14&rs=2&qlt=90&dpr=1.25"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                className={styles.newsDescription}
              >
                NBA 2K23: Game launch will have 5 shot meters, and 20 in total
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row">
                <img
                  src="https://www.bing.com/th?id=ODF.MZUNzlnDz-i0Ju0sjHX6oQ&pid=news&w=16&h=16&c=14&rs=2&dpr=1.25"
                  alt="news icon"
                  className={styles.newsImageIcon}
                />
                <Button size="small" sx={{ textTransform: 'none' }}>
                  Indianpolls.com
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={styles.cardContainer}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.bing.com/th?id=OVFT.biuKmy8Byc7wpMjzA-XoEC&pid=News&w=197&h=112&c=14&rs=2&qlt=90&dpr=1.25"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                className={styles.newsDescription}
              >
                NBA 2K23: Game launch will have 5 shot meters, and 20 in total
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row">
                <img
                  src="https://www.bing.com/th?id=ODF.TwkuevkHG2GKy2nqI-lS_Q&pid=news&w=16&h=16&c=14&rs=2&dpr=1.25"
                  alt="news icon"
                  className={styles.newsImageIcon}
                />
                <Button size="small" sx={{ textTransform: 'none' }}>
                  CBSSports.com
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={styles.cardContainer}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.bing.com/th?id=OVFT.WHheLLir1yqYT-pFIm1fsy&pid=News&w=197&h=112&c=14&rs=2&qlt=90&dpr=1.25"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                className={styles.newsDescription}
              >
                NBA 2K23: Game launch will have 5 shot meters, and 20 in total
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row">
                <img
                  src="https://www.bing.com/th?id=ODF.MZUNzlnDz-i0Ju0sjHX6oQ&pid=news&w=16&h=16&c=14&rs=2&dpr=1.25"
                  alt="news icon"
                  className={styles.newsImageIcon}
                />
                <Button size="small" sx={{ textTransform: 'none' }}>
                  Indianpolls.com
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className={styles.cardContainer}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.bing.com/th?id=OVFT.d35nxncZeh5bBc_k1TtUHy&pid=News&w=197&h=112&c=14&rs=2&qlt=90&dpr=1.25"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                className={styles.newsDescription}
              >
                NBA 2K23: Game launch will have 5 shot meters, and 20 in total
              </Typography>
            </CardContent>
            <CardActions>
              <Stack direction="row">
                <img
                  src="https://www.bing.com/th?id=ODF.TwkuevkHG2GKy2nqI-lS_Q&pid=news&w=16&h=16&c=14&rs=2&dpr=1.25"
                  alt="news icon"
                  className={styles.newsImageIcon}
                />
                <Button size="small" sx={{ textTransform: 'none' }}>
                  CBSSports.com
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </div>
      </Slider>
    </div>
  );
}
