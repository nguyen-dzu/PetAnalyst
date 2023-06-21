import React, {useState} from 'react';
import {styled} from 'styled-components/native';
import fonts from '~theme/fonts';
import colors from '~theme/colors';
import Icon from 'react-native-vector-icons/Feather';
import RowItem from '~components/RowItem';
import {LayoutRectangle} from 'react-native';
import {MaxSize} from '~constants/constants';
interface props {
  title?: string;
  lableSelected?: string;
  data: string[];
}
const Component: React.FC<props> = ({
  title = 'Compobox',
  lableSelected = 'Select options',
  data,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [layoutContainer, setLayoutContainer] = useState<LayoutRectangle>();
  const onPressItem = () => {
    setIsFocus(!isFocus);
  };

  const _onPress = (name: string) => {
    setIsFocus(false);
    console.log(name);
    // setSelected(true);
    // console.log('Selected Item', isSelected);
  };

  const isCanShowDropDown = () => {
    const spaceBottom =
      MaxSize.HEIGHT -
      ((layoutContainer?.height ?? 0) + (layoutContainer?.y ?? 0));

    if (spaceBottom - 150 < 150) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Container
      onLayout={event => {
        setLayoutContainer(event.nativeEvent.layout);
        console.log(event.nativeEvent.layout);
      }}>
      <Title>{title}</Title>
      <ContentView onPress={() => onPressItem()}>
        <TextValue>{lableSelected}</TextValue>
        <Icon name="chevron-down" size={24} color={colors.GRAY_08} />
      </ContentView>
      {isFocus && (
        <DropView
          isCanShowDropDown={isCanShowDropDown()}
          layoutContainer={layoutContainer}>
          {data?.map((item, index) => {
            return <RowItem name={item} key={index} onPress={_onPress} />;
          })}
        </DropView>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  z-index: 999;
`;

const Title = styled(fonts.CerebriSansBoldSize16)``;

const ContentView = styled.TouchableOpacity`
  height: 38px;
  background-color: ${colors.PLATINUM};
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  width: 100%;
`;

const TextValue = styled(fonts.CerebriSansRegularSize14)``;

const DropView = styled.ScrollView<{
  layoutContainer?: LayoutRectangle;
  isCanShowDropDown: boolean;
}>`
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  background-color: ${colors.WHITE};
  border: 1px solid ${colors.PLATINUM};
  border-radius: 10px;
  position: absolute;
  width: ${MaxSize.WIDTH * 0.9}px;
  align-self: center;
  height: 150px;
  padding: 10px;
  top: ${props =>
    props.isCanShowDropDown ? -150 + 28 : props.layoutContainer?.height ?? 0}px;
`;

export default Component;
