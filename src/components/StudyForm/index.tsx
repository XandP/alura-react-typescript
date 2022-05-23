import React, { useState } from 'react';
import StudyButton from '../StudyButton';
import style from '../../styles/studyForm.module.scss';
import { ITasks } from '../../types/ITask';
import { v4 as uuidv4} from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
}

export default function StudyForm({ setTasks }: Props) {
    const [taskName, setTask] = useState('');
    const [time, setTime] = useState('00:00')
    function addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setTasks(oldTasks =>
            [
                ...oldTasks,
                {
                    id: uuidv4(),
                    taskName,
                    time,
                    selected: false,
                    completed: false,
                }
            ]
        )
        setTask('');
        setTime('00:00');
    }

    return (
        <form className={style.newTask} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo:
                </label>
                <input
                    type="text"
                    name='tarefa'
                    id='tarefa'
                    value={taskName}
                    onChange={event => setTask(event.target.value)}
                    placeholder='O que você quer estudar?'
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="">
                    Tempo restante:
                </label>
                <input
                    className='inputContainer'
                    type="time"
                    step='1'
                    name='tempo'
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    id='tempo'
                    min='00:00:00'
                    max='01:30:00'
                    required
                />
            </div>

            <StudyButton type="submit">Adicionar</StudyButton>
        </form>
    )
}