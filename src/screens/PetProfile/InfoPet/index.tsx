import React, {useState, useEffect, useRef} from 'react';
import {styled} from 'styled-components/native';
import Header from '~components/Header';
import {ProgressBar} from '~components/index';
import fonts from '~theme/fonts';
import FillProfile from './share/FillProfile';
import colors from '~theme/colors';
import ButtonBase from '~components/ButtonBase';
import {MaxSize} from '~constants/constants';

const InfoProfile = () => {
  const [nextTab, setNextTab] = useState(false);
  const [indexTab, setIndexTab] = useState(1);
  const [progressBar, setProgressBar] = useState(50);
  const flatListRef = useRef<any>();
  useEffect(() => {
    if (nextTab === true) {
      setIndexTab(2);
      setProgressBar(100);
    }
  }, [nextTab]);
  const getItemLayout = (data: any, index: number) => ({
    length: 400,
    offset: MaxSize.WIDTH * index,
    index,
  });
  const onChangeTap = () => {
    setNextTab(!nextTab);
    let index = 1;
    flatListRef?.current?.scrollToIndex({animated: true, index: index});
  };
  const renderTab = (item: any) => {
    return <FillProfile item={item} />;
  };
  return (
    <Container>
      <Header textRight="Skip" title="Pet Profile" />
      <Title>{indexTab} of 2</Title>
      <ContainerProress>
        <ProgressBar percentedValue={progressBar} />
      </ContainerProress>
      <ContainerContent>
        <TabScreens
          data={[{key: 1}, {key: 2}]}
          renderItem={({item}: any) => renderTab(item)}
          horizontal
          pagingEnabled
          ref={flatListRef}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any) => item.key}
          getItemLayout={getItemLayout}
        />
      </ContainerContent>
      <ContainerButton>
        <ButtonBase
          title="Next"
          backgroundColor={colors.FIREBRICK}
          onPress={() => onChangeTap()}
        />
      </ContainerButton>
    </Container>
  );
};
const ContainerButton = styled.View`
  margin: 10px;
`;
const Container = styled.View`
  background-color: ${colors.WHITE};
  flex: 1;
`;
const ContainerProress = styled.View`
  padding-horizontal: 10px;
`;
const ContainerContent = styled.View`
  margin-top: 10px;
  align-self: center;
  flex: 1;
`;

const Title = styled(fonts.CerebriSansRegularSize16)`
  margin-top: 10px;
  text-align: center;
`;

const TabScreens = styled.FlatList``;
export default InfoProfile;
