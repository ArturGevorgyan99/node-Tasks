function formatDate(date, format) {
    const data = new Date();
    const year = data.getFullYear();
    const month = String(data.getMonth() +1).padStart(2 , '0');
    const day = String( data.getDate().padStart(2 , "0"));
    switch (key) {
        case "YYYY-MM-DD":
            return `${year}-${month}-${day}`
    
        case "MM/DD/YYYY":
            return `${month}-${day}-${year}`
          
        case "DD-MM-YYYY":
            return `${day}-${month}-${year}`
    
            default: 
                throw new Error("Wrong format");
                
            
        } 
}

function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6;
}
function daysBetween(date1, date2) {
    const diff = Math.abs(date1 - date2);
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

module.exports = {
    isWeekend,
    daysBetween,
    formatDate
}