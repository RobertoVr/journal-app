import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'
import { startDeleting, startLoadingNotes, startNewNote, startSaveNotes, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { fileUpload } from '../../helpers/fileUpload';
import { types } from '../../types/types';

jest.mock('../../helpers/fileUpload', () => (
    {
        fileUpload: jest.fn(() => {
            return 'http://test.com/ajoajs.jpf';
        })
    }
));


const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const initState = {
    auth: {
        uid: 'TEST'
    },
    notes: {
        active: {
            id: 'AXZogtxJ698beSJRk57c',
            title: 'hola',
            body: 'mundo'
        }
    }
};

let store = mockStore(initState)

describe('Pruebas en notes', () => {
    beforeEach(() => {
        store = mockStore(initState);
    });
    test('Debe de crear una nueva nota en startNewNote', async () => {
        await store.dispatch(startNewNote());
        const actions = store.getActions();
        // console.log(actions)
        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });
        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });
        const docId = actions[0].payload.id;
        await db.doc(`TEST/journal/notes/${docId}`).delete();
    });
    test('Debe cargar las notas startLoadingNotes', async () => {
        await store.dispatch(startLoadingNotes('TEST'));
        const actions = store.getActions();
        console.log(actions)
        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });
        const expected = {
            id: expect.any(Number),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        }
        expect(actions[0].payload[0]).toMatchObject(expected);
    });
    test('Debe de actualizar la nota startSaveNotes', async () => {
        const note = {
            id: 'AXZogtxJ698beSJRk57c',
            title: 'titulo',
            body: 'body'
        };
        await store.dispatch(startSaveNotes(note));
        const actions = store.getActions();

        expect(actions[0].type).toBe(types.notesUpdated);
        const docRef = await db.doc(`/TEST/journal/notes/${note.id}`).get();
        expect(docRef.data().title).toBe(note.title);
    });
    test('Debe de actualizar el url de la nota startUploading', async () => {
        const file = new File([], 'foto.jpg');
        await store.dispatch(startUploading(file));
        const docRef = await db.doc(`/TEST/journal/notes/AXZogtxJ698beSJRk57c`).get();
        expect(docRef.data().url).toBe('http://test.com/ajoajs.jpf');
    });

});