import { Post } from '@interfaces/post';
import { User } from '@interfaces/user'
import { Action, ActionType } from '@interfaces/action'

export const addPosts = (data: Array<Post>): Action<Post[]> => ({
    type: ActionType.FETCH_POSTS,
    data
});

export const addUsers = (data: Array<User>): Action<User[]> => ({
    type: ActionType.FETCH_USERS,
    data
});
