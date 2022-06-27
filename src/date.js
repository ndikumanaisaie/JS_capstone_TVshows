/* eslint-disable no-undef */

const getDate = () => {
  const { DateTime } = luxon;
  const now = DateTime.now();
  return now.toISODate();
};

export default getDate;