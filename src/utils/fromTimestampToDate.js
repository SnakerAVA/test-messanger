/**
 * @param {number} timestamp timestamp number
 * @returns {string} string date format - `day.month.year, hours:minutes`
 */
export default function fromTimestampToDate(timestamp) {
    let date = new Date(timestamp);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    return `${day}.${month}.${year}, ${hours}:${minutes}`;
}