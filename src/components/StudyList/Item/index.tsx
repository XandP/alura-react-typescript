import style from '../../../styles/studyList.module.scss';
import { ITasks } from '../../../types/ITask';

export default function Item({id, taskName, time, selected, completed}: ITasks) {
    console.log({id, taskName, time, selected, completed});
    return (
        <li className={style.item}>
            <h3>{taskName}</h3>
            <span>{time}</span>
        </li>
    )
}