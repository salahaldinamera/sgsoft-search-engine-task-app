import * as React from 'react';
import classes from './PageCard.module.css';

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
    color: 'green'
  },
});

export default function PageCard(props) {

  const muiClasses = useStyles();

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <a href={props.link} className={classes.TitleLink}>
              {props.title} 
            </a>

            <Typography sx={{ fontSize: 16 }} className={muiClasses.link}>
              {props.link}
            </Typography>

            <div className={classes.TagChipsContainer}>
              {
                props.tags.map((tag) => {
                  return <TagChip keyword={tag.keyword} />
                })
              }
            </div>
            
            
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}