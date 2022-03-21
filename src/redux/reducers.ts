
import { combineReducers } from 'redux';
import { Post } from '@interfaces/post';
import { User } from '@interfaces/user';
import { Action, ActionType } from "@interfaces/action"

const posts = (state = [], action: Action<Post[]> ): Post[] => {
    switch (action.type) {
        case ActionType.FETCH_POSTS:
            return action.data
        default:
            return state;
    }
};

const users = (state = [] , action: Action<User[]>): User[] => {
    switch (action.type) {
        case ActionType.FETCH_USERS:
            return action.data
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    posts,
    users
})

export default rootReducer;