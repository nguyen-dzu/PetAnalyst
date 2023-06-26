import React from 'react';
import {styled} from 'styled-components/native';
import colors from '~theme/colors';
import fonts from '~theme/fonts';
interface Props {
  title?: string;
  height?: number;
  mRight?: number;
  mLeft?: number;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  fontFamily?: 'Bold' | 'Regular' | 'Medium';
  disabled?: boolean;
  backgroundColorDisabled?: string;
  textColor?: string;
  onPress?: () => void;
  activeOpacity?: number;
}

const Component: React.FC<Props> = ({
  title = 'Button',
  backgroundColor = `${colors.BLACK}`,
  borderWidth = 0,
  borderColor = `${colors.WHITE}`,
  borderRadius = 30,
  fontFamily,
  disabled = false,
  backgroundColorDisabled = `${colors.GRAY_06}`,
  textColor = `${colors.WHITE}`,
  onPress,
  activeOpacity = 0.6,
}) => {
  return (
    <Touchable
      backgroundColor={disabled ? backgroundColorDisabled : backgroundColor}
      borderWidth={borderWidth}
      borderColor={borderColor}
      borderRadius={borderRadius}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={activeOpacity}>
      <Title textColor={textColor} fontFamily={fontFamily}>
        {title}
      </Title>
    </Touchable>
  );
};
const Touchable = styled.TouchableOpacity<{
  backgroundColor: string;
  borderWidth: number;
  borderColor: string;
  borderRadius: number;
  disabled: boolean;
}>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border-width: ${props => props.borderWidth}px;
  border-color: ${props => props.borderColor};
  border-radius: ${props => props.borderRadius}px;
  height: 48px;
  width: 100%;
`;

const Title = styled(fonts.CerebriSansBoldSize18)<{
  textColor: string;
  fontFamily: string;
}>`
  color: ${props => props.textColor};
  font-family: ${props =>
    props.fontFamily === 'Bold'
      ? 'CerebriSansPro-Bold'
      : props.fontFamily === 'Regular'
      ? 'CerebriSansPro-Regular'
      : 'CerebriSansPro-Medium'};
`;
export default Component;
