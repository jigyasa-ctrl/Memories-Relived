import React, {useState} from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
  
const Form =() => {
    const [postData, setPostData] = useState({
        creator:'',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const classes = useStyles();
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
       e.preventDefault();
       dispatch(createPost(postData))
    }
    const clear = () => {

    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating a Memory</Typography>
                <TextField name='creator' variant='outlined' label='Creator' fullWidth  value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value})} />
                <TextField name='title' variant='outlined' label='Title' fullWidth  value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})} />
                <TextField name='message' variant='outlined' label='Message' fullWidth  value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value})} />
                <TextField name='tags' variant='outlined' label='tags' fullWidth  value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value})} />
                <FileBase type='file' multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})} />
                <Button className={classes.buttonSubmit} color='primary' variant='contained' size='large' type='submit' fullWidth>Submit</Button>
                <Button className={classes.buttonSubmit} color='secondary'variant='contained' size='small' type='submit' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;