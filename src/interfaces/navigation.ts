import { Post } from '@interfaces/post';
import { User } from '@interfaces/User';

export enum SCREENS {
    FEED_SCREEN = 'Feed',
    POST_SCREEN = 'Post',
    USER_SCREEN = 'User',
}

export type RootStackParamList = {
    [SCREENS.FEED_SCREEN]: undefined;
    [SCREENS.POST_SCREEN]: { post: Post};
    [SCREENS.USER_SCREEN]: User;
  };