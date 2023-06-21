/* eslint-disable max-lines */
import Colors from './colors';
import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const ArialRoundedMT = 'ArialRoundedMTBold';
export const ArialRoundedMTBold = 'ArialRoundedMTBold';
export const MontserratBold = 'Montserrat-Bold';
export const MontserratItalic = 'Montserrat-Italic';
export const MontserratMedium = 'Montserrat-Medium';
export const MontserratRegular = 'Montserrat-Regular';
export const MontserratSemiBold = 'Montserrat-SemiBold';
export const MontserratThin = 'Montserrat-Thin';
export const MontserratBlack = 'Montserrat-Black';
export const MontserratLight = 'Montserrat-Light';

export const CerebriSansProRegular = 'CerebriSansPro-Regular';
export const CerebriSansProBold = 'CerebriSansPro-Bold';
export const CerebriSansProItalic = 'CerebriSansPro-Italic';
export const CerebriSansProMedium = 'CerebriSansPro-Medium';
export const CerebriSansProSemiBold = 'CerebriSansPro-SemiBold';
// export const CerebriSansProSBoldItalic = 'CerebriSansPro-Bold-Italic';

function withDefault<T extends {defaultProps?: Partial<TDefaults>}, TDefaults>(
  o: T,
  defaultProps: TDefaults,
): T & {defaultProps: TDefaults} {
  o.defaultProps = defaultProps;
  return o as any;
}

// CerebriSansPro,
const BaseCerebriSansProText = withDefault(
  styled.Text`
    color: ${Colors.BLACK};
    font-family: ${CerebriSansProRegular};
    letter-spacing: 0.5px;
  `,
  {
    allowFontScaling: false,
  },
);

const BaseCerebriSansProBoldText = withDefault(
  styled.Text`
    color: ${Colors.BLACK};
    font-family: ${CerebriSansProBold};
    letter-spacing: 0.5px;
  `,
  {
    allowFontScaling: false,
  },
);

const BaseCerebriSansProItalicText = withDefault(
  styled.Text`
    color: ${Colors.BLACK};
    font-family: ${CerebriSansProItalic};
    letter-spacing: 0.5px;
  `,
  {
    allowFontScaling: false,
  },
);

const BaseCerebriSansProMediumText = withDefault(
  styled.Text`
    color: ${Colors.BLACK};
    font-family: ${CerebriSansProMedium};
    letter-spacing: 0.5px;
  `,
  {
    allowFontScaling: false,
  },
);

const BaseCerebriSansProSemiBoldText = withDefault(
  styled.Text`
    color: ${Colors.BLACK};
    font-family: ${CerebriSansProSemiBold};
    letter-spacing: 0.5px;
  `,
  {
    allowFontScaling: false,
  },
);

const BaseCerebriSansProBoldItalicText = withDefault(
  styled.Text`
    color: ${Colors.BLACK};
    letter-spacing: 0.5px;
    font-weight: 500;
    font-style: italic;
  `,
  {
    allowFontScaling: false,
  },
);

// Montserrat, Weight 300
const BaseMontserratLightText = withDefault(
  styled.Text`
    color: ${Colors.BLACK};
    font-family: ${MontserratLight};
    font-weight: 300;
    letter-spacing: 0.5px;
  `,
  {
    allowFontScaling: false,
  },
);

// Montserrat, Weight 400
const BaseMontserratRegularText = withDefault(
  styled.Text`
    color: ${Colors.BLACK};
    font-family: ${MontserratRegular};
    font-weight: 400;
    letter-spacing: 0.5px;
  `,
  {
    allowFontScaling: false,
  },
);

// Montserrat, Weight 500
const BaseMontserratMediumText = withDefault(
  styled.Text`
    color: ${Colors.BLACK};
    font-family: ${MontserratMedium};
    font-weight: 500;
    letter-spacing: 0.5px;
  `,
  {
    allowFontScaling: false,
  },
);

// Montserrat, Weight 700
const BaseMontserratSemiBoldText = withDefault(
  styled.Text`
    color: ${Colors.BLACK};
    font-family: ${MontserratSemiBold};
    letter-spacing: 0.5px;
  `,
  {
    allowFontScaling: false,
  },
);

