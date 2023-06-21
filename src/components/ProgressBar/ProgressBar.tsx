import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import {styled} from 'styled-components/native';
import colors from '~theme/colors';
interface props {
  percentedValue: number;
}
const ProgressBar: React.FC<props> = ({percentedValue = 0}) => {
  const progressWidth = useRef(new Animated.Value(0)).current;
  const progressPercent = progressWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });
  useEffect(() => {
    increProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const increProgress = () => {
    // Will change progressWidth value to 1 in 5 seconds
    Animated.timing(progressWidth, {
      toValue: percentedValue,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Container>
      <Child style={{width: progressPercent}} />
    </Container>
  );
};

const Container = styled.View`
  background-color: ${colors.GRAY_09};
  height: 10px;
  width: 100%;
  border-radius: 30px;
`;
const Child = styled(Animated.View)`
  width: 0%;
  height: 10px;
  border-radius: 30px;
  background-color: ${colors.FIREBRICK};
`;
export default ProgressBar;
