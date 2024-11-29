// Validation utilities
export const isValidName = (name: string): boolean => {
  return /^[A-Za-zÀ-ÿ\s]*$/.test(name);
};

export const isValidNumber = (number: string): boolean => {
  return /^\d*$/.test(number);
};

export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const getFieldError = (field: string, value: string): string | null => {
  switch (field) {
    case 'firstName':
    case 'secondName':
    case 'firstLastName':
    case 'secondLastName':
      return !isValidName(value) ? 'Este campo solo puede contener letras' : null;
    case 'documentNumber':
    case 'phone':
      return !isValidNumber(value) ? 'Este campo solo puede contener números' : null;
    case 'email':
      return !isValidEmail(value) ? 'Por favor ingrese un correo electrónico válido que incluya el símbolo "@" y un dominio' : null;
    default:
      return null;
  }
};