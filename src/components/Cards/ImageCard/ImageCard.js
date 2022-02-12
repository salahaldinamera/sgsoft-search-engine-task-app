import * as React from 'react';
import classes from './ImageCard.module.css';

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

export default function ImageCard(props) {

  const muiClasses = useStyles();

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            
            <div className={classes.ContentContainer}>
                <img src={props.link} alt={props.title + "_image"} className={classes.ResourceImage}/>

                <div>
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
                </div>
            </div>
            
            
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}