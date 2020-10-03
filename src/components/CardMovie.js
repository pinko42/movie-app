import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function CardMovie(props) {
  const classes = useStyles();

  return (
  <>{props.data?<Card className={classes.root} style={{ margin: "20px"  }} >
  <CardActionArea>
    <CardMedia
      component="img"
      alt="Contemplative Reptile"
      height="320"
      image={props.data.Poster}
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {props.data.Title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {props.data.Plot}
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
    {props.addToWishList?<Button size="small" color="primary" onClick={() => props.addToWishList(props.data)}>
      Add to Wishlist ❤️
    </Button>:<>click to Show more Details</>}
    
    
  </CardActions>
</Card>:<div>nothing found</div>}</>
  );
}
