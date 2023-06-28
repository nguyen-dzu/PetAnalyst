/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {styled} from 'styled-components/native';
import {navigateReset} from '~navigations/index';
import colors from '~theme/colors';
import fonts from '~theme/fonts';

const logoPets = require('~assets/Images/Logo.png');
const imagesPets = require('~assets/Images/animals.png');
const SplashScreen = () => {
  const timer = setTimeout(() => {
    navigateReset('AuthenStack');
  }, 2000);
  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  return (
    <Container>
      <Logo source={logoPets} />
      <Title>Championing Pet Care</Title>
      <ImagePets source={imagesPets} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.WHITE};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.Image`
  margin-vertical: 10px;
`;
const ImagePets = styled.Image`
  /* position: absolute; */
`;
const Title = styled(fonts.CerebriSansBoldSize20)`
  position: absolute;
  top: 43%;
  z-index: 999;
`;
export default SplashScreen;
