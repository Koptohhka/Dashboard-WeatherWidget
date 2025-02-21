export const formatDate = (value: string | undefined = undefined) => {
    let date = new Date(); // Wed Feb 19 2025 04:00:00 GMT+0300 (Moscow Standard Time)

    if (value) {
        date = new Date(value);
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, '0');

    const formattedDate = `${day}.${month}.${year} ${hour}`;

    return formattedDate;
}