// Add your custom JavaScript for storefront pages here.
const nameIf = window.ecomPassport.customer ? window.ecomPassport.customer.display_name : ''
document.getElementById('nameIf').innerHTML = 'Olá ' + nameIf
