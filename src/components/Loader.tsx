import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export const Loader = () => (
    <LoaderContainer>
        <ActivityIndicator animating={true}/>
    </LoaderContainer>
)

const LoaderContainer = styled.View`
    width: 100%;
    height: 100px;
    align-content: center;
    justify-content: center;
`