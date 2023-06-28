import React, {useState} from 'react';
import {MaxSize} from '~constants/constants';
import DateTimePicker from '~components/DateTimePicker';
import InputBase from '~components/InputBase';
import SelectGroup from '~components/SelectGroup';
import {styled} from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import colors from '~theme/colors';
import {DataOpions} from '~constants/Type';
import Compobox from '~components/Compobox';
const HealthCondition = () => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [valueBirthDay, setValueBirtDay] = useState<Date>(new Date());
  const [selectedGender, setSelectedGender] = useState<number>();
  const data: DataOpions[] = [
    {
      lable: 'Wet Food',
      value: 'Wet Food',
    },
    {
      lable: 'Dry Food',
      value: 'Dry Food',
    },
    {
      lable: 'Mix',
      value: 'Mix',
    },
  ];
  const preExistingConditions = [
    'Asthma',
    'Diabetes',
    'High blood pressure',
    'Heart disease',
    'Cancer',
  ];
  return (
    <ContainerContent>
      <InputBase
        title="Birth Date"
        placeholder="DD / MM / YYYY"
        value={moment(valueBirthDay).format('DD/MM/YYYY')}
        rightIcon={<Icon name="down" size={24} />}
        onPressIn={() => setOpenDatePicker(!openDatePicker)}
        borderWidth={0}
        borderRadius={5}
        backgroundColor={colors.PLATINUM}
      />
      <InputBase
        title="Weight (kg)"
        placeholder="Enter weight"
        borderWidth={0}
        borderRadius={5}
        backgroundColor={colors.PLATINUM}
      />
      <SelectGroup
        selected={selectedGender}
        setSelectedItem={(index?: number) => {
          setSelectedGender(index);
        }}
        data={data}
        title="Curent Diet"
      />
      <Compobox data={preExistingConditions} title="Pre-existing Conditions" />
      <DateTimePicker
        onConfirm={date => {
          setOpenDatePicker(false);
          setValueBirtDay(date);
        }}
        onCancel={() => setOpenDatePicker(false)}
        open={openDatePicker}
      />
    </ContainerContent>
  );
};
const ContainerContent = styled.ScrollView`
  margin-top: 10px;
  width: ${MaxSize.WIDTH}px;
  padding-horizontal: 10px;
`;
export default HealthCondition;
