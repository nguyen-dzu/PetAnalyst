import React from 'react';
import DatePicker from 'react-native-date-picker';
interface props {
  open?: boolean;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  date?: Date;
}
const Component: React.FC<props> = ({
  open = false,
  date,
  onConfirm,
  onCancel,
}) => {
  const currentDate = new Date();
  return (
    <DatePicker
      modal
      open={open}
      date={date ?? currentDate}
      mode="date"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default Component;
