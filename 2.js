function countHours(year, holidays) {
  const sumOfHours = holidays.reduce((acummulator, day) => {
    const completeDate = new Date(year + "/" + day);
    if (completeDate.getDay() < 6 && completeDate.getDay() > 0) {
      return acummulator + 2;
    }
    return acummulator;
  }, 0);
  return sumOfHours;
}
