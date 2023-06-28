import React from 'react';
import {styled} from 'styled-components/native';
import Header from '~components/Header';

const HomePage = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
`;
export default HomePage;
