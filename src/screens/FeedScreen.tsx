import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { FlatList, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@interfaces/state';
import Posts from '@data/posts.json';
import Users from '@data/users.json';
import {addPosts,addUsers} from "@redux/actions";
import { PostComponent } from '@components/Post';
import { Loader } from '@components/Loader';

const FeedScreen = () => {
    const dispatch = useDispatch();
    const [offset,setOffset] = useState(0);
    const [limit,setLimit] = useState(10);
    const [isFetching, setIsFetching] = useState(false);
    const posts = useSelector((state: RootState) =>  state.posts);
    const users = useSelector((state: RootState) =>  state.users);

    useEffect(() => { 
        getUsers();
    }, []);

    useEffect(() => { 
        if (!_.isEmpty(users)){
            getOldPosts(offset,limit);
        }
    }, [users]);

    const getNewPost = (offset: number,limit:number) => {
        setIsFetching(true);
        setTimeout(() => {
            const newData  = Posts.slice(offset,limit);
            dispatch(addPosts(newData));
            setOffset(offset + limit);
            setLimit(limit + limit);
            setIsFetching(false);
        }, 500);

    };

    const getOldPosts = (offset: number,limit:number) => {
        setIsFetching(true);

        setTimeout(() => {
            const newData  = Posts.slice(offset,limit);
            dispatch(addPosts(posts.concat(newData)));
            setOffset(offset + limit);
            setLimit(limit + limit);
            setIsFetching(false);
        }, 500);

    };

    const getUsers = () => {
        setTimeout(() => {
            dispatch(addUsers(Users))
        }, 500);

    };

    const refreshControl = () => <RefreshControl
    refreshing={isFetching}
    onRefresh={()=>{
        setOffset(0)
        setLimit(10)
        getNewPost(0,10)
    }} />

    if (_.isEmpty(posts) || _.isEmpty(users)) return <Loader />
  
        return (

                <FlatList
                    refreshControl={refreshControl()}
                    initialNumToRender={10}
                    onEndReached={()=>getOldPosts(offset,limit)}
                    onEndReachedThreshold={0.3}
                    data={posts}
                    renderItem={(data)=><PostComponent post={data.item} />}
                    keyExtractor={(item, index) => `flat_${index}`}
                    ListFooterComponent={<Loader />}
                    />
                    

        );
    
}

export default FeedScreen;