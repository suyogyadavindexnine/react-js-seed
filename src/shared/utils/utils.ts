import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

//To convert any string to title case
/**
 * @param value
 * @returns title case string
 */
export const titleCase = (value: string) => {
  if (!value) {
    return '';
  }
  return value.replace(/^_*(.)|_+(.)/g, (s, c, d) =>
    c ? c.toUpperCase() : ' ' + d.toUpperCase()
  );
};

//To convert date string in specific format, by default MM/DD/YYYY
/**
 * @param date
 * @param format optional
 * @returns formated date
 */
export const formatDate = (date: string, format?: string) => {
  return date && dayjs(date).isValid()
    ? dayjs(date).format(format ? format : 'MM/DD/YYYY')
    : '';
};

//To convert date string to UTC in specific format, by default MM/DD/YYYY
/**
 * @param date
 * @param format optional
 * @returns formated utc date
 */
export const formatDateToUtc = (date: string, format?: string) => {
  dayjs.extend(utc);
  return dayjs(date).isValid()
    ? dayjs(date)
        .utc(true)
        .format(format ? format : 'MM/DD/YYYY')
    : '';
};

//To extract time from date string in specific format, by default hh:mm a
/**
 * @param date
 * @param format optional
 * @returns formated time
 */
export const getTimeStamp = (date: string, format?: string) => {
  return dayjs(date).isValid()
    ? dayjs(date).format(format ? format : 'hh:mm a')
    : '';
};

//Get the initials of any string value
/**
 * @param text
 * @returns initials of given text
 */
export const getInitials = (text: string) => {
  return text
    ? text
        .split(' ')
        .map((v) => v.slice(0, 1))
        .join('')
        .toUpperCase()
    : '';
};

//Remove underscore from any string value
/**
 * @param text
 * @returns given string without underscore
 */
export const removeUnderscore = (text: string) => {
  return text
    ? text.replace(/(?:_| |\b)(\w)/g, function ($1) {
        return $1.toUpperCase().replace('_', ' ');
      })
    : '';
};

//To conver bytes to kb
/**
 * @param value in bytes
 * @returns converted value in kb
 */
export const convertBytesToKb = (value: number) => {
  return value ? Math.round(value / Math.pow(1024, 1)) : 0;
};

//To get the today's date
/**
 * @returns current date in YYYY-MM-DD format
 */
export const getDate = () => {
  const today = new Date();
  const dayNum = today.getDate();
  const monthNum = today.getMonth() + 1;
  const yearNum = today.getFullYear();
  let day = dayNum.toString();
  let month = monthNum.toString();
  if (dayNum < 10) {
    day = '0' + dayNum;
  }

  if (monthNum < 10) {
    month = '0' + monthNum;
  }
  return `${yearNum}-${month}-${day}`;
};

//To convert hexa code to rgba format
/**
 * @param hex
 * @param opacity
 * @returns converted rgba value
 */
export const hexToRgbA = (hex: string, opacity: number) => {
  let colorData: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    colorData = hex.substring(1).split('');
    if (colorData.length == 3) {
      colorData = [
        colorData[0],
        colorData[0],
        colorData[1],
        colorData[1],
        colorData[2],
        colorData[2]
      ];
    }
    colorData = '0x' + colorData.join('');
    return (
      'rgba(' +
      [(colorData >> 16) & 255, (colorData >> 8) & 255, colorData & 255].join(
        ','
      ) +
      `,${opacity})`
    );
  }
  throw new Error('Bad Hex');
};

//To get the comma seperated values from array of string
/**
 * @param data
 * @returns Comma seperated string
 */
export const getCommaSeperatedValues = (data: string[]) => {
  return data?.length > 0 ? data?.toString()?.replaceAll(',', ', ') : '';
};

// get the current date
const currentDate = new Date();

//get last weeks date
export const lastWeekStart = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate() - 7
);

//get last month start date
export const lastMonthStart = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() - 1,
  1
);

//get last month end date
export const lastMonthEnd = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  0
);

// get last month start and end date
export const lastYearStart = new Date(currentDate.getFullYear() - 1, 0, 1);
export const lastYearEnd = new Date(currentDate.getFullYear() - 1, 11, 31);

// convert the date string into date
/**
 * @param date
 * @returns date
 */
export const convertStringDateToDate = (date: string) => {
  const [day, month, year] = date.split('/').map(Number);
  return new Date(year, month - 1, day);
};

// To sort the data by date
/**
 * @param v1
 * @param v2
 * @param cellParams1
 * @param cellParams2
 * @returns
 */
export const sortComparator = (v1, v2, cellParams1, cellParams2) => {
  const date1Parts = v1.split('/');
  const date2Parts = v2.split('/');

  const day1 = parseInt(date1Parts[0], 10);
  const month1 = parseInt(date1Parts[1], 10) - 1;
  const year1 = parseInt(date1Parts[2], 10);

  const day2 = parseInt(date2Parts[0], 10);
  const month2 = parseInt(date2Parts[1], 10) - 1;
  const year2 = parseInt(date2Parts[2], 10);

  const dateObj1 = new Date(year1, month1, day1);
  const dateObj2 = new Date(year2, month2, day2);

  if (dateObj1 < dateObj2) {
    return -1;
  }
  if (dateObj1 > dateObj2) {
    return 1;
  }
  return 0;
};

// To filter the data by week month and year
/**
 * @param dataToFilter
 * @param filter
 * @param dateToFilter
 * @returns filtered data
 */
export const filterDataByWeekMonthYear = (
  dataToFilter,
  filter,
  dateToFilter
) => {
  let fliteredData = dataToFilter;
  if (filter.toLowerCase() == 'last week') {
    fliteredData = dataToFilter.filter((item) => {
      const itemDate = convertStringDateToDate(item[dateToFilter]);
      return itemDate >= lastWeekStart && itemDate <= currentDate;
    });
  } else if (filter.toLowerCase() == 'last month') {
    fliteredData = dataToFilter.filter((item) => {
      const itemDate = convertStringDateToDate(item[dateToFilter]);
      return itemDate >= lastMonthStart && itemDate <= lastMonthEnd;
    });
  } else if (filter.toLowerCase() == 'last year') {
    fliteredData = dataToFilter.filter((item) => {
      const itemDate = convertStringDateToDate(item[dateToFilter]);
      return itemDate >= lastYearStart && itemDate <= lastYearEnd;
    });
  }
  return fliteredData;
};
