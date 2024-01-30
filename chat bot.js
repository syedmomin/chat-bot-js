// Define responses for different inputs
const responses = {
  "hi": "Hello! How can I help you today?",
  "how are you": "I'm doing well, thank you for asking.",
  "bye": "Goodbye! Have a great day!",
  "default": "I'm sorry, I didn't understand that. Can you please repeat?"
};

// Function to get response based on input
function getResponse(input) {
  input = input.toLowerCase().trim(); // Convert input to lowercase and remove whitespace
  return responses[input] || responses["default"]; // Return response based on input or default response
}

// Function to simulate conversation
function chat() {
  let userInput = prompt("Hi there! What would you like to talk about?"); // Prompt user for input
  while (userInput !== "bye") { // Continue conversation until user says "bye"
    let response = getResponse(userInput); // Get response based on user input
    alert(response); // Show response to user
    userInput = prompt("What else would you like to talk about?"); // Prompt user for next input
  }
  alert(getResponse("bye")); // Say goodbye when user ends conversation
}

// Start the conversation
chat();
