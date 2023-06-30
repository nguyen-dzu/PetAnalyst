import React, {useState, useEffect} from 'react';
import {LayoutRectangle, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import {styled} from 'styled-components/native';
import colors from '~theme/colors';
import fonts from '~theme/fonts';
interface props {
  titleRisk?: string;
  listTextError: string[] | null;
  valueRisk?: number;
}
const Cart: React.FC<props> = ({
  titleRisk,
  listTextError = null,
  valueRisk = 0,
}) => {
  const [layoutContainer, setLayoutContainer] = useState<LayoutRectangle>();
  const [statusRisk, setStatusRisk] = useState('');
  useEffect(() => {
    if (layoutContainer?.width / 2 < valueRisk) {
      setStatusRisk('Hight Risk');
    } else {
      setStatusRisk('Low Risk');
    }
    // if (valueRisk > layoutContainer?.width ? layoutContainer?.width : 0) {
    // }
  }, [layoutContainer?.width, valueRisk]);
  return (
    <Card>
      <Title>{titleRisk}</Title>
      <Title_Risk>{statusRisk}</Title_Risk>
      <ContainerProgressBar>
        <IconRown
          layoutContainer={layoutContainer}
          name="caretdown"
          size={20}
          color={colors.GRAY_03}
          valueRisk={valueRisk}
        />
        <ProgressBarLinear
          colors={['#24FF00', '#977900', '#FF0000']}
          style={styles.linearGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          onLayout={(event: any) =>
            setLayoutContainer(event.nativeEvent.layout)
          }
        />
        <Line />
      </ContainerProgressBar>
      <StatusHealth>
        <Desc>Low Risk</Desc>
        <Desc>High Risk</Desc>
      </StatusHealth>
      {listTextError
        ? listTextError?.map((item: string, index: number) => {
            return (
              <ErrorGroup key={index}>
                <Icon
                  name="exclamationcircle"
                  size={20}
                  color={colors.CHINESE_RED}
                />
                <TextError>{item}</TextError>
              </ErrorGroup>
            );
          })
        : null}
    </Card>
  );
};

export default Cart;
const TextError = styled(fonts.CerebriSansRegularSize14)`
  margin-left: 5px;
`;

const ErrorGroup = styled.View`
  flex-direction: row;
  margin-horizontal: 10px;
  margin-vertical: 3px;
`;
const Title = styled(fonts.CerebriSansBoldSize20)``;

const ContainerProgressBar = styled.View`
  position: relative;
`;
const IconRown = styled(Icon)<{
  layoutContainer?: LayoutRectangle;
  valueRisk: number;
}>`
  position: absolute;
  top: 0;
  left: ${props =>
    props.layoutContainer?.width
      ? props.layoutContainer?.width -
        props.layoutContainer?.width +
        props.valueRisk
      : 0}px;
`;

const Title_Risk = styled(fonts.CerebriSansRegularSize18)`
  line-height: 30px;
`;
const Desc = styled(fonts.CerebriSansRegularSize16)``;

const StatusHealth = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
`;
const Line = styled.View`
  background-color: ${colors.BLACK};
  width: 1px;
  height: 20px;
  position: absolute;
  top: 54%;
  right: 50%;
`;

const Card = styled.View`
  background-color: #efefef;
  width: 100%;
  margin-vertical: 10px;
  padding: 10px;
  border-radius: 10px;
`;
const ProgressBarLinear = styled(LinearGradient)`
  margin-top: 22px;
`;
const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
