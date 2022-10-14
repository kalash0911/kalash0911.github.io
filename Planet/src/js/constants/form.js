// displayValue equal keys from localization
export const MONTH_ARRAY = [
    { localizationKey: "jan", displayValue: "Январь", value: "01" },
    { localizationKey: "feb", displayValue: "Февраль", value: "02" },
    { localizationKey: "mar", displayValue: "Март", value: "03" },
    { localizationKey: "apr", displayValue: "Апрель", value: "04" },
    { localizationKey: "may", displayValue: "Май", value: "05" },
    { localizationKey: "jun", displayValue: "Июнь", value: "06" },
    { localizationKey: "jul", displayValue: "Июль", value: "07" },
    { localizationKey: "aug", displayValue: "Август", value: "08" },
    { localizationKey: "sep", displayValue: "Сентябрь", value: "09" },
    { localizationKey: "oct", displayValue: "Октябрь", value: "10" },
    { localizationKey: "nov", displayValue: "Ноябрь", value: "11" },
    { localizationKey: "dec", displayValue: "Декабрь", value: "12" },
  ]

const maxYear = new Date().getFullYear() - 14;

export const YEARS_ARRAY =  new Array(101 - 14).fill(100).map((_, ind) => {
    const year = maxYear - ind + '';
    return {
        displayValue: year,
        value: year,
    }
});


export const DAYS_ARRAY =  new Array(31).fill(0).map((_, ind) => {
    const curDay = ind + 1;
    return {
        displayValue: curDay < 10 ? '0' + curDay : curDay + '',
        value: curDay < 10 ? '0' + curDay : curDay + '',
    }
});