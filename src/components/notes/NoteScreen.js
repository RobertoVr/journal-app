import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes);

    const [formValues, handleInputChange, reset] = useForm(note);
    const { title, body } = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id
        }
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch])

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    autoComplete="off"
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder="what happened today"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>
                {
                    (note.url) &&
                    <div className="notes__images">
                        <img
                            alt="imagen"
                            src="https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1"
                        ></img>
                    </div>
                }
            </div>
        </div>
    )
}
