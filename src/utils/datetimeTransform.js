// 
// Date/Time Transformation
//

//
// Timestamp to human readable Date, optional Date + Time
//
export const tsReadableDate = (date, withTime = false) => {

    const ts = date;
    // convert to milliseconds 
    // and then create a new Date object 
    let dateObj = new Date(ts);
  
    let formattedDate = '';
  
    if (withTime) {
      formattedDate = dateObj.toLocaleString(); //=> 02/04/2020 02:23:37
    } else {
      formattedDate = dateObj.toLocaleDateString() //=> 02/04/2020
    }
  
    return formattedDate;
  
  };
  
  //
  // Timestamp to human readable Time
  //
  export const tsReadableTime = (timestamp) => {
  
    const unixTimestamp = timestamp;
  
    // convert to milliseconds 
    // and then create a new Date object 
    let dateObj = new Date(unixTimestamp * 1000);
  
    // Get hours from the timestamp 
    let hours = dateObj.getUTCHours();
  
    // Get minutes part from the timestamp 
    let minutes = dateObj.getUTCMinutes();
  
    // Get seconds part from the timestamp 
    //let seconds = dateObj.getUTCSeconds();
  
    // hours, minutes, seconds
    let formattedTime = hours && hours.toString().padStart(2, '0') + ':' + minutes && minutes.toString().padStart(2, '0'); // + ':' + seconds.toString().padStart(2, '0'); 
  
    return formattedTime;
  }