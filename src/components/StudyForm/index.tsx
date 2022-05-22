import React from 'react';
import StudyButton from '../StudyButton';
import style from '../../styles/studyForm.module.scss';

class StudyForm extends React.Component {
    render() {
        return (
            <form className={style.newTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo:
                    </label>
                    <input type="text" name='tarefa' id='tarefa' placeholder='O que você quer estudar?' required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="">
                        Tempo restante:
                    </label>
                    <input className='inputContainer' type="time" step='1' name='tempo' id='tempo' min='00:00:00' max='01:30:00' required/>
                </div>

                <StudyButton>Adicionar</StudyButton>
            </form>
        )
    }
}

export default StudyForm;