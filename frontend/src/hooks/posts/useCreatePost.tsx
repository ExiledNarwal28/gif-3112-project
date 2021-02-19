import { useState } from 'react';
import { Post, PostCreationParams } from 'types/posts';
import useAPI from 'hooks/useAPI';

// TODO : Use this hook in appropriate component
export default function useCreatePost(postCreationParams: PostCreationParams) {
  const [post, setPost] = useState<Post>();
  const { isLoading, error } = useAPI(
    'createPost',
    setPost,
    postCreationParams
  );

  // TODO : Use everything in the hook or remove them
  return { post, isLoading, error };
}
