import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { Container } from '../components/Container';
import { DefaultButton } from '../components/Button';

const BigText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export default function Details({ navigation }) {
  return (
    <Container>  
      <BigText>
        Details Screen
      </BigText>
      <DefaultButton
        onPress={() => navigation.navigate('Home')}
      >
        <Text>Go to Home Screen!</Text>
      </DefaultButton>
    </Container>
  );
}
