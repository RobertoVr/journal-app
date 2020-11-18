import '@testing-library/jest-dom';
import { types } from '../../types/types';

describe('Pruebas en types', () => {
    const typesTest = {
        login: '[Auth] Login',
        logout: '[Auth] Logout',


        uiSetError: '[UI] set error',
        uiRemoveSetError: '[UI] remove error',

        uiStartLoading: '[UI] Start loading',
        uiFinishLoading: '[UI] Finish loading',

        notesAddNew: '[Notes] New note',
        notesActive: '[Notes] Set active note',
        notesLoad: '[Notes] Load notes',
        notesUpdated: '[Notes] Updated notes',
        notesFileUrl: '[Notes] Update image url',
        notesDelete: '[Notes] Delete note',
        notesLogoutCleaning: '[Notes] Logout Cleaning',

    };

    test('Types debe ser igual', () => {
        expect(types).toEqual(typesTest);
    });
});

