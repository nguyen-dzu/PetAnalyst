import React, {useState} from 'react';

import {styled} from 'styled-components/native';
import Header from '~components/Header';
import InputBase from '~components/InputBase';
import ButtonBase from '~components/ButtonBase';
import CheckBox from '~components/CheckBox';
import colors from '~theme/colors';
import fonts from '~theme/fonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {navigate} from '~navigations/index';
const SignUp = () => {
  const [typePassword, setTypePassword] = useState(true);
  const [checked, setChecked] = useState(false);
  const changePassword = () => {
    setTypePassword(!typePassword);
  };
  const onChangeChecked = () => {
    setChecked(!checked);
  };
  const IconRight = () => {
    return (
      <ButtonShow onPress={() => changePassword()}>
        <TextShow>Show</TextShow>
      </ButtonShow>
    );
  };

  const goToSignIn = () => {
    navigate('SignInScreen');
  };
  return (
    <Container>
      <Header
        title={'Sign Up'}
        textRight="Login"
        onPressRight={() => goToSignIn()}
      />
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={20}
        keyboardShouldPersistTaps="handled"
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <ContainerForm>
          <InputBase
            backgroundColor={colors.LIGHT_GRAY}
            borderWidth={0}
            borderRadius={10}
            placeholder="Name"
          />
          <InputBase
            backgroundColor={colors.LIGHT_GRAY}
            borderWidth={0}
            borderRadius={10}
            placeholder="Email"
            keyboradType="email-address"
          />
          <InputBase
            backgroundColor={colors.LIGHT_GRAY}
            borderWidth={0}
            borderRadius={10}
            placeholder="Password"
            rightIcon={<IconRight />}
            secureTextEntry={typePassword}
          />
          <ContainerChecked>
            <CheckBox isChecked={checked} onPress={() => onChangeChecked()} />
            <DescChecked>
              I would like to receive your newsletter and other promotional
              information.
            </DescChecked>
          </ContainerChecked>
        </ContainerForm>
      </KeyboardAwareScrollView>
      <ButtonRouterGroup>
        <ButtonBaseStyled
          title={'Sign Up'}
          backgroundColor={colors.FIREBRICK}
          fontFamily="Regular"
          onPress={() => goToSignIn()}
        />
        <Forgot>Forgot your password?</Forgot>
      </ButtonRouterGroup>
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
`;
const ContainerForm = styled.View`
  align-items: center;
  padding-horizontal: 10px;
  padding-vertical: 10px;
`;
const TextShow = styled(fonts.CerebriSansMediumSize16)`
  color: ${colors.FIREBRICK};
`;
const ButtonShow = styled.TouchableOpacity``;
const ButtonBaseStyled = styled(ButtonBase)`
  align-self: center;
`;
const ContainerChecked = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;
const DescChecked = styled(fonts.CerebriSansRegularSize14)`
  line-height: 20px;
`;
const Forgot = styled(fonts.CerebriSansBoldSize18)`
  align-self: center;
  color: ${colors.FIREBRICK};
`;
const ButtonRouterGroup = styled.View`
  margin-bottom: 10px;
  margin-horizontal: 10px;
`;

export default SignUp;
