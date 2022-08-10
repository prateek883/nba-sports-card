import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from './playoffBracket.module.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function playOffBracket() {
  return (
    <div className={styles.ContentContainer}>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" className={styles.monthsButton}>
          first Round
        </Button>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          className={styles.monthsButton}
        >
          Conf. Semi final
        </Button>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          className={styles.monthsButton}
        >
          Conf. final
        </Button>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          className={styles.monthsButton}
        >
          NBA finals
        </Button>
      </Stack>
      <Stack>
        <h5 className={styles.location}>Eastern</h5>
        <Card className={styles.cardContainer}>
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              className={styles.cardScores}
            >
              Conf{bull}finals{bull}Celtics Win{bull}series 4 - 3
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img
                      src="https://www.bing.com/th?id=OSB.AA2cS5Q.png&w=20&h=20&o=6&dpr=1.25&pid=SANGAM"
                      alt="teamlogo"
                    />
                  </ListItemIcon>
                  <ListItemText primary="Heat" />
                  <ListItemText primary="96" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img
                      src="https://www.bing.com/th?id=OSB.AA2cKlL.png&w=20&h=20&o=6&dpr=1.25&pid=SANGAM"
                      alt="teamlogo"
                    />
                  </ListItemIcon>
                  <ListItemText primary="Celitos" />
                  <ListItemText primary="100" />
                </ListItemButton>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Stack>
      <Stack>
        <h5 className={styles.location}>Western</h5>
        <Card className={styles.cardContainer}>
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              className={styles.cardScores}
            >
              Conf{bull}finals{bull}Celtics Win{bull}series 4 - 3
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img
                      src="https://www.bing.com/th?id=OSB.AA2cS5Q.png&w=20&h=20&o=6&dpr=1.25&pid=SANGAM"
                      alt="teamlogo"
                    />
                  </ListItemIcon>
                  <ListItemText primary="Heat" />
                  <ListItemText primary="96" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img
                      src="https://www.bing.com/th?id=OSB.AA2cKlL.png&w=20&h=20&o=6&dpr=1.25&pid=SANGAM"
                      alt="teamlogo"
                    />
                  </ListItemIcon>
                  <ListItemText primary="Celitos" />
                  <ListItemText primary="100" />
                </ListItemButton>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
}
