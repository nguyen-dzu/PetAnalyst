import React from 'react';
import {KeyboardTypeOptions} from 'react-native';
import {styled} from 'styled-components/native';
import colors from '~theme/colors';
import fonts from '~theme/fonts';

interface props {
  placeholder?: string;
  keyboradType?: KeyboardTypeOptions;
  value?: string;
  color?: string;
  borderWidth?: number;
  borderRadius?: number;
  backgroundColor?: string;
  rightIcon?: React.ReactNode;
  maxLength?: number;
  multiline?: boolean;
  editable?: boolean;
  title?: string;
  secureTextEntry?: boolean;
  placeholderTextColor?: string;
}
const Component: React.FC<props> = ({
  placeholder = 'Text Input',
  value,
  keyboradType,
  color = colors.BLACK,
  backgroundColor = colors.WHITE,
  borderWidth = 2,
  borderRadius = 60,
  rightIcon,
  maxLength = 100,
  multiline = false,
  editable = true,
  title = '',
  secureTextEntry = false,
  placeholderTextColor = colors.BLACK,
  ...props
}) => {
  return (
    <Container>
      {title && <TextTitle>{title}</TextTitle>}
      <InputItem
        backgroundColor={backgroundColor}
        borderWidth={borderWidth}
        borderRadius={borderRadius}
        {...props}>
        <TextInput
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          value={value}
          keyboardType={keyboradType}
          color={color}
          maxLength={maxLength}
          multiline={multiline}
          editable={editable}
          secureTextEntry={secureTextEntry}
        />
        {rightIcon}
      </InputItem>
    </Container>
  );
};
const Container = styled.View`
  width: 100%;
`;
const InputItem = styled.View<{
  backgroundColor: string;
  borderWidth: number;
  borderRadius: number;
}>`
  height: 45px;
  border-radius: ${props => props.borderRadius}px;
  border-width: ${props => props.borderWidth}px;
  border-color: ${colors.TORY_BLUE};
  padding-horizontal: 10px;
  margin-vertical: 10px;
  background-color: ${props => props.backgroundColor};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TextInput = styled.TextInput<{color: string}>`
  flex: 1;
  color: ${props => props.color};
`;
const TextTitle = styled(fonts.CerebriSansBoldSize16)``;
export default Component;
