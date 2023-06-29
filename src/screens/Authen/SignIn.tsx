import React, {useState} from 'react';
import {styled} from 'styled-components/native';

import Header from '~components/Header';
import InputBase from '~components/InputBase';
import colors from '~theme/colors';
import ButtonBase from '~components/ButtonBase';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import fonts from '~theme/fonts';
import {navigateReset} from '~navigations/index';
import {useDispatch} from 'react-redux';
import {setRappitHost} from '~store/redux/application/actions';
const SignIn = () => {
  const [typePassword, setTypePassword] = useState(true);
  const [statusPassword, setStatusPass] = useState('show');
  const dispatch = useDispatch();
  const changePassword = () => {
    setTypePassword(!typePassword);
    if (typePassword == false) {
      setStatusPass('show');
    } else {
      setStatusPass('hide');
    }
  };

  const IconRight = () => {
    return (
      <ButtonShow onPress={() => changePassword()}>
        <TextShow>{statusPassword}</TextShow>
      </ButtonShow>
    );
  };

  const goPetProfile = () => {
    const host = 'dog-breeds2.p.rapidapi.com';
    dispatch(setRappitHost(host));
    navigateReset('ProfileStack');
  };
  return (
    <Container>
      <Header title={'Log In'} />
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
        </ContainerForm>
      </KeyboardAwareScrollView>
      <ButtonRouterGroup>
        <ButtonBaseStyled
          title={'Log In'}
          backgroundColor={colors.FIREBRICK}
          fontFamily="Regular"
          onPress={() => goPetProfile()}
        />
        <Forgot>Forgot your password?</Forgot>
      </ButtonRouterGroup>
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
`;
const ButtonShow = styled.TouchableOpacity``;

const ContainerForm = styled.View`
  margin-horizontal: 10px;
  margin-top: 15px;
  align-items: center;
`;
const TextShow = styled(fonts.CerebriSansMediumSize16)`
  color: ${colors.FIREBRICK};
`;
const Forgot = styled(fonts.CerebriSansBoldSize18)`
  align-self: center;
  margin-vertical: 10px;
  color: ${colors.FIREBRICK};
`;
const ButtonRouterGroup = styled.View``;
const ButtonBaseStyled = styled(ButtonBase)`
  width: 90%;
  align-self: center;
  margin-top: 20px;
`;
export default SignIn;
