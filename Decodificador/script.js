// Função de criptografia simples: substituição de caracteres
function encryptText() {
    const input = document.getElementById('inputText').value;
    
    // Tabela de substituição simples (exemplo)
    const substitutionTable = {
        'A': 'X', 'B': 'Y', 'C': 'Z', 'D': 'A', 'E': 'B', 'F': 'C', 
        'G': 'D', 'H': 'E', 'I': 'F', 'J': 'G', 'K': 'H', 'L': 'I',
        'M': 'J', 'N': 'K', 'O': 'L', 'P': 'M', 'Q': 'N', 'R': 'O',
        'S': 'P', 'T': 'Q', 'U': 'R', 'V': 'S', 'W': 'T', 'X': 'U',
        'Y': 'V', 'Z': 'W'
    };
    
    // Criptografa o texto substituindo caracteres
    const encrypted = input.toUpperCase().split('').map(char => {
        return substitutionTable[char] || char; // Mantém caracteres não mapeados
    }).join('');
    
    document.getElementById('outputText').value = encrypted;
}

// Função de descriptografia: substituição inversa de caracteres
function decryptText() {
    const input = document.getElementById('inputText').value;
    
    // Tabela de substituição inversa
    const substitutionTable = {
        'X': 'A', 'Y': 'B', 'Z': 'C', 'A': 'D', 'B': 'E', 'C': 'F',
        'D': 'G', 'E': 'H', 'F': 'I', 'G': 'J', 'H': 'K', 'I': 'L',
        'J': 'M', 'K': 'N', 'L': 'O', 'M': 'P', 'N': 'Q', 'O': 'R',
        'P': 'S', 'Q': 'T', 'R': 'U', 'S': 'V', 'T': 'W', 'U': 'X',
        'V': 'Y', 'W': 'Z'
    };
    
    // Descriptografa o texto substituindo caracteres
    const decrypted = input.toUpperCase().split('').map(char => {
        return substitutionTable[char] || char; // Mantém caracteres não mapeados
    }).join('');
    
    document.getElementById('outputText').value = decrypted;
}

// Função para copiar o texto para a área de transferência
function copyText() {
    const output = document.getElementById('outputText');
    output.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}

// Função para remover acentos
function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Função para garantir que o texto seja apenas maiúsculas e sem acentos
function sanitizeText() {
    const textarea = document.getElementById('inputText');
    let text = textarea.value;

    // Remove acentos
    text = removeAccents(text);

    // Converte para maiúsculas
    text = text.toUpperCase();

    // Atualiza o conteúdo do textarea
    textarea.value = text;
}
