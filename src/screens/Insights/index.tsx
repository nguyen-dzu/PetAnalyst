import React, {useRef, useState} from 'react';
import {styled} from 'styled-components/native';
import Header from '~components/Header';
import colors from '~theme/colors';
import fonts from '~theme/fonts';
import HealthTab from './share/HealthTab';
import MonitoringTab from './share/MonitoringTab';
import {MaxSize} from '~constants/constants';
import SelectGroup from '~components/SelectGroup';
const catCircle = require('~assets/Images/catcircle.png');
const Insights = () => {
  const [selectedHeald, setSelectedHeald] = useState<number>(0);
  const flatListRef = useRef<any>();
  const buttonTab = [
    {
      lable: 'Health',
      value: 'Health',
    },
    {
      lable: 'Monitoring',
      value: 'Monitoring',
    },
  ];

  const renderTab = () => {
    if (selectedHeald === 0) {
      return <HealthTab />;
    } else {
      return <MonitoringTab />;
    }
  };

  const getItemLayout = (data: any, index: number) => ({
    length: 400,
    offset: MaxSize.WIDTH * index,
    index,
  });

  return (
    <Container>
      <Header title="Insights" />
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
      <SelectGroup
        selected={selectedHeald}
        setSelectedItem={(index?: number) => {
          setSelectedHeald(index ? index : 0);
        }}
        data={buttonTab}
        backgroundColor={colors.BLACK}
        borderColorOptions={colors.PLATINUM}
        textColor={colors.WHITE}
        borderRadius={50}
      />
      <TabScreens
        data={[{key: 1}, {key: 2}]}
        renderItem={(item: any) => renderTab()}
        horizontal
        pagingEnabled
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.key}
        getItemLayout={getItemLayout}
        scrollEnabled={false}
      />
    </Container>
  );
};

const TabScreens = styled.FlatList``;
const Container = styled.View`
  flex: 1;
  background-color: ${colors.WHITE};
`;
const ImageGroup = styled.View``;
const ImageCat = styled.Image``;
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
