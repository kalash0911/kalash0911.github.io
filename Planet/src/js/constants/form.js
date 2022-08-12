export const MONTH_ARRAY = [
    { displayValue: "Январь", value: "01" },
    { displayValue: "Февраль", value: "02" },
    { displayValue: "Март", value: "03" },
    { displayValue: "Апрель", value: "04" },
    { displayValue: "Май", value: "05" },
    { displayValue: "Июнь", value: "06" },
    { displayValue: "Июль", value: "07" },
    { displayValue: "Август", value: "08" },
    { displayValue: "Сентябрь", value: "09" },
    { displayValue: "Октябрь", value: "10" },
    { displayValue: "Ноябрь", value: "11" },
    { displayValue: "Декабрь", value: "12" },
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