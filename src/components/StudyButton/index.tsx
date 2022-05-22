import React from 'react';
import style from '../../styles/studyButton.module.scss';

class StudyButton extends React.Component<{children: any} > {
    render() {
        return(
            <button className={style.studyButton}>
                {this.props.children}
            </button>
        )
    }
}

export default StudyButton;