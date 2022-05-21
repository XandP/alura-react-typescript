import React from 'react';
import '../../styles/studyListStyles.scss';

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
        <aside className='studyList'>
            <h2>Estudos do Dia:</h2>
            <ul>
                {studyItem.map((studyItem, index) => (
                    <li key={index} className='item'>
                        <h3>{studyItem.taskName}</h3>
                        <span>{studyItem.time}</span>
                    </li>
                ))}
            </ul>

        </aside>
    )
}

export default StudyList;