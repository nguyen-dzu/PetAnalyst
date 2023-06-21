import React, {useState} from 'react';
import {styled} from 'styled-components/native';
import fonts from '~theme/fonts';
import colors from '~theme/colors';
import Icon from 'react-native-vector-icons/Feather';
import RowItem from '~components/RowItem';
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

  const onPressItem = () => {
    setIsFocus(!isFocus);
  };

  const _onPress = (name: string) => {
    setIsFocus(false);
    console.log(name);
    // setSelected(true);
    // console.log('Selected Item', isSelected);
  };
  return (
    <Container>
      <Title>{title}</Title>
      <ContentView onPress={() => onPressItem()}>
        <TextValue>{lableSelected}</TextValue>
        <Icon name="chevron-down" size={24} color={colors.GRAY_08} />
      </ContentView>
      {isFocus && (
        <DropView>
          {data?.map((item, index) => {
            return <RowItem name={item} key={index} onPress={_onPress} />;
          })}
        </DropView>
      )}
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
`;

const Title = styled(fonts.CerebriSansRegularSize16)``;

const ContentView = styled.TouchableOpacity`
  height: 38px;
  background-color: ${colors.PLATINUM};
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
`;

const TextValue = styled(fonts.CerebriSansRegularSize14)``;

const DropView = styled.ScrollView`
  background-color: ${colors.WHITE};
  border: 1px solid ${colors.PLATINUM};
  border-radius: 10px;
  padding: 10px;
  height: 100px;
`;

export default Component;
