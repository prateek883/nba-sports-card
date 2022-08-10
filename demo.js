import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ChipButton from './Pillbar.js';
import ScoreCard from './scoreCard.js';
import PlayOffBRacket from './playoffBracket.js';
import NewsCard from './news.js';

import styles from './styles.module.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.ContentContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card className={styles.cardContainer}>
            <CardHeader
              className={styles.cardHeader}
              avatar={
                <CardMedia
                  component="img"
                  sx={{ width: 35, height: 35 }}
                  image="https://www.bing.com/th?id=OSB.IfpHzn0j_9IvXIQKGhmcqg--.png&w=32&h=32&o=6&dpr=1.25&pid=SANGAM"
                  alt="nba sports"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreHorizIcon className={styles.notificationIcon} />
                </IconButton>
              }
              title={
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className={styles.cardTitle}
                >
                  NBA
                  <br />
                  <span className={styles.seasonYear}>2021 - 2022 season</span>
                </Typography>
              }
            />
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  label="GAMES"
                  {...a11yProps(0)}
                  className={styles.tabContainer}
                />
                <Tab
                  label="PLAYOFF BRACKET"
                  {...a11yProps(1)}
                  className={styles.tabContainer}
                />
                <Tab
                  label="DRAFTS"
                  {...a11yProps(2)}
                  className={styles.tabContainer}
                />
                <Tab
                  label="STANDINGS"
                  {...a11yProps(3)}
                  className={styles.tabContainer}
                />
                <Tab
                  label="NEWS"
                  {...a11yProps(4)}
                  className={styles.tabContainer}
                />
              </Tabs>
            </Box>
            <TabPanel
              value={value}
              index={0}
              className={styles.tabPanelContainer}
            >
              <ChipButton />
              <CardContent>
                <ScoreCard />
              </CardContent>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <PlayOffBRacket />
            </TabPanel>
            <TabPanel
              value={value}
              index={2}
              className={styles.tabPanelContainer}
            >
              We can't find any more info about this page right now
            </TabPanel>
            <TabPanel
              value={value}
              index={3}
              className={styles.tabPanelContainer}
            >
              We can't find any more info about this page right now
            </TabPanel>
            <TabPanel
              value={value}
              index={4}
              className={styles.tabPanelContainer}
            >
              <NewsCard />
            </TabPanel>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}></Grid>
      </Grid>
    </div>
  );
}
