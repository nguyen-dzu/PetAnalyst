import React from 'react';
import {styled} from 'styled-components/native';
import Header from '~components/Header';
import BaseButton from '~components/ButtonBase';
import colors from '~theme/colors';
import fonts from '~theme/fonts';
import {navigate} from '~navigations/index';
const Logo = require('~assets/Images/Logo.png');
const Pets = require('~assets/Images/animals.png');

const PetProfile = () => {
  const goOnSetupProfile = () => {
    navigate('InfoProfile');
  };

  return (
    <Container>
      <Header
        textRight="Skip"
        title="Pet Profile"
        onPressRight={() => goOnSetupProfile()}
      />
      <ContainerContent>
        <ImagesLogo source={Logo} />
        <ImagePets source={Pets} />
        <Title>Fill out a questionnaire for your pets</Title>
        <Desc>
          This give you a more personalized experience, tailored to your pets’
          needs.
        </Desc>
        <BaseButton
          title="Start"
          backgroundColor={colors.FIREBRICK}
          borderRadius={5}
          onPress={() => goOnSetupProfile()}
        />
      </ContainerContent>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  justify-content: space-between;
  background-color: ${colors.WHITE};
  flex: 1;
`;

const ContainerContent = styled.View`
  margin-top: 10px;
  align-items: center;
  padding-horizontal: 5px;
  padding-vertical: 10px;
`;

const ImagesLogo = styled.Image``;

const ImagePets = styled.Image``;

const Title = styled(fonts.CerebriSansBoldSize22)`
  line-height: 30px;
  text-align: center;
`;

const Desc = styled(fonts.CerebriSansRegularSize14)`
  font-weight: 200;
  line-height: 30px;
  text-align: center;
`;
export default PetProfile;
