import React from 'react';
import {styled} from 'styled-components/native';
import Options from '~components/Options';
import {DataOpions} from '~constants/Type';
import {MaxSize} from '~constants/constants';
import fonts from '~theme/fonts';

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
  return (
    <Container>
      <Title>{title}</Title>
      <GroupOptions>
        <RenderItem
          data={data}
          renderItem={({item}: {item: DataOpions}) => <Options item={item} />}
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
  width: ${MaxSize.WIDTH * 0.9}px;
`;
const Title = styled(fonts.CerebriSansBoldSize16)``;
export default Component;
