import React, {useState} from 'react';

import {styled} from 'styled-components/native';
import Header from '~components/Header';
import InputBase from '~components/InputBase';
import ButtonBase from '~components/ButtonBase';
import CheckBox from '~components/CheckBox';
import colors from '~theme/colors';
import fonts from '~theme/fonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
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
        extraHeight={
          Platform.OS === 'ios'
            ? 260 + getStatusBarHeight()
            : getStatusBarHeight()
        }
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
  margin-horizontal: 10px;
  margin-top: 15px;
  align-items: center;
`;
const TextShow = styled(fonts.CerebriSansMediumSize16)`
  color: ${colors.FIREBRICK};
`;
const ButtonShow = styled.TouchableOpacity``;
const ButtonBaseStyled = styled(ButtonBase)`
  width: 90%;
  align-self: center;
  margin-top: 20px;
`;
const ContainerChecked = styled.View`
  flex-direction: row;
  margin-horizontal: 10px;
  align-items: flex-start;
  justify-content: center;
  margin-vertical: 10px;
`;
const DescChecked = styled(fonts.CerebriSansRegularSize14)`
  line-height: 20px;
  margin-left: 10px;
`;
const Forgot = styled(fonts.CerebriSansBoldSize18)`
  align-self: center;
  margin-vertical: 10px;
  color: ${colors.FIREBRICK};
`;
const ButtonRouterGroup = styled.View``;
export default SignUp;
