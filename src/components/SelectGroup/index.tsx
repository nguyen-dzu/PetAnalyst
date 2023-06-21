import React, {useState} from 'react';
import {styled} from 'styled-components/native';
import Options from '~components/Options';
import {DataOpions} from '~constants/Type';
import fonts from '~theme/fonts';
import {LayoutRectangle} from 'react-native';
interface props {
  title?: string;
  data?: DataOpions[];
  borderColor?: string;
  width?: number;
  height?: number;
}
const Component: React.FC<props> = ({
  title = 'Select Options',
  data = [
    {
      lable: 'Male',
      value: 'Male',
    },
    {
      lable: 'Female',
      value: 'Female',
    },
  ],
}) => {
  const [layoutContainer, setLayoutContainer] = useState<LayoutRectangle>();
  return (
    <Container
      onLayout={event => {
        setLayoutContainer(event.nativeEvent.layout);
        console.log(event.nativeEvent.layout);
      }}>
      <Title>{title}</Title>
      <GroupOptions>
        <RenderItem
          data={data}
          renderItem={({item}: {item?: DataOpions}) => (
            <Options maxWidth={layoutContainer} item={item} />
          )}
          numColumns={2}
          horizontal={false}
        />
      </GroupOptions>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
`;
const RenderItem = styled.FlatList``;

const GroupOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled(fonts.CerebriSansBoldSize16)``;
export default Component;
