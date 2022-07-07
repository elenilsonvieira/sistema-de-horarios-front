import toastr from 'toastr';

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": undefined,
    "showDuration": 300,
    "hideDuration": 1000,
    "timeOut": 5000,
    "extendedTimeOut": 1000,
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

export const showMessage = (title, message, type) => {
    toastr[type](message, title);
}

export function successMessage(message) {
    showMessage('Sucesso!', message, 'success');
}

export function errorMessage(message) {
    showMessage('Erro', message, 'error');
}