import Item from './Item';
import style from '../../styles/studyList.module.scss';
import { ITasks } from '../../types/ITask';

interface Props {
    taskList: ITasks[],
    selectTask: (selectedTask: ITasks) => void,
}

function StudyList({taskList, selectTask}: Props) {

    return(
        <aside className={style.studyList}>
            <ul>
            <h2>
                Estudos do Dia:</h2>
                {taskList.map(item => (
                    <Item
                        key={item.id}
                        selectTask= {selectTask}
                        {...item}
                    />
                ))}
            </ul>

        </aside>
    )
}

export default StudyList;