import React from 'react';
import {styled} from 'styled-components/native';
import Header from '~components/Header';
import colors from '~theme/colors';
import fonts from '~theme/fonts';
const catCircle = require('~assets/Images/catcircle.png');
const Insights = () => {
  return (
    <Container>
      <Header title="Insights" />
      <ContainerContent>
        <Banner>
          <TitleGroup>
            <TitleBanner>Leo's Data</TitleBanner>
            <DesBanner>Letting data talk for your pet</DesBanner>
          </TitleGroup>
          <ImageGroup>
            <ImageCat source={catCircle} />
            <CircleLine>
              <CircleFill />
            </CircleLine>
          </ImageGroup>
        </Banner>
      </ContainerContent>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.WHITE};
`;
const ImageGroup = styled.View``;
const ImageCat = styled.Image``;
const ContainerContent = styled.View``;
const Banner = styled.View`
  background-color: ${colors.WATERMELON_RED};
  height: 110px;
  margin-horizontal: 10px;
  padding: 13px;
  border-radius: 10px;
  margin-vertical: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;
const CircleLine = styled.View`
  border-radius: 1000px;
  border: 4px solid ${colors.LIGHT_RED};
  width: 175px;
  height: 175px;
  position: absolute;
  top: 30%;
  z-index: -1;
`;
const CircleFill = styled.View`
  background-color: ${colors.LIGHT_RED};
  width: 150px;
  height: 150px;
  border-radius: 1000px;
  position: absolute;
  top: 5%;
  left: 5%;
`;
const TitleGroup = styled.View``;
const TitleBanner = styled(fonts.CerebriSansBoldSize18)`
  color: ${colors.WHITE};
  line-height: 30px;
`;
const DesBanner = styled(fonts.CerebriSansRegularSize14)`
  color: ${colors.WHITE};
  line-height: 30px;
`;
export default Insights;
