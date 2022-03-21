export enum ActionType {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_USERS = 'FETCH_USERS'
}

export interface Action<T> {
    type: ActionType;
    data: T
}