export function Diff(first: any, second: any) {
    return new Date(second).getTime() - new Date(first).getTime()
}