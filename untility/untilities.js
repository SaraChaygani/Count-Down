export function currentDatetime() {
  //current date time
  const currentDate = new Date();
  //Format date and time YYYY-MM-DDTHH:M:S
  const year = currentDate.getFullYear();
  //use padstart method to make sure the value has two-digits.
  //add 1 to the month because months are 0 based
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hour = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}T${hour}:${minutes}:${seconds}`;
}
