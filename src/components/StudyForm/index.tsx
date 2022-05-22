import React from 'react';
import StudyButton from '../StudyButton';
import style from '../../styles/studyForm.module.scss';
import { ITasks } from '../../types/ITask';

class StudyForm extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
}> {
    state = {
        taskName: '',
        time: '00:00'
    }

    addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.setTasks(oldTasks => [...oldTasks, {...this.state}])
    }
    render() {
        return (
            <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo:
                    </label>
                    <input
                        type="text"
                        name='tarefa'
                        id='tarefa'
                        value={this.state.taskName}
                        onChange={event => this.setState({...this.state, taskName: event.target.value})}
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
                        value={this.state.time}
                        onChange={event => this.setState({...this.state, time: event.target.value})}
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
}

export default StudyForm;