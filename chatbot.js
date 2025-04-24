function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value;
    if (!message) return;
  
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
  
    let reply = getReply(message.toLowerCase());
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${reply}</p>`;
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function getReply(msg) {
    if (msg.includes('hello')) return "Hi there!";
    if (msg.includes('your name')) return "I'm your friendly chatbot!";
    if (msg.includes('bye')) return "Goodbye!";
    return "Sorry, I didn't understand that.";
  }
  