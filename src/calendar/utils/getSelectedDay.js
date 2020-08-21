 const getSelectedDay = (date,selectedDay)=>{
    const currentMonth = date.format("MMMM");
    let currentYear = date.format('Y');
    let currentWeekDay = date.format('D');
    return (selectedDay||currentWeekDay)+currentMonth +currentYear
  }
  export default getSelectedDay;