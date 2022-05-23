import React from 'react';
import style from '../../styles/studyButton.module.scss';

interface Props {
    children?: React.ReactNode
    type?: "button"|"submit"|"reset"| undefined,
    onClick?: () => void
}

export default function StudyButton({ type, onClick, children }: Props) {
    return(
        <button
            onClick={onClick}
            type={type}
            className={style.studyButton}
        >
            {children}
        </button>
    )
}