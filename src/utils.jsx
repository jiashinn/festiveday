import axios from "axios";

const API_key = "36ede5d9f795bb0d3dce9c27ac4b3afdbe263b41";

export const getHolidays = async ({ country, year }) => {
  const holidays = await axios.get(
    `https://calendarific.com/api/v2/holidays?&api_key=${API_key}&country=${country}&year=${year}`
  );
  return holidays.data.response;
};

export const getCountries = async () => {
  const countries = await axios.get(
    `https://calendarific.com/api/v2/countries?api_key=${API_key}`
  );
  return countries.data.response.countries;
};

/// device breakpoints

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
