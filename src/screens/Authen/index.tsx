import React from 'react';
import {styled} from 'styled-components/native';
import fonts from '~theme/fonts';
import ButtonBase from '~components/ButtonBase';
import colors from '~theme/colors';
import {navigate} from '~navigations/index';
import {MaxSize} from '~constants/constants';
const logo = require('~assets/Images/Logo.png');
interface Props {}
const AuthenScreens: React.FC<Props> = () => {
  return (
    <Container>
      <ContainerLogo>
        <ImageLogo source={logo} />
        <Title>Welcome, Pet Owner!</Title>
      </ContainerLogo>
      <ContainerButton>
        <ButtonBase
          onPress={() => navigate('SignUpScreen')}
          title={'Create Account'}
          backgroundColor={colors.FIREBRICK}
          fontFamily="Regular"
        />
        <Textlogin>
          Existing Member? &nbsp;
          <LoginHere onPress={() => navigate('SignInScreen')}>
            Login Here
          </LoginHere>
        </Textlogin>
      </ContainerButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ImageLogo = styled.Image``;

const ContainerLogo = styled.View`
  position: absolute;
  flex-direction: column;
  align-items: center;
  top: 10%;
`;
const ContainerButton = styled.View`
  flex-direction: column;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  width: ${MaxSize.WIDTH}px;
`;
const LoginHere = styled(fonts.CerebriSansMediumSize16)`
  color: ${colors.FIREBRICK};
  text-decoration-line: underline;
  margin-left: 5px;
`;
const Textlogin = styled(fonts.CerebriSansMediumSize16)`
  color: ${colors.FIREBRICK};
  margin-vertical: 10px;
`;
const Title = styled(fonts.CerebriSansBoldSize24)``;
export default AuthenScreens;
