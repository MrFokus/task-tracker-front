export function dateTransform(date: string | Date) {
    const month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    date = new Date(date)
    return `${date.getDate()} ${month[date.getMonth()]}`
}