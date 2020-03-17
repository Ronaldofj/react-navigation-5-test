import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

// Action Creators
import { changeTheme } from '../store/ducks/theme';

// Components
import { Container } from '../components/Container';
import { DefaultButton } from '../components/Button';

const BigText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export default function Details() {

  const { theme } = useSelector((state) => state.themeReducer);

  const dispatch = useDispatch();

  return (
    <Container>  
      <BigText>
        Details Screen
      </BigText>
      <DefaultButton
        onPress={() => dispatch(changeTheme(theme === 'default' ? 'dark' : 'default'))}
      >
        <Text>Change theme!</Text>
      </DefaultButton>
    </Container>
  );
}
