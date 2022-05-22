import Item from './Item';
import study from '../../styles/studyList.module.scss';

function StudyList() {
    const studyItem = [
    {
        taskName: 'React',
        time: '02:00:00'
    },

    {
        taskName: 'JS',
        time: '01:00:00'
    },

    {
        taskName: 'TypeScript',
        time: '03:00:00'
    },

];

    return(
        <aside className={study.studyList}>
            <h2>Estudos do Dia:</h2>
            <ul>
                {studyItem.map((item, index) => (
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