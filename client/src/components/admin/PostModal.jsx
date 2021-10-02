import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import {createPost} from '../../actions/post'
import {
  Dialog,
  Button,
  TextField,
  Select,
  MenuItem,
  Input,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const postSchema = yup.object().shape({
  title: yup.string().required(),
  subtitle: yup.string().required(),
  categoryId: yup.number().required(),
  image:yup.string()
});

const category = [{id:1,name:'Software'},{id:2,name:'Technology'},{id:3,name:'Space'},{id:4,name:'Trends'}]


const PostModal = ({ open, handleClose }) => {
  const [content,setContent]= useState("")
  const { register,control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(postSchema),
  });

  const handleContentData= (e,editor)=> {
    const data= editor.getData();
    setContent(data);
  }

  const history = useHistory()

  const clearForm= ()=> {
    reset();
    handleClose()
    history.push('/admin/home')
  }
  const classes = useStyles();
  const dispatch = useDispatch()

  const onSubmit= (data)=> {
    dispatch(createPost({...data,content:content}))
    clearForm();
  }

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>New Post</DialogTitle>
      <DialogContent>
        <DialogContentText>Please Enter New Post</DialogContentText>

        <div className={classes.root}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="title"
              label="Title"
              name="title"
              variant="outlined"
              className={classes.textField}
              size="medium"
              inputRef={register}
              error={errors.title ? true : false}
              fullWidth
            />
            <TextField
              id="subtitle"
              label="Subtitle"
              name="subtitle"
              variant="outlined"
              className={classes.textField}
              size="medium"
              inputRef={register}
              error={errors.subtitle ? true : false}
              fullWidth
            />
            <Controller
              as={<Select input={<Input/>} className={classes.textField} fullWidth>
                  {
                    category.map((cat)=> (
                      <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
                    ))
                  }
                </Select>}
                name="categoryId"
                control={control}
                defaultValue={category[0].name}
            />
            <TextField
              id="image"
              label="Image Link"
              name="image"
              variant="outlined"
              className={classes.textField}
              size="medium"
              inputRef={register}
              error={errors.image ? true : false}
              fullWidth
            />
           <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={handleContentData}
            />
          </form>
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={clearForm}>Cancel</Button>
        <Button type="submit" variant="outlined" color="primary" onClick={()=>handleSubmit(onSubmit) ()}>
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PostModal;
