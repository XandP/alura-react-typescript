import React from "react"
import Style from '../../../styles/studyClock.module.scss';

export default function Clock() {
    return (
        <React.Fragment>
            <span className={Style.clockNumber}>0</span>
            <span className={Style.clockNumber}>0</span>
            <span className={Style.clockPartition}>:</span>
            <span className={Style.clockNumber}>0</span>
            <span className={Style.clockNumber}>0</span>
        </React.Fragment>
    )
}