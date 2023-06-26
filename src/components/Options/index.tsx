import React from 'react';
import {styled} from 'styled-components/native';
import {DataOpions} from '~constants/Type';
import colors from '~theme/colors';
import fonts from '~theme/fonts';
import {LayoutRectangle} from 'react-native';

interface props {
  index?: number;
  height?: number;
  item?: DataOpions;
  maxWidth?: LayoutRectangle;
  selected: boolean;
  setSelectedItem: (index?: number) => void;
}
const Options: React.FC<props> = ({
  item,
  height = 40,
  maxWidth,
  selected = false,
  setSelectedItem,
  index,
}) => {
  return (
    <TapOptions
      maxWidth={maxWidth?.width ?? 0}
      borderColor={selected ? colors.FIREBRICK : colors.SILVER_CHALICE}
      height={height}
      onPress={() => setSelectedItem(index)}>
      <LableOptions>{item?.lable ?? ''}</LableOptions>
    </TapOptions>
  );
};

export default Options;

const TapOptions = styled.TouchableOpacity<{
  borderColor: string;
  height: number;
  maxWidth: number;
}>`
  height: ${props => props.height}px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.PLATINUM};
  border-radius: 10px;
  margin: 10px;
  width: ${props => props.maxWidth / 2 - 20}px;
  border: 1px solid ${props => props.borderColor};
`;
const LableOptions = styled(fonts.CerebriSansRegularSize12)``;