const BaseMontserratBlackText = withDefault(
  styled.Text`
    color: ${Colors.BLACK};
    font-family: ${MontserratBlack};
    font-weight: 800;
    letter-spacing: 0.5px;
  `,
  {
    allowFontScaling: false,
  },
);

// ArialRoundedMT, Weight 400
const BaseArialRoundedMTBoldText = withDefault(
  styled.Text`
    color: ${Colors.BLACK};
    font-family: ${ArialRoundedMTBold};
    letter-spacing: 0.5px;
  `,
  {
    allowFontScaling: false,
  },
);

// ArialRoundedMT, Weight 200
const BaseArialRoundedMTText = withDefault(
  styled.Text`
    color: ${Colors.BLACK};
    font-family: ${ArialRoundedMT};
    letter-spacing: 0.5px;
  `,
  {
    allowFontScaling: false,
  },
);

// Montserrat Light, Weight 300
const Montserrat300 = styled(BaseMontserratLightText)`
  font-weight: 300;
`;
const Montserrat300Size8 = styled(Montserrat300)`
  font-size: 8px;
`;
const Montserrat300Size10 = styled(Montserrat300)`
  font-size: 10px;
`;
const Montserrat300Size12 = styled(Montserrat300)`
  font-size: 12px;
`;
const Montserrat300Size14 = styled(Montserrat300)`
  font-size: 14px;
`;
const Montserrat300Size16 = styled(Montserrat300)`
  font-size: 16px;
`;
const Montserrat300Size18 = styled(Montserrat300)`
  font-size: 18px;
`;
const Montserrat300Size20 = styled(Montserrat300)`
  font-size: 20px;
`;
const Montserrat300Size25 = styled(Montserrat300)`
  font-size: 25px;
`;
const fontMontserrat300 = {
  Montserrat300,
  Montserrat300Size8,
  Montserrat300Size10,
  Montserrat300Size12,
  Montserrat300Size14,
  Montserrat300Size16,
  Montserrat300Size18,
  Montserrat300Size20,
  Montserrat300Size25,
};

// Montserrat Regular, Weight 400
const Montserrat400 = styled(BaseMontserratRegularText)`
  font-weight: 400;
`;
const Montserrat400Size8 = styled(Montserrat400)`
  font-size: 8px;
`;
const Montserrat400Size10 = styled(Montserrat400)`
  font-size: 10px;
`;
const Montserrat400Size12 = styled(Montserrat400)`
  font-size: 12px;
`;
const Montserrat400Size14 = styled(Montserrat400)`
  font-size: 14px;
`;
const Montserrat400Size16 = styled(Montserrat400)`
  font-size: 16px;
`;
const Montserrat400Size18 = styled(Montserrat400)`
  font-size: 18px;
`;
const Montserrat400Size20 = styled(Montserrat400)`
  font-size: 20px;
`;
const Montserrat400Size25 = styled(Montserrat400)`
  font-size: 25px;
`;
const fontMontserrat400 = {
  Montserrat400,
  Montserrat400Size8,
  Montserrat400Size10,
  Montserrat400Size12,
  Montserrat400Size14,
  Montserrat400Size16,
  Montserrat400Size18,
  Montserrat400Size20,
  Montserrat400Size25,
};

// Montserrat Medium, Weight 500
const Montserrat500 = styled(BaseMontserratMediumText)`
  font-weight: 500;
`;
const Montserrat500Size8 = styled(Montserrat500)`
  font-size: 8px;
`;
const Montserrat500Size10 = styled(Montserrat500)`
  font-size: 10px;
`;
const Montserrat500Size11 = styled(Montserrat500)`
  font-size: 11px;
`;
const Montserrat500Size12 = styled(Montserrat500)`
  font-size: 12px;
`;
const Montserrat500Size14 = styled(Montserrat500)`
  font-size: 14px;
`;
const Montserrat500Size15 = styled(Montserrat500)`
  font-size: 15px;
`;
const Montserrat500Size16 = styled(Montserrat500)`
  font-size: 16px;
`;
const Montserrat500Size18 = styled(Montserrat500)`
  font-size: 18px;
`;
const Montserrat500Size20 = styled(Montserrat500)`
  font-size: 20px;
`;
const Montserrat500Size25 = styled(Montserrat500)`
  font-size: 25px;
`;
const fontMontserrat500 = {
  Montserrat500,
  Montserrat500Size8,
  Montserrat500Size10,
  Montserrat500Size11,
  Montserrat500Size12,
  Montserrat500Size14,
  Montserrat500Size15,
  Montserrat500Size16,
  Montserrat500Size18,
  Montserrat500Size20,
  Montserrat500Size25,
};

