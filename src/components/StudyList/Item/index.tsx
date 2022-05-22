import style from '../../../styles/studyListItem.module.scss';
import { ITasks } from '../../../types/ITask';


interface Props extends ITasks{
    selectTask: (selectedTask: ITasks) => void,
}

export default function Item(
    {
        id,
        taskName,
        time,
        selected,
        completed,
        selectTask
    }: Props) {
    return (
        <li
            className={`${style.item} ${selected? style.itemSelected : ''}`}
            onClick={() =>selectTask(
                {
                    id,
                    taskName,
                    time,
                    selected,
                    completed
                }
            )}>
            <h3>{taskName}</h3>
            <span>{time}</span>
        </li>
    )
}