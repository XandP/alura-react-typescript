import StudyButton from '../StudyButton';
import Clock from './Clock';
import Style from '../../styles/studyCronometer.module.scss';
import { timeToSeconds } from '../../common/utils/time';
import { ITasks } from '../../types/ITask';
import { useEffect, useState } from 'react';

interface Props {
    selected: ITasks | undefined
}

export default function StudyCronometer({ selected }: Props) {
    const [time, setTime] = useState<number>();

    useEffect (() => {
        if(selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    return(
        <div className={Style.cronometer}>
            <p className={Style.title}>Escolha um card e inicie o cronômetro.</p>
            <div className={Style.clockWrapper}>
                <Clock time={ time }/>
            </div>
            <StudyButton>
                Começar!
            </StudyButton>
        </div>
    )
}