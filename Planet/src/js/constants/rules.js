// rule{number} equal to keys from localization files
export const RULES = [
  `rule1`,
  "rule2",
  "rule3",
  "rule4",
  `rule5`,
  "rule6",
];

export const ANSWERS_LIST = [
  {
    value: "2",
    label: "Да или скорее всего да",
    active: false,
    localizationKey: "yesMbYes",
  },
  {
    value: "1",
    label: "Может быть или неуверен",
    active: false,
    localizationKey: "mb",
  },
  {
    value: "0",
    label: "Нет или скорее всего нет",
    active: false,
    localizationKey: "noMbNo",
  },
];
