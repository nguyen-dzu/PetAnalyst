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
  selected?: number;
  setSelectedItem: (index?: number) => void;
  styleOptions?: object;
  borderColorOptions?: string;
  borderColorDisable?: string;
  backgroundColor?: string;
  backgroundColorDisable?: string;
  textColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  textColorDisable?: string;
}
const Component: React.FC<props> = ({
  title,
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
  selected,
  setSelectedItem,
  styleOptions,
  borderColorOptions,
  backgroundColor,
  textColor,
  borderWidth,
  borderRadius,
  textColorDisable,
}) => {
  const [layoutContainer, setLayoutContainer] = useState<LayoutRectangle>();

  return (
    <Container
      onLayout={(event: any) => {
        setLayoutContainer(event.nativeEvent.layout);
      }}>
      {title ? <Title>{title}</Title> : null}
      <GroupOptions>
        <RenderItem
          data={data}
          renderItem={({item, index}: {item: DataOpions; index: number}) => (
            <Options
              index={index}
              maxWidth={layoutContainer}
              selected={(selected ?? 0) === index}
              setSelectedItem={setSelectedItem}
              item={item}
              style={styleOptions}
              borderColor={borderColorOptions}
              backgroundColor={backgroundColor}
              textColor={textColor}
              borderWidth={borderWidth}
              borderRadius={borderRadius}
              textColorDisable={textColorDisable}
            />
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
