import React from 'react';
import {styled} from 'styled-components/native';
import fonts from '~theme/fonts';
import Icon from 'react-native-vector-icons/Feather';
import colors from '~theme/colors';
interface props {
  title?: string;
  iconName?: string;
  textRight?: string;
  iconRight?: string;
  onPressRight?: () => void;
}
const Header: React.FC<props> = ({
  title = 'title',
  iconName,
  textRight = '',
  iconRight,
  onPressRight,
  ...props
}) => {
  return (
    <Container {...props}>
      <ButtonBack>
        {iconName && (
          <Icon
            name={iconName ? iconName : 'chevron-left'}
            size={24}
            color={colors.GRAY_09}
          />
        )}
      </ButtonBack>
      <Title>{title}</Title>
      <ButtonRight onPress={onPressRight}>
        {textRight && <TextRight>{textRight}</TextRight>}
        {iconRight && <Icon name={iconRight ? iconRight : 'home'} size={24} />}
      </ButtonRight>
    </Container>
  );
};
const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: 10px;
  margin-vertical: 5px;
`;
const ButtonBack = styled.TouchableOpacity``;
const ButtonRight = styled.TouchableOpacity``;
const Title = styled(fonts.CerebriSansBoldSize26)``;
const TextRight = styled(fonts.CerebriSansMediumSize16)`
  text-decoration-line: underline;
  color: ${colors.FIREBRICK};
`;

export default Header;
