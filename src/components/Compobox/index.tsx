import React, {useState, useEffect} from 'react';
import {styled} from 'styled-components/native';
import fonts from '~theme/fonts';
import colors from '~theme/colors';
import Icon from 'react-native-vector-icons/Feather';
import RowItem from '~components/RowItem';
import {LayoutRectangle} from 'react-native';
import {MaxSize} from '~constants/constants';
interface props {
  title?: string;
  data: string[];
  labelSelected?: string;
  setLabelSelected?: (labelSelected: string) => void;
}
const Component: React.FC<props> = ({
  title = 'Compobox',
  data,
  labelSelected = '',
  setLabelSelected = () => {},
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [visibleData, setVisibleData] = useState<string[]>([]);
  const [layoutContainer, setLayoutContainer] = useState<LayoutRectangle>();
  const onPressItem = () => {
    setIsFocus(!isFocus);
  };
  useEffect(() => {
    // Hiển thị 5 phần tử đầu tiên ban đầu
    setVisibleData(data.slice(0, 5));
  }, [data]);
  const _onPress = (name: string) => {
    setIsFocus(false);
    setLabelSelected(name);
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
  const handleLoadMore = () => {
    const currentLength = visibleData.length;
    const nextLength = currentLength + 5;

    // Kiểm tra xem có còn đủ phần tử để tải hay không
    if (nextLength <= data.length) {
      setVisibleData([
        ...visibleData,
        ...data.slice(currentLength, nextLength),
      ]);
    }
  };
  return (
    <Container
      onLayout={event => {
        setLayoutContainer(event.nativeEvent.layout);
      }}>
      <Title>{title}</Title>
      <ContentView onPress={() => onPressItem()}>
        <TextValue>{labelSelected}</TextValue>
        <Icon name="chevron-down" size={24} color={colors.GRAY_08} />
      </ContentView>
      {isFocus && (
        <DropView
          isCanShowDropDown={isCanShowDropDown()}
          layoutContainer={layoutContainer}
          onScroll={event => {
            const {layoutMeasurement, contentOffset, contentSize} =
              event.nativeEvent;
            const isEndReached =
              layoutMeasurement.height + contentOffset.y >= contentSize.height;
            if (isEndReached) {
              handleLoadMore();
            }
          }}>
          {visibleData.map((item, index) => {
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
