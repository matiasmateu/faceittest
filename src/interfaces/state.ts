import { Post } from '@interfaces/post';
import { User } from '@interfaces/user';

export interface RootState {
    posts: Post[];
    users: User[];
}