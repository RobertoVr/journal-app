import cloudinary from 'cloudinary';
import '@testing-library/jest-dom';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({
    cloud_name: 'rvrobo',
    api_key: '788697941863678',
    api_secret: 'HUqyt1CVVY9m7atsCxtBzWy3Cd0'
});

describe('Pruebas en fileUpload', () => {
    test('Debe cargar el archivo y retornar el URL', async () => {
        const resp = await fetch('data:image/jpeg;base64,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');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);
        console.log(url);
        expect(typeof url).toBe('string');

        // borrar image por id
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');
        console.log(imageId);
        await cloudinary.v2.api.delete_resources(imageId, {}, () => { });
    });
    test('Debe de retornar un error', async () => {
        const file = new File([], 'foto.png');
        const url = await fileUpload(file);
        expect(url).toBe(null);
    });


});