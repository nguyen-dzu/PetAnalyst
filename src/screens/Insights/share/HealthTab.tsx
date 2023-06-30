import React from 'react';
import {styled} from 'styled-components/native';
import {MaxSize} from '~constants/constants';
import fonts from '~theme/fonts';
import Cart from './Cart';
const ListRisk = [
  {
    titleRisk: 'Risk of Diabetes',
    listTextError: [
      'Male cats have a higher tendency for diabetes',
      'Your cat may be on the heavier side',
    ],
    valueRisk: 250,
  },
  {
    titleRisk: 'Risk of Arthritis',
    listTextError: null,
    valueRisk: 5,
  },
];
const HealthTab = () => {
  return (
    <ContainerContent>
      <Title>Health Risks</Title>
      <Desc>Based on your inputs</Desc>
      {ListRisk.map((item, index: number) => {
        return (
          <Cart
            key={index}
            titleRisk={item.titleRisk}
            listTextError={item.listTextError ? item.listTextError : null}
            valueRisk={item.valueRisk}
          />
        );
      })}
    </ContainerContent>
  );
};

export default HealthTab;

const ContainerContent = styled.ScrollView`
  margin-top: 10px;
  width: ${MaxSize.WIDTH}px;
  padding-horizontal: 10px;
`;

const Title = styled(fonts.CerebriSansBoldSize18)``;
const Desc = styled(fonts.CerebriSansRegularSize16)``;
