import StudyButton from '../StudyButton';
import Clock from './Clock';
import Style from '../../styles/studyCronometer.module.scss';

export default function StudyCronometer() {
    return(
        <div className={Style.cronometer}>
            <p className={Style.title}>Escolha um card e inicie o cronômetro.</p>
            <div className={Style.clockWrapper}>
                <Clock />
            </div>
            <StudyButton>
                Começar!
            </StudyButton>
        </div>
    )
}