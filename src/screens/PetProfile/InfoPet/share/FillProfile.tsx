import React from 'react';
import {styled} from 'styled-components/native';
import colors from '~theme/colors';
import fonts from '~theme/fonts';
import InputBase from '~components/InputBase';
import SelectGroup from '~components/SelectGroup';
import Compobox from '~components/Compobox';
import {DataOpions} from '~constants/Type';
import {MaxSize} from '~constants/constants';
const FillProfile = (item: any) => {
  const data: DataOpions[] = [
    {
      lable: 'Dog',
      value: 'Dog',
    },
    {
      lable: 'Cat',
      value: 'Cat',
    },
    {
      lable: 'Hamster',
      value: 'Hamster',
    },
    {
      lable: 'Rabbit',
      value: 'Rabbit',
    },
  ];
  const DataDropDown = ['1', '2', '3'];

  return (
    <Container key={item.key}>
      <PickImage>
        <Upload>Add Photo</Upload>
      </PickImage>
      <InputBase
        title="Pet Name"
        placeholder="Enter here"
        placeholderTextColor={colors.GRAY_09}
        borderWidth={0}
        borderRadius={10}
        backgroundColor={colors.PLATINUM}
      />

      <SelectGroup title="Pet Gender" />
      <SelectGroup data={data} title="Pet Type" />
      <Compobox data={DataDropDown} title="Breed" />
    </Container>
  );
};
const Container = styled.ScrollView`
  margin-top: 10px;
  width: ${MaxSize.WIDTH}px;
  padding-horizontal: 10px;
`;

const PickImage = styled.TouchableOpacity`
  border: 1px dashed ${colors.BLACK_10};
  border-radius: 5px;
  background-color: ${colors.LIGHT_GRAY};
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

const Upload = styled(fonts.CerebriSansRegularSize12)``;
export default FillProfile;