// Montserrat Medium, Weight 600
const Montserrat600 = styled(BaseMontserratMediumText)`
  font-weight: 600;
`;
const Montserrat600Size8 = styled(Montserrat600)`
  font-size: 8px;
`;
const Montserrat600Size10 = styled(Montserrat600)`
  font-size: 10px;
`;
const Montserrat600Size12 = styled(Montserrat600)`
  font-size: 12px;
`;
const Montserrat600Size14 = styled(Montserrat600)`
  font-size: 14px;
`;
const Montserrat600Size16 = styled(Montserrat600)`
  font-size: 16px;
`;
const Montserrat600Size18 = styled(Montserrat600)`
  font-size: 18px;
`;
const Montserrat600Size19 = styled(Montserrat600)`
  font-size: 19px;
`;
const Montserrat600Size20 = styled(Montserrat600)`
  font-size: 20px;
`;
const Montserrat600Size25 = styled(Montserrat600)`
  font-size: 25px;
`;
const fontMontserrat600 = {
  Montserrat600,
  Montserrat600Size8,
  Montserrat600Size10,
  Montserrat600Size12,
  Montserrat600Size14,
  Montserrat600Size16,
  Montserrat600Size18,
  Montserrat600Size19,
  Montserrat600Size20,
  Montserrat600Size25,
};

// Montserrat Bold, Weight 700
const Montserrat700 = styled(BaseMontserratSemiBoldText)`
  font-weight: ${Platform.OS === 'android' ? 800 : 700};
`;
const Montserrat700Size8 = styled(Montserrat700)`
  font-size: 8px;
`;
const Montserrat700Size10 = styled(Montserrat700)`
  font-size: 10px;
`;
const Montserrat700Size12 = styled(Montserrat700)`
  font-size: 12px;
`;
const Montserrat700Size14 = styled(Montserrat700)`
  font-size: 14px;
`;
const Montserrat700Size16 = styled(Montserrat700)`
  font-size: 16px;
`;
const Montserrat700Size18 = styled(Montserrat700)`
  font-size: 18px;
`;
const Montserrat700Size20 = styled(Montserrat700)`
  font-size: 20px;
`;
const Montserrat700Size22 = styled(Montserrat700)`
  font-size: 22px;
`;
const Montserrat700Size25 = styled(Montserrat700)`
  font-size: 25px;
`;
const Montserrat700Size30 = styled(Montserrat700)`
  font-size: 30px;
`;
const Montserrat700Size40 = styled(Montserrat700)`
  font-size: 40px;
`;
const fontMontserrat700 = {
  Montserrat700,
  Montserrat700Size8,
  Montserrat700Size10,
  Montserrat700Size12,
  Montserrat700Size14,
  Montserrat700Size16,
  Montserrat700Size18,
  Montserrat700Size20,
  Montserrat700Size22,
  Montserrat700Size25,
  Montserrat700Size30,
  Montserrat700Size40,
};

// Montserrat Black, Weight 800
const Montserrat800 = styled(BaseMontserratBlackText)`
  font-weight: 800;
`;
const Montserrat800Size8 = styled(Montserrat800)`
  font-size: 8px;
`;
const Montserrat800Size10 = styled(Montserrat800)`
  font-size: 10px;
`;
const Montserrat800Size12 = styled(Montserrat800)`
  font-size: 12px;
`;
const Montserrat800Size14 = styled(Montserrat800)`
  font-size: 14px;
`;
const Montserrat800Size16 = styled(Montserrat800)`
  font-size: 16px;
`;
const Montserrat800Size18 = styled(Montserrat800)`
  font-size: 18px;
`;
const Montserrat800Size20 = styled(Montserrat800)`
  font-size: 20px;
`;
const Montserrat800Size25 = styled(Montserrat800)`
  font-size: 25px;
`;

