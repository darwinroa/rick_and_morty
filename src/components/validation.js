const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,10}$/;

export default function validation(data) {
    const errors = {};
    if (!data.username) errors.username = 'El nombre de usuario no puede estar vacío.';
    else if (!data.username.length > 35) errors.username = 'El nombre de usuario no puede tener más de 35 caracteres.';
    else if (!regexEmail.test(data.username)) errors.username = 'El nombre de usuario tiene que ser un email';
    if (!data.password) errors.password = 'El password no puede estar vacío.';
    else if (!regexPassword.test(data.password)) errors.password = 'El password debe tener una longitud entre 6 y 10 caracteres y al menos un número';
    return errors;
}