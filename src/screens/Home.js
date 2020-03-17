import React from 'react';
import { Text } from 'react-native';

import styled from 'styled-components/native';

import { Container } from '../components/Container';
import { DefaultButton } from '../components/Button';

const BigText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export default function Home({ navigation }) {
  return (
    <Container>  
      <BigText>Home Screen</BigText>
      <DefaultButton
        onPress={() => navigation.navigate('Details')}
      >
        <Text>Go to Datails Screen!</Text>
      </DefaultButton>
    </Container> 
  );
}
