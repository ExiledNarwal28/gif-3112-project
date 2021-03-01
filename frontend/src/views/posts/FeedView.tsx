import React from 'react';
import PostList from 'components/posts/PostList';
import useGetPosts from 'hooks/posts/useGetPosts';
import useGetLoggedUser from 'hooks/users/useGetLoggedUser';
import LoadingSpinner from 'components/LoadingSpinner';
import SnackbarMessage from 'components/SnackbarMessage';

export const FeedView = () => {
  const { loggedUser } = useGetLoggedUser();
  const { posts, isLoading, error } = useGetPosts({});

  const content = isLoading ? (
    <LoadingSpinner absolute />
  ) : (
    <PostList posts={posts} loggedUser={loggedUser} />
  );

  const errorMessage = error ? (
    <SnackbarMessage severity="error" description="Could not fetch posts" />
  ) : null;

  return (
    <>
      {content}
      {errorMessage}
    </>
  );
};

export default FeedView;
