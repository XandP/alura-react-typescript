export function timeToSeconds(time: string) {
    const [hours = '0',
            mins = '0',
            secs = '0'
    ] = time.split(":")

    const hoursInSecs = Number(hours) * 3600;
    const minsInSecs = Number(mins) * 60;

    const response = hoursInSecs + minsInSecs + Number(secs)

    return response
}

// export function secondsToTime(time: number) {
//     // const [ mins = 0,
//     //         secs = 0
//     // ] = time.split(":")

//     const secsInMins = Math.floor(time/60);
//     const secsInSecs = time % 60;

//     const response = hoursInSecs + minsInSecs + Number(secs)

//     return response
// }