export function TimeToString(day: number) {
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    let y = new Date().getFullYear();
    let m = new Date().getMonth();

    let date = new Date(y, m, day)

    return {
        data: `${month[date.getMonth()]} ${date.getDate()}`,
        startTime: date.getTime()
    }
}