const Montserrat800Size28 = styled(Montserrat800)`
  font-size: 28px;
`;

const Montserrat800Size30 = styled(Montserrat800)`
  font-size: 30px;
`;

const Montserrat800Size40 = styled(Montserrat800)`
  font-size: 40px;
  font-weight: 700;
`;
const fontMontserrat800 = {
  Montserrat800,
  Montserrat800Size8,
  Montserrat800Size10,
  Montserrat800Size12,
  Montserrat800Size14,
  Montserrat800Size16,
  Montserrat800Size18,
  Montserrat800Size20,
  Montserrat800Size25,
  Montserrat800Size28,
  Montserrat800Size30,
  Montserrat800Size40,
};

// ArialRoundedMT, Weight 200
const ArialRoundedMT200Size20 = styled(BaseArialRoundedMTText)`
  font-size: 20px;
`;

const fontArialRoundedMT200 = {
  ArialRoundedMT200Size20,
};

// ArialRoundedMT Bold, Weight 400
const ArialRoundedMT400 = styled(BaseArialRoundedMTBoldText)``;
const ArialRoundedMT400Size8 = styled(BaseArialRoundedMTBoldText)`
  font-size: 8px;
  font-weight: 400;
`;
const ArialRoundedMT400Size10 = styled(BaseArialRoundedMTBoldText)`
  font-size: 10px;
  font-weight: 400;
`;
const ArialRoundedMT400Size12 = styled(BaseArialRoundedMTBoldText)`
  font-size: 12px;
  font-weight: 400;
`;
const ArialRoundedMT400Size14 = styled(BaseArialRoundedMTBoldText)`
  font-size: 14px;
  font-weight: 400;
`;
const ArialRoundedMT400Size16 = styled(BaseArialRoundedMTBoldText)`
  font-size: 16px;
  font-weight: 400;
`;
const ArialRoundedMT400Size18 = styled(BaseArialRoundedMTBoldText)`
  font-size: 18px;
  font-weight: 400;
`;
const ArialRoundedMT400Size20 = styled(BaseArialRoundedMTBoldText)`
  font-size: 20px;
  font-weight: 400;
`;

const ArialRoundedMT400Size21 = styled(BaseArialRoundedMTBoldText)`
  font-size: 21px;
  font-weight: 400;
`;
const ArialRoundedMT400Size23 = styled(BaseArialRoundedMTBoldText)`
  font-size: 23px;
  font-weight: 400;
`;
const ArialRoundedMT400Size25 = styled(BaseArialRoundedMTBoldText)`
  font-size: 25px;
  font-weight: 400;
`;

const ArialRoundedMT400Size27 = styled(BaseArialRoundedMTBoldText)`
  font-size: 27px;
  font-weight: 400;
`;

const ArialRoundedMT400Size28 = styled(BaseArialRoundedMTBoldText)`
  font-size: 28px;
  font-weight: 400;
`;

const ArialRoundedMT400Size30 = styled(BaseArialRoundedMTBoldText)`
  font-size: 30px;
  font-weight: 400;
`;
const fontArialRoundedMT400 = {
  ArialRoundedMT400,
  ArialRoundedMT400Size8,
  ArialRoundedMT400Size10,
  ArialRoundedMT400Size12,
  ArialRoundedMT400Size14,
  ArialRoundedMT400Size16,
  ArialRoundedMT400Size18,
  ArialRoundedMT400Size20,
  ArialRoundedMT400Size21,
  ArialRoundedMT400Size23,
  ArialRoundedMT400Size25,
  ArialRoundedMT400Size27,
  ArialRoundedMT400Size28,
  ArialRoundedMT400Size30,
};

const BaseText = styled.Text`
  color: ${Colors.BLACK};
`;

// normal
const Normal14 = styled(BaseText)`
  font-size: 14px;
`;

const baseNormalTexts = {
  Normal14,
};

