export function getDayInCurrentMonth() {
    let y = new Date().getFullYear();
    let m = new Date().getMonth();

    return new Date(y, m, 0).getDate()
}