import '@testing-library/jest-dom';
import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {
    test('Debe de realizar el login', () => {
        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: 123,
                displayName: 'Test'
            }
        };
        const state = authReducer(initState, action);
        expect(state).toEqual({ uid: 123, name: 'Test' });
    });
    test('Debe de realizar el logout', () => {
        const initState = {
            uid: 123, name: 'Test'
        };
        const action = {
            type: types.logout
        };
        const state = authReducer(initState, action);
        expect(state).toEqual({});
    });
    test('Debe de retornar el state por default', () => {
        const initState = {
            uid: 123, name: 'Test'
        };
        const action = {
            type: 'types.logout'
        };
        const state = authReducer(initState, action);
        expect(state).toEqual(initState);
    });

});