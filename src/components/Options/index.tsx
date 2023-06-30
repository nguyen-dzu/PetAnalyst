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
  style?: object;
  borderColor?: string;
  borderColorDisable?: string;
  backgroundColor?: string;
  backgroundColorDisable?: string;
  textColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  textColorDisable?: string;
}
const Options: React.FC<props> = ({
  item,
  height = 40,
  maxWidth,
  selected = false,
  setSelectedItem,
  index,
  style,
  borderColor = colors.FIREBRICK,
  borderColorDisable = colors.SILVER_CHALICE,
  backgroundColorDisable = colors.PLATINUM,
  backgroundColor = colors.BLACK,
  textColor = colors.BLACK,
  borderWidth = 1,
  borderRadius = 10,
  textColorDisable = colors.BLACK,
  ...orther
}) => {
  return (
    <TapOptions
      maxWidth={maxWidth?.width ?? 0}
      borderColor={selected ? borderColor : borderColorDisable}
      height={height}
      onPress={() => setSelectedItem(index)}
      backgroundColor={selected ? backgroundColor : backgroundColorDisable}
      style={style}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      {...orther}>
      <LableOptions textColor={selected ? textColor : textColorDisable}>
        {item?.lable ?? ''}
      </LableOptions>
    </TapOptions>
  );
};

export default Options;

const TapOptions = styled.TouchableOpacity<{
  borderColor: string;
  height: number;
  maxWidth: number;
  backgroundColor: string;
  borderWidth: number;
  borderRadius: number;
}>`
  height: ${props => props.height}px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius}px;
  margin: 10px;
  width: ${props => props.maxWidth / 2 - 20}px;
  border: ${props => props.borderWidth}px solid ${props => props.borderColor};
`;
const LableOptions = styled(fonts.CerebriSansRegularSize12)<{
  textColor: string;
}>`
  color: ${props => props.textColor};
`;
