import React from 'react';
import {styled} from 'styled-components/native';
import {DataOpions} from '~constants/Type';
import colors from '~theme/colors';
import fonts from '~theme/fonts';

interface props {
  borderColor?: string;
  width?: number;
  height?: number;
  item: DataOpions;
}
const Options: React.FC<props> = ({
  item,
  borderColor = colors.SILVER_CHALICE,
  width = 170,
  height = 40,
}) => {
  return (
    <TapOptions borderColor={borderColor} width={width} height={height}>
      <LableOptions>{item.lable ?? ''}</LableOptions>
    </TapOptions>
  );
};

export default Options;

const TapOptions = styled.TouchableOpacity<{
  borderColor: string;
  width: number;
  height: number;
}>`
  height: ${props => props.height}px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.PLATINUM};
  border-radius: 10px;
  width: ${props => props.width}px;
  margin: 10px;
  border: 1px solid ${props => props.borderColor};
`;
const LableOptions = styled(fonts.CerebriSansRegularSize12)``;
