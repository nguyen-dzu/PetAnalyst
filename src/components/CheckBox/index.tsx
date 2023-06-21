import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {styled} from 'styled-components/native';
import colors from '~theme/colors';
interface props {
  onPress: () => void;
  isChecked: boolean;
  backgroundColor?: string;
  backgroundColorChecked?: string;
}
const Component: React.FC<props> = ({
  isChecked = false,
  onPress,
  backgroundColor = colors.WHITE,
  backgroundColorChecked = colors.DARK_SEA_GREEN,
  ...props
}) => {
  return (
    <Container
      backgroundColor={isChecked ? backgroundColorChecked : backgroundColor}
      onPress={onPress}
      {...props}>
      {isChecked && <Icon name="check" size={16} color={colors.WHITE} />}
    </Container>
  );
};

const Container = styled.TouchableOpacity<{
  backgroundColor: string;
}>`
  width: 18px;
  height: 18px;
  border-radius: 3px;
  background-color: ${props => props.backgroundColor};
  border-color: ${colors.BLACK};
  justify-content: center;
  align-items: center;
`;
export default Component;
