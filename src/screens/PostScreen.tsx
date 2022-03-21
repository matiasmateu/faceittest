import React from 'react';
import styled from 'styled-components/native';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Pressable, ScrollView } from 'react-native';
import { RootStackParamList } from '@interfaces/navigation';
import { SCREENS } from '@interfaces/navigation';
import { useSelector } from 'react-redux';
import { User } from '@interfaces/user';
import { RootState } from '@interfaces/state';

interface UserSectionProps {
    userId: number
}

export default function PostScreen() {
    const route = useRoute<RouteProp<RootStackParamList, SCREENS.POST_SCREEN>>();
    const { body, title, userId  } = route.params.post;
    const UserSection = ({userId}:UserSectionProps)=>{
        const users = useSelector((state: RootState) =>  state.users);
        const user = users.find((user: User)=>user.id === userId)
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
        <DetailsContainer>
            <ScrollView>
            <UserSection userId={userId} />
                <TextContainer>
                    <Title>{title}</Title>
                    <Body>{body}</Body>
                </TextContainer>
            </ScrollView>
        </DetailsContainer>
    )
};

const DetailsContainer = styled.View`
    padding: 12px;
`
const Body = styled.Text`
    padding-top: 12px;
`
const Title = styled.Text`
    padding-top: 24px;
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: 6px;
    text-align: center;
`
const TextContainer = styled.View`
    padding-top: 48px;
`
const Avatar = styled.Image`
    width: 50px;
    height: 50px;
`
const UserContainer = styled.View`
    padding-top: 48px;
    flex: 1;
    flex-direction: column;
    align-items: center;
`
const UserName = styled.Text`
    padding-top:12px;
`