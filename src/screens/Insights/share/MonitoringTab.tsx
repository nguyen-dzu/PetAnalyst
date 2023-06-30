import React, {useState, useEffect} from 'react';
import {MaxSize} from '~constants/constants';
import fonts from '~theme/fonts';
import Bettery from 'react-native-vector-icons/Fontisto';
import LocationIcon from 'react-native-vector-icons/Entypo';
import colors from '~theme/colors';
import styled from 'styled-components/native';
import BaseButton from '~components/ButtonBase';
import {getFormattedDate, getMonthDates} from '~utils/Common';

const MonitoringTab = () => {
  const date = new Date();
  const [FormatTime, setFormatTime] = useState<string[]>();
  useEffect(() => {
    const listDate = getMonthDates(date.getFullYear(), date.getMonth());
    setFormatTime(listDate.map(item => getFormattedDate(item)));
  }, []);
  return (
    <ContainerContent>
      <ContainerTime>
        <CaroucelTime showsHorizontalScrollIndicator={false} horizontal>
          {FormatTime?.map((item, index) => (
            <Title>{item}</Title>
          ))}
        </CaroucelTime>
      </ContainerTime>
      <StatusBar>
        <LiveTime>
          <TextStyled>
            LIVE <Time>10:23 AM</Time>
          </TextStyled>
          <PinGroup>
            <TextStyled>87%</TextStyled>
            <Bettery
              style={{
                paddingLeft: 5,
              }}
              name="battery-three-quarters"
              size={24}
              color={colors.BLACK}
            />
          </PinGroup>
        </LiveTime>
        <TextBoldStyled>
          Update: <TextStyled>Leo is on a walk.</TextStyled>{' '}
        </TextBoldStyled>
        <LocationGroup>
          <DistanceGroup>
            <LocationIcon name="location-pin" size={24} color={colors.BLACK} />
            <Distance>200m Away</Distance>
          </DistanceGroup>
          <BaseButton
            title="Track Location"
            backgroundColor={colors.FIREBRICK}
            width={110}
            height={24}
          />
        </LocationGroup>
      </StatusBar>
    </ContainerContent>
  );
};

export default MonitoringTab;
const ContainerContent = styled.View`
  margin-top: 10px;
  width: ${MaxSize.WIDTH}px;
  padding-horizontal: 10px;
`;

const LiveTime = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;
const StatusBar = styled.View`
  background-color: ${colors.PLATINUM};
  padding: 15px;
  border-radius: 10px;
`;
// const ListTime = styled.FlatList``;
const Title = styled(fonts.CerebriSansRegularSize14)`
  padding-horizontal: 10px;
  width: 80px;
  text-align: center;
  height: 70px;
`;
const TextStyled = styled(fonts.CerebriSansRegularSize14)``;
const Time = styled(fonts.CerebriSansRegularSize14)`
  margin-left: 5px;
`;
const TextBoldStyled = styled(fonts.CerebriSansBoldItalicSize14)``;
const PinGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

const LocationGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  align-items: center;
`;
const DistanceGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CaroucelTime = styled.ScrollView``;
const ContainerTime = styled.View`
  height: 50px;
`;
const Distance = styled(fonts.CerebriSansRegularSize14)``;
