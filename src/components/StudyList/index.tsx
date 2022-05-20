import React from 'react';
import react from 'react';

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
        <aside>
            <h2>Estudos do Dia:</h2>
            <ul>
                {studyItem.map((studyItem, index) => (
                    <li key={index}>
                        <h3>{studyItem.taskName}</h3>
                        <span>{studyItem.time}</span>
                    </li>
                ))}
            </ul>

        </aside>
    )
}

export default StudyList;