import React from 'react';
import useDeletePost from 'hooks/posts/useDeletePost';
import { Button, Typography } from '@material-ui/core';
import SnackbarMessage from '../SnackbarMessage';

interface DeletePostProps {
  postId?: string | null;
  successAction: () => void;
}

export const DeletePost = (props: DeletePostProps) => {
  const { postId, successAction } = props;
  const { deletePost, error: APIError } = useDeletePost(postId!);

  const handleDeletePost = () => {
    deletePost();
    successAction();
    window.location.reload();
  };

  const errorMessage = APIError ? (
    <SnackbarMessage severity="error" description="Could not delete post" />
  ) : null;

  return (
    <>
      <Typography>Are you sure?</Typography>
      <Button color="primary" onClick={handleDeletePost}>
        Yes
      </Button>
      <Button color="secondary" onClick={successAction}>
        Cancel
      </Button>
      {errorMessage}
    </>
  );
};

DeletePost.defaultProps = {
  postId: null,
};

export default DeletePost;
