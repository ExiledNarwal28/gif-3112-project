import mongoose, { Schema, Document } from 'mongoose';
import { SavedPost } from '../types/posts';

const PostsSchema = new Schema(
  {
    reference: {
      type: String,
      required: [true, "can't be blank"],
    },
    description: String,
    hashtags: [String],
    usertags: [String],
    user: {
      type: String,
      required: [true, "can't be blank"],
    },
  },
  {
    timestamps: true,
    toObject: {
      transform(doc, ret): SavedPost {
        return {
          id: ret.id,
          reference: ret.reference,
          description: ret.description,
          hashtags: ret.hashtags,
          usertags: ret.usertags,
          user: ret.user,
          createdAt: ret.createdAt,
        };
      },
    },
  },
);

export const Posts = mongoose.model<SavedPost & Document>('Posts', PostsSchema);