// CerebriSans Regular
const CerebriSansRegularSize8 = styled(BaseCerebriSansProText)`
  font-size: 8px;
`;
const CerebriSansRegularSize10 = styled(BaseCerebriSansProText)`
  font-size: 10px;
`;
const CerebriSansRegularSize12 = styled(BaseCerebriSansProText)`
  font-size: 12px;
`;
const CerebriSansRegularSize14 = styled(BaseCerebriSansProText)`
  font-size: 14px;
`;
const CerebriSansRegularSize16 = styled(BaseCerebriSansProText)`
  font-size: 16px;
`;
const CerebriSansRegularSize18 = styled(BaseCerebriSansProText)`
  font-size: 18px;
`;
const CerebriSansRegularSize20 = styled(BaseCerebriSansProText)`
  font-size: 20px;
`;
const CerebriSansRegularSize22 = styled(BaseCerebriSansProText)`
  font-size: 22px;
`;
const CerebriSansRegularSize24 = styled(BaseCerebriSansProText)`
  font-size: 24px;
`;
const CerebriSansRegularSize26 = styled(BaseCerebriSansProText)`
  font-size: 26px;
`;

const CerebriSansRegularSize28 = styled(BaseCerebriSansProText)`
  font-size: 28px;
`;

const CerebriSansRegular = {
  CerebriSansRegularSize8,
  CerebriSansRegularSize10,
  CerebriSansRegularSize12,
  CerebriSansRegularSize14,
  CerebriSansRegularSize16,
  CerebriSansRegularSize18,
  CerebriSansRegularSize20,
  CerebriSansRegularSize22,
  CerebriSansRegularSize24,
  CerebriSansRegularSize26,
  CerebriSansRegularSize28,
};

// CerebriSans Bold
const CerebriSansBoldSize8 = styled(BaseCerebriSansProBoldText)`
  font-size: 8px;
`;
const CerebriSansBoldSize10 = styled(BaseCerebriSansProBoldText)`
  font-size: 10px;
`;
const CerebriSansBoldSize12 = styled(BaseCerebriSansProBoldText)`
  font-size: 12px;
`;
const CerebriSansBoldSize13 = styled(BaseCerebriSansProBoldText)`
  font-size: 13px;
`;
const CerebriSansBoldSize14 = styled(BaseCerebriSansProBoldText)`
  font-size: 14px;
`;
const CerebriSansBoldSize16 = styled(BaseCerebriSansProBoldText)`
  font-size: 16px;
`;
const CerebriSansBoldSize18 = styled(BaseCerebriSansProBoldText)`
  font-size: 18px;
`;
const CerebriSansBoldSize20 = styled(BaseCerebriSansProBoldText)`
  font-size: 20px;
`;
const CerebriSansBoldSize22 = styled(BaseCerebriSansProBoldText)`
  font-size: 22px;
`;
const CerebriSansBoldSize24 = styled(BaseCerebriSansProBoldText)`
  font-size: 24px;
`;
const CerebriSansBoldSize26 = styled(BaseCerebriSansProBoldText)`
  font-size: 26px;
`;

const CerebriSansBoldSize28 = styled(BaseCerebriSansProBoldText)`
  font-size: 28px;
`;

const CerebriSansBold = {
  CerebriSansBoldSize8,
  CerebriSansBoldSize10,
  CerebriSansBoldSize12,
  CerebriSansBoldSize13,
  CerebriSansBoldSize14,
  CerebriSansBoldSize16,
  CerebriSansBoldSize18,
  CerebriSansBoldSize20,
  CerebriSansBoldSize22,
  CerebriSansBoldSize24,
  CerebriSansBoldSize26,
  CerebriSansBoldSize28,
};

