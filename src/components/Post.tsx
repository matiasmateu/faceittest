import React from 'react';
import {  Text  } from 'react-native';
import { Post } from '@interfaces/post';
import { Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootState } from '@interfaces/state';
import { RootStackParamList } from '@interfaces/navigation';
import { SCREENS } from '@interfaces/navigation'

interface PostProps {
    post: Post;
}

interface UserSectionProps {
    userId: number
}

export const PostComponent = (props: PostProps) => {
    const { post } = props;
    const { title, body } = post
    const navigation = useNavigation<NavigationProp<RootStackParamList, SCREENS.POST_SCREEN>>();

    const UserSection = ({userId}:UserSectionProps)=>{
        const users = useSelector((state: RootState) =>  state.users);
        const user = users.find(user=>user.id === userId)
        const navigation = useNavigation<NavigationProp<RootStackParamList>>();
        if(user){
            return (
                <Pressable onPress={()=>navigation.navigate(SCREENS.USER_SCREEN, user)}>
                    <UserContainer>
                    <Avatar source={{uri: user?.avatar}} />
                    <UserName>{user?.name}</UserName>
                </UserContainer>
                </Pressable>
            )
        }
        return null;
    }
    
return (
    <PostContainer>
        <Pressable  onPress={()=>navigation.navigate(SCREENS.POST_SCREEN, { post })}>
            <UserSection userId={post.userId} />
            <TextContainer>
                <Title>{title}</Title>
                <Text>{body.slice(0,100)}</Text>
            </TextContainer>
        </Pressable>
    </PostContainer>)
}

const PostContainer = styled.View`
    padding: 12px;
`

const Title = styled.Text`
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: 6px;
`

const TextContainer = styled.View`
    padding-left: 70px
`
const Avatar = styled.Image`
    width: 50px;
    height: 50px;
`
const UserContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`
const UserName = styled.Text`
    margin-left: 20px;
`