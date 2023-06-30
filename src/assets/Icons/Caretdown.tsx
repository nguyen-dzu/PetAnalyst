import React from 'react';
import {Svg, Path} from 'react-native-svg';
import colors from '~theme/colors';
const Caretdown = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Svg width={width ? width : 20} height={height ? height : 20} fill="none">
      <Path
        d="M7.73205 9C6.96225 10.3333 5.03775 10.3333 4.26795 9L0.803846 3C0.0340462 1.66667 0.996298 0 2.5359 0H9.4641C11.0037 0 11.966 1.66667 11.1962 3L7.73205 9Z"
        fill={color ? color : colors.BLACK_10}
      />
    </Svg>
  );
};

export default Caretdown;
