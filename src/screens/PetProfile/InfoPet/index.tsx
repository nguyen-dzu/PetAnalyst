import React from 'react';
import {styled} from 'styled-components/native';
import Header from '~components/Header';
import {ProgressBar} from '~components/index';
import fonts from '~theme/fonts';
import FillProfile from './share/FillProfile';
import {MaxSize} from '~constants/constants';
import colors from '~theme/colors';

const InfoProfile = () => {
  const renderTab = (item: any) => {
    return <FillProfile item={item} />;
  };
  return (
    <Container>
      <Header textRight="Skip" title="Pet Profile" />
      <Title>1 or 2</Title>
      <ContainerContent>
        <ProgressBar percentedValue={50} />
        <TabScreens
          data={[{key: 1}, {key: 2}]}
          renderItem={({item}: any) => renderTab(item)}
          horizontal
          pagingEnabled
          keyExtractor={(item: any) => item.key}
        />
      </ContainerContent>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.WHITE};
`;

const ContainerContent = styled.View`
  margin-top: 10px;
  width: ${MaxSize.WIDTH * 0.93}px;
  align-self: center;
`;

const Title = styled(fonts.CerebriSansRegularSize16)`
  margin-top: 10px;
  text-align: center;
`;

const TabScreens = styled.FlatList`
  height: ${MaxSize.HEIGHT}PX;
`;
export default InfoProfile;