// CerebriSans SemiBold
const CerebriSansSemiBoldSize8 = styled(BaseCerebriSansProSemiBoldText)`
  font-size: 8px;
`;
const CerebriSansSemiBoldSize10 = styled(BaseCerebriSansProSemiBoldText)`
  font-size: 10px;
`;
const CerebriSansSemiBoldSize12 = styled(BaseCerebriSansProSemiBoldText)`
  font-size: 12px;
`;
const CerebriSansSemiBoldSize13 = styled(BaseCerebriSansProSemiBoldText)`
  font-size: 13px;
`;
const CerebriSansSemiBoldSize14 = styled(BaseCerebriSansProSemiBoldText)`
  font-size: 14px;
`;
const CerebriSansSemiBoldSize16 = styled(BaseCerebriSansProSemiBoldText)`
  font-size: 16px;
`;
const CerebriSansSemiBoldSize18 = styled(BaseCerebriSansProSemiBoldText)`
  font-size: 18px;
`;
const CerebriSansSemiBoldSize20 = styled(BaseCerebriSansProSemiBoldText)`
  font-size: 20px;
`;
const CerebriSansSemiBoldSize22 = styled(BaseCerebriSansProSemiBoldText)`
  font-size: 22px;
`;
const CerebriSansSemiBoldSize24 = styled(BaseCerebriSansProSemiBoldText)`
  font-size: 24px;
`;
const CerebriSansSemiBoldSize26 = styled(BaseCerebriSansProSemiBoldText)`
  font-size: 26px;
`;
const CerebriSansSemiBoldSize28 = styled(BaseCerebriSansProSemiBoldText)`
  font-size: 28px;
`;

const CerebriSansSemiBold = {
  CerebriSansSemiBoldSize8,
  CerebriSansSemiBoldSize10,
  CerebriSansSemiBoldSize12,
  CerebriSansSemiBoldSize13,
  CerebriSansSemiBoldSize14,
  CerebriSansSemiBoldSize16,
  CerebriSansSemiBoldSize18,
  CerebriSansSemiBoldSize20,
  CerebriSansSemiBoldSize22,
  CerebriSansSemiBoldSize24,
  CerebriSansSemiBoldSize26,
  CerebriSansSemiBoldSize28,
};

// CerebriSans Medium
const CerebriSansMediumSize8 = styled(BaseCerebriSansProMediumText)`
  font-size: 8px;
`;
const CerebriSansMediumSize10 = styled(BaseCerebriSansProMediumText)`
  font-size: 10px;
`;
const CerebriSansMediumSize12 = styled(BaseCerebriSansProMediumText)`
  font-size: 12px;
`;
const CerebriSansMediumSize14 = styled(BaseCerebriSansProMediumText)`
  font-size: 14px;
`;
const CerebriSansMediumSize16 = styled(BaseCerebriSansProMediumText)`
  font-size: 16px;
`;
const CerebriSansMediumSize17 = styled(BaseCerebriSansProMediumText)`
  font-size: 17px;
`;
const CerebriSansMediumSize18 = styled(BaseCerebriSansProMediumText)`
  font-size: 18px;
`;
const CerebriSansMediumSize19 = styled(BaseCerebriSansProMediumText)`
  font-size: 19px;
`;
const CerebriSansMediumSize20 = styled(BaseCerebriSansProMediumText)`
  font-size: 20px;
`;
const CerebriSansMediumSize22 = styled(BaseCerebriSansProMediumText)`
  font-size: 22px;
`;
const CerebriSansMediumSize24 = styled(BaseCerebriSansProMediumText)`
  font-size: 24px;
`;
const CerebriSansMediumSize26 = styled(BaseCerebriSansProMediumText)`
  font-size: 26px;
`;

const CerebriSansMediumSize28 = styled(BaseCerebriSansProMediumText)`
  font-size: 28px;
`;

const CerebriSansMedium = {
  CerebriSansMediumSize8,
  CerebriSansMediumSize10,
  CerebriSansMediumSize12,
  CerebriSansMediumSize14,
  CerebriSansMediumSize16,
  CerebriSansMediumSize17,
  CerebriSansMediumSize18,
  CerebriSansMediumSize19,
  CerebriSansMediumSize20,
  CerebriSansMediumSize22,
  CerebriSansMediumSize24,
  CerebriSansMediumSize26,
  CerebriSansMediumSize28,
};

