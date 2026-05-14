const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+~|}{[]:;?><,./-=';

const display = document.getElementById('password-display');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const lengthSlider = document.getElementById('length-slider');
const lengthValue = document.getElementById('length-value');
const strengthBar = document.getElementById('strength-bar');
const toast = document.getElementById('toast');

const checkboxes = {
    uppercase: document.getElementById('uppercase'),
    lowercase: document.getElementById('lowercase'),
    numbers: document.getElementById('numbers'),
    symbols: document.getElementById('symbols')
};

/**
 * Gera uma senha criptograficamente segura.
 */
function generatePassword() {
    const length = parseInt(lengthSlider.value);
    let charset = '';
    
    if (checkboxes.uppercase.checked) charset += UPPERCASE;
    if (checkboxes.lowercase.checked) charset += LOWERCASE;
    if (checkboxes.numbers.checked) charset += NUMBERS;
    if (checkboxes.symbols.checked) charset += SYMBOLS;

    if (!charset) {
        display.value = '';
        updateStrength(0);
        return;
    }

    // CSPRNG
    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);

    let password = '';
    for (let i = 0; i < length; i++) {
        // Usar operador de módulo para mapear bytes aleatórios para o charset
        password += charset[randomValues[i] % charset.length];
    }

    display.value = password;
    calculateStrength(password);
}

/**
 * Calcula a força da senha baseada em comprimento e variedade.
 */
function calculateStrength(password) {
    if (!password) return updateStrength(0);
    
    let strength = 0;
    
    // Bônus por comprimento
    strength += Math.min(password.length * 3, 40); 
    
    // Bônus por diversidade
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[^A-Za-z0-9]/.test(password);
    
    const typesCount = [hasUpper, hasLower, hasNumbers, hasSymbols].filter(Boolean).length;
    strength += (typesCount * 15);
    
    updateStrength(Math.min(strength, 100));
}

/**
 * Atualiza visualmente a barra de força.
 */
function updateStrength(percent) {
    strengthBar.style.width = `${percent}%`;
    
    if (percent < 40) {
        strengthBar.style.backgroundColor = '#ef4444'; // Red
    } else if (percent < 75) {
        strengthBar.style.backgroundColor = '#f59e0b'; // Amber
    } else {
        strengthBar.style.backgroundColor = '#10b981'; // Green
    }
}

/**
 * Copia a senha para a área de transferência.
 */
async function copyToClipboard() {
    if (!display.value) return;
    
    try {
        await navigator.clipboard.writeText(display.value);
        showToast();
    } catch (err) {
        console.error('Falha ao copiar:', err);
    }
}

/**
 * Exibe notificação temporária.
 */
function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Event Listeners
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
    generatePassword();
});

Object.values(checkboxes).forEach(cb => {
    cb.addEventListener('change', () => {
        // Impedir desmarcar todos
        const checkedCount = Object.values(checkboxes).filter(c => c.checked).length;
        if (checkedCount === 0) {
            cb.checked = true;
            return;
        }
        generatePassword();
    });
});

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyToClipboard);

// Inicialização
generatePassword();
