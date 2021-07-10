import React,{ useEffect} from 'react';
//to fetch data from the global redux store we use useselectors
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post'
import useStyles from './styles'
  
const Posts =({ setCurrentId }) => {
  
    const posts = useSelector((state) => state.posts);    
    const classes = useStyles();
    console.log(posts.length, "l")
    return !posts.length>0 ? (
      <CircularProgress />
    ) : (
      <Grid
        className={classes.mainContainer}
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    );
}

export default Posts;