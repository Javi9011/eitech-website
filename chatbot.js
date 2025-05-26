let chatOpen = false;

function toggleChat() {
    const chat = document.getElementById('chat-widget');
    chat.classList.toggle('visible');
    chatOpen = !chatOpen;
}

function closeChat() {
    const chat = document.getElementById('chat-widget');
    chat.classList.remove('visible');
    chatOpen = false;
}

function sendMessage() {
    const input = document.getElementById('user-message');
    const message = input.value.trim();

    if (message) {
        addMessage(message, 'user');
        input.value = '';
        processMessage(message);
    }
}

function addMessage(text, sender) {
    const messages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = text;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

function processMessage(message) {
    // Mensaje de respuesta animado
    const typingMessage = "Escribiendo...";
    addMessage(typingMessage, 'bot');
    
    setTimeout(() => {
        const response = "¡Hola! Tu mensaje ha sido recibido. ¿Cómo podemos ayudarte hoy?";
        const messages = document.getElementById('chat-messages');
        const lastMessage = messages.lastElementChild;
        lastMessage.textContent = response;
        
        // Redirigir a WhatsApp después de un breve retraso
        setTimeout(() => {
            window.open(`https://wa.me/573204797737?text=${encodeURIComponent(message)}`, '_blank');
        }, 1000);
    }, 1500);
}

// Abrir chat con un mensaje de bienvenida cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = "¡Bienvenido al chat de Eitech! ¿Cómo podemos ayudarte hoy?";
    addMessage(welcomeMessage, 'bot');
});

// Manejar envío de mensaje al presionar Enter
document.getElementById('user-message').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
