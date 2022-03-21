import React from 'react';
import styled from 'styled-components/native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@interfaces/navigation';
import { SCREENS } from '@interfaces/navigation';


export default function UserScreen() {
    const route = useRoute<RouteProp<RootStackParamList, SCREENS.USER_SCREEN>>();
    const { name, avatar  } = route.params;
    return (
        <UserContainer>
            <Avatar source={{ uri: avatar }} />
            <UserName>{name}</UserName>
        </UserContainer>
    )
};

const Avatar = styled.Image`
    width: 50px;
    height: 50px;
`
const UserContainer = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const UserName = styled.Text`
    padding-top: 12px;
    font-weight: bold;
`