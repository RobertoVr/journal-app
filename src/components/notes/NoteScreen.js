import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input autoComplete="off" type="text" placeholder="Some awesome title" className="notes__title-input" />
                <textarea
                    placeholder="what happened today"
                    className="notes__textarea"
                ></textarea>
                <div className="notes__images">
                    <img alt="imagen" src="https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1"></img>
                </div>
            </div>
        </div>
    )
}
