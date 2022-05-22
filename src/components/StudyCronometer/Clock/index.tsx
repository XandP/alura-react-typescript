import React from "react"
import Style from '../../../styles/studyClock.module.scss';
import { ITasks } from "../../../types/ITask";


interface Props {
    time: number | undefined
}

export default function Clock({ time = 0 }: Props) {

    const secsInMins = Math.floor(time/60);
    const secsInSecs = time % 60;

    const [ min1, min2 ] = String(secsInMins).padStart(2,'0');
    const [ sec1, sec2 ] = String(secsInSecs).padStart(2,'0');
    return (
        <React.Fragment>
            <span className={Style.clockNumber}>{ min1 }</span>
            <span className={Style.clockNumber}>{ min2 }</span>
            <span className={Style.clockPartition}>:</span>
            <span className={Style.clockNumber}>{ sec1 }</span>
            <span className={Style.clockNumber}>{ sec2 }</span>
        </React.Fragment>
    )
}