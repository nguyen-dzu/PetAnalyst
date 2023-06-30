import React, {memo} from 'react';
import {Pressable} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  animationValue: Animated.SharedValue<number>;
  label: string;
  onPress?: () => void;
}

const Item: React.FC<Props> = props => {
  const {animationValue, label, onPress} = props;

  const translateY = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
    };
  }, [animationValue]);

  const labelStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [1, 1.25, 1],
      Extrapolate.CLAMP,
    );

    const color = interpolateColor(
      animationValue.value,
      [-1, 0, 1],
      ['#b6bbc0', '#0071fa', '#b6bbc0'],
    );

    return {
      transform: [{scale}, {translateY: translateY.value}],
      color,
    };
  }, [animationValue, translateY]);

  const onPressIn = React.useCallback(() => {
    translateY.value = withTiming(-8, {duration: 250});
  }, [translateY]);

  const onPressOut = React.useCallback(() => {
    translateY.value = withTiming(0, {duration: 250});
  }, [translateY]);

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        style={[
          {
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          },
          containerStyle,
        ]}>
        <Animated.Text style={[{fontSize: 18, color: '#26292E'}, labelStyle]}>
          {label}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};

export default memo(Item);