// CerebriSans Italic
const CerebriSansItalicSize8 = styled(BaseCerebriSansProItalicText)`
  font-size: 8px;
`;
const CerebriSansItalicSize10 = styled(BaseCerebriSansProItalicText)`
  font-size: 10px;
`;
const CerebriSansItalicSize12 = styled(BaseCerebriSansProItalicText)`
  font-size: 12px;
`;
const CerebriSansItalicSize14 = styled(BaseCerebriSansProItalicText)`
  font-size: 14px;
`;
const CerebriSansItalicSize16 = styled(BaseCerebriSansProItalicText)`
  font-size: 16px;
`;
const CerebriSansItalicSize18 = styled(BaseCerebriSansProItalicText)`
  font-size: 18px;
`;
const CerebriSansItalicSize20 = styled(BaseCerebriSansProItalicText)`
  font-size: 20px;
`;
const CerebriSansItalicSize22 = styled(BaseCerebriSansProItalicText)`
  font-size: 22px;
`;
const CerebriSansItalicSize24 = styled(BaseCerebriSansProItalicText)`
  font-size: 24px;
`;
const CerebriSansItalicSize26 = styled(BaseCerebriSansProItalicText)`
  font-size: 26px;
`;

const CerebriSansItalicSize28 = styled(BaseCerebriSansProItalicText)`
  font-size: 28px;
`;

const CerebriSansItalic = {
  CerebriSansItalicSize8,
  CerebriSansItalicSize10,
  CerebriSansItalicSize12,
  CerebriSansItalicSize14,
  CerebriSansItalicSize16,
  CerebriSansItalicSize18,
  CerebriSansItalicSize20,
  CerebriSansItalicSize22,
  CerebriSansItalicSize24,
  CerebriSansItalicSize26,
  CerebriSansItalicSize28,
};

// CerebriSans BoldItalic
const CerebriSansBoldItalicSize8 = styled(BaseCerebriSansProBoldText)`
  font-size: 8px;
`;
const CerebriSansBoldItalicSize10 = styled(BaseCerebriSansProBoldItalicText)`
  font-size: 10px;
`;
const CerebriSansBoldItalicSize12 = styled(BaseCerebriSansProBoldItalicText)`
  font-size: 12px;
`;
const CerebriSansBoldItalicSize13 = styled(BaseCerebriSansProBoldItalicText)`
  font-size: 13px;
`;
const CerebriSansBoldItalicSize14 = styled(BaseCerebriSansProBoldItalicText)`
  font-size: 14px;
`;
const CerebriSansBoldItalicSize16 = styled(BaseCerebriSansProBoldItalicText)`
  font-size: 16px;
`;
const CerebriSansBoldItalicSize18 = styled(BaseCerebriSansProBoldItalicText)`
  font-size: 18px;
`;
const CerebriSansBoldItalicSize20 = styled(BaseCerebriSansProBoldItalicText)`
  font-size: 20px;
`;
const CerebriSansBoldItalicSize22 = styled(BaseCerebriSansProBoldItalicText)`
  font-size: 22px;
`;
const CerebriSansBoldItalicSize24 = styled(BaseCerebriSansProBoldItalicText)`
  font-size: 24px;
`;
const CerebriSansBoldItalicSize26 = styled(BaseCerebriSansProBoldItalicText)`
  font-size: 26px;
`;

const CerebriSansBoldItalicSize28 = styled(BaseCerebriSansProBoldItalicText)`
  font-size: 28px;
`;

const CerebriSansBoldItalic = {
  CerebriSansBoldItalicSize8,
  CerebriSansBoldItalicSize10,
  CerebriSansBoldItalicSize12,
  CerebriSansBoldItalicSize13,
  CerebriSansBoldItalicSize14,
  CerebriSansBoldItalicSize16,
  CerebriSansBoldItalicSize18,
  CerebriSansBoldItalicSize20,
  CerebriSansBoldItalicSize22,
  CerebriSansBoldItalicSize24,
  CerebriSansBoldItalicSize26,
  CerebriSansBoldItalicSize28,
};

export default {
  ...baseNormalTexts,
  ...fontMontserrat300,
  ...fontMontserrat400,
  ...fontMontserrat500,
  ...fontMontserrat600,
  ...fontMontserrat700,
  ...fontMontserrat800,
  ...fontArialRoundedMT400,
  ...fontArialRoundedMT200,
  ...CerebriSansRegular,
  ...CerebriSansBold,
  ...CerebriSansSemiBold,
  ...CerebriSansMedium,
  ...CerebriSansItalic,
  ...CerebriSansBoldItalic,
};
