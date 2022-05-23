import React from 'react';
import style from '../../styles/studyButton.module.scss';

class StudyButton extends React.Component<{
    children: any,
    type?: "button"|"submit"|"reset"| undefined,
    onClick?: () => void
}> {
    render() {
        const { type = "button", onClick } = this.props;

        return(
            <button onClick={onClick} type={type} className={style.studyButton}>
                {this.props.children}
            </button>
        )
    }
}

export default StudyButton;