import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import './Modal.css';

const Modal = ({ isVisible = true,
                   title = 'Title',
                   content = 'Content',
                   onClose,
                   onRestart }) => {

    const onKeydown = (key) => {
        switch (key) {
            case 'Escape':
                onClose()
                break
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    if (!isVisible) return null

    return (
        <div className='modal' onClick={onClose}>
            <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h3 className='modal-title'>{title}</h3>
                    <span className='modal-close' onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className='modal-body'>
                    <div className='modal-content'>{content}</div>
                </div>
                <div className='modal-footer'>
                    <button onClick={onRestart}>Новая игра</button>
                </div>
            </div>
        </div>
    )

}

Modal.propTypes = {
    isVisible: PropTypes.bool,
    title: PropTypes.string,
    content: PropTypes.string,
    onClose: PropTypes.func,
}

export default Modal;