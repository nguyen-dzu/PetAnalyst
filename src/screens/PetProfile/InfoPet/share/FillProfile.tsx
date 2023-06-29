import React, {useState, useEffect, memo} from 'react';
import {styled} from 'styled-components/native';
import colors from '~theme/colors';
import fonts from '~theme/fonts';
import InputBase from '~components/InputBase';
import SelectGroup from '~components/SelectGroup';
import Compobox from '~components/Compobox';
import {DataOpions} from '~constants/Type';
import {MaxSize} from '~constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {getListDogBreed} from '~store/redux/dogs/selector';
import {getListDogBreeds} from '~store/redux/dogs/actions';
// import axios from 'axios';
const FillProfile = (item: any) => {
  const dispatch = useDispatch();
  const listBreedDog = useSelector(getListDogBreed);

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
  const [selectedGender, setSelectedGender] = useState<number>();
  const [selectedType, setSelectedType] = useState<number>();
  useEffect(() => {
    dispatch(getListDogBreeds());
  }, [dispatch]);
  // const options = {
  //   method: 'GET',
  //   url: 'https://dog-breeds2.p.rapidapi.com/dog_breeds',
  //   headers: {
  //     'X-RapidAPI-Key': '57dfbf9d6dmsh34cc6ed0d1de8fep1bd656jsn5dccd13cfd47',
  //     'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com',
  //   },
  // };
  // useEffect(() => {
  //   const fetchTest = async () => {
  //     const response: any = await axios.request(options);
  //     const data = response.data;
  //     console.log(data);
  //   };
  //   fetchTest();
  // });
  return (
    <ContainerContent key={item.key}>
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
      <SelectGroup
        selected={selectedGender}
        setSelectedItem={(index?: number) => {
          setSelectedGender(index);
        }}
        title="Pet Gender"
      />
      <SelectGroup
        selected={selectedType}
        setSelectedItem={(index?: number) => {
          setSelectedType(index);
        }}
        data={data}
        title="Pet Type"
      />
      <Compobox
        data={
          listBreedDog?.map(item => {
            return `${item.breed}`;
          }) ?? ['']
        }
        title="Breed"
      />
    </ContainerContent>
  );
};

const ContainerContent = styled.ScrollView`
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
export default memo(FillProfile);
