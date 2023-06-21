import React from 'react';
import styled from 'styled-components/native';
import fonts from '~theme/fonts';
import colors from '~theme/colors';

interface Props {
  name: string;
  onPress: (name: string) => void;
  paddingLeft?: number;
  fontSize?: number;
  spaceItem?: number;
}

const RowItem: React.FC<Props> = ({
  name,
  onPress,
  paddingLeft = 68,
  fontSize = 14,
  spaceItem = 10,
}) => {
  const _onPress = () => {
    typeof onPress(name);
  };
  return (
    <Container
      onPress={_onPress}
      paddingLeft={paddingLeft}
      spaceItem={spaceItem}>
      <Name fontSize={fontSize}>{name}</Name>
    </Container>
  );
};

const Container = styled.TouchableOpacity<{
  paddingLeft: number;
  spaceItem: number;
}>`
  padding-vertical: ${props => (props.spaceItem ? props.spaceItem : 10)}px;
  width: 100%;
  padding-left: ${props => props.paddingLeft}px;
  padding-right: ${props => props.paddingLeft}px;
  justify-content: center;
  background-color: red;
  margin: 5px;
`;

const Name = styled(fonts.CerebriSansRegularSize14)`
  color: ${colors.BLACK};
  flex-wrap: wrap;
  font-size: ${props => (props.fontSize ? props.fontSize : 14)}px;
`;

export default React.memo(RowItem);
