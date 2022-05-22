import Item from './Item';
import style from '../../styles/studyList.module.scss';
import { ITasks } from '../../types/ITask';

function StudyList({taskList}: {taskList: ITasks[]}) {

    return(
        <aside className={style.studyList}>
            <ul>
            <h2>
                Estudos do Dia:</h2>
                {taskList.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>

        </aside>
    )
}

export default StudyList;