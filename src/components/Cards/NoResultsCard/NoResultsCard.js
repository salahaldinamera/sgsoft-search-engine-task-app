import * as React from 'react';
import classes from './NoResultsCard.module.css';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { makeStyles } from '@mui/styles';

import TagChip from '../../Chips/TagChip';

const useStyles = makeStyles({
  link: {
    color: 'red'
  },
});

export default function NoReultsCard(props) {

  const muiClasses = useStyles();

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>

            <Typography sx={{ fontSize: 16 }} className={muiClasses.link}>
              No Resource Found for {props.keyword}
            </Typography>

          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}