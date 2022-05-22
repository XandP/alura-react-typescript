import React from 'react';
import style from '../../styles/studyButton.module.scss';

class StudyButton extends React.Component<{
    children: any,
    type?: "button"|"submit"|"reset"| undefined
}> {
    render() {
        const { type = "button" } = this.props;
        return(
            <button type={type} className={style.studyButton}>
                {this.props.children}
            </button>
        )
    }
}

export default StudyButton;