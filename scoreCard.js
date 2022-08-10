import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import styles from './scores.module.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Final: Game 6: Warriors won series 4 - 2
      </Typography>
      <Stack spacing={6} direction="row">
        <img
          src="https://www.bing.com/th?id=OSB.AA2cS5z.png&w=32&h=32&o=6&dpr=1.25&pid=SANGAM"
          alt="team_logo"
          className={styles.teamIcon}
        />
        <Typography variant="h5" component="div">
          <span className={styles.gameTitle}>Warriors</span>
          <br />
          <span className={styles.gameScoreCard}>51 - 22</span>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <span>17 Jul: Final</span>
          <br />
          <span className={styles.teamScoreCard}>103 -90</span>
        </Typography>
        <Typography variant="h5" component="div">
          <span className={styles.teamTitle}>Celtics</span>
          <br />
          <span className={styles.gameScoreCard}>51 - 22</span>
        </Typography>
        <img
          src="https://www.bing.com/th?id=OSB.AA2cKlL.png&w=32&h=32&o=6&dpr=1.25&pid=SANGAM"
          alt="team_logo"
          className={styles.teamIcon}
        />
      </Stack>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <div className={styles.ContentContainer}>
      <Card variant="outlined" className={styles.cardContainer}>
        {card}
      </Card>
    </div>
  );
}
