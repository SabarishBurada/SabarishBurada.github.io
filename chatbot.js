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
    if (msg.includes('hello') || msg.includes('hi')) return "Hi there! How can I help you?";
    if (msg.includes('your name')) return "I'm your personal AI chatbot!";
    if (msg.includes('bye')) return "Goodbye! Have a great day!";
    if (msg.includes('how are you')) return "I'm just a bunch of code, but I'm doing great!";
    if (msg.includes('what can you do')) return "I can respond to simple messages. I'm still learning!";
    if (msg.includes('who created you')) return "I was created by Sabarish, the future Ivy Leaguer!";
    if (msg.includes('help')) return "Try asking me about my name, how I am, or say hello!";
  
    return "Sorry, I didn't understand that.";
  }
  