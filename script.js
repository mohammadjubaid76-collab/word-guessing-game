// Array of words and hints
const words = [
    { word: "JAVASCRIPT", hint: "A scripting language for web pages." },
    { word: "PROGRAMMING", hint: "The process of writing computer code." },
    { word: "KEYBOARD", hint: "Used for typing text into a computer." },
    { word: "ALGORITHM", hint: "A set of rules to be followed in calculations." },
    { word: "VARIABLE", hint: "A storage location for data." },
    { word: "HTML", hint: "Hyper Text Markup Language."},
    { word: "CSS", hint: "Cascading Style Sheet."},
    { word: "WWW", hint: "World Wide Web."},
    { word: "INDIA", hint: "Has Democratic country" },
    { word: "AGRA", hint: "Located in a Taj Mahal"},
    { word: "COLLAGE", hint: "Place where students study" },
    { word: "APPLE", hint: "A famous fruit" },
    { word: "SCHOOL", hint: " Childhood place where students study" },
    { word: "PLANET", hint: "Earth is one" },
    { word: "TIGER", hint: "National animal of India" },
    { word: "HTTP", hint: "Hyper Text transfer portocol"},
    { word: "HTTPS",hint: "hyper text transter portocol secured"},
    { word: "CHESS",hint: "it is a game of strategy and mind, requiring players to think ahead and plan their moves carefully."},
    { word: "IP",hint: "Internet portocol"},
    { word: "MS DHONI",hint: "player of cricket team India"}

];


let selectedWord = ""; // The word to be guessed
let hint = "";
let guessedLetters = []; // Array to store letters the player has guessed

// --- Initialization Functions ---

/**
 * Selects a random word and resets the game state.
 */
function initializeGame() {
    // 1. Select a random word object
    const randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex].word;
    hint = words[randomIndex].hint;
    
    // 2. Reset game variables
    guessedLetters = [];
    document.getElementById('letter-input').value = '';
    
    // 3. Update the display elements
    document.getElementById('hint-display').textContent = `Hint: ${hint}`;
    updateWordDisplay();
    updateGuessedLettersDisplay();
    updateMessage("Start guessing letters!");
}

/**
 * Generates the blank/filled word display based on current guesses.
 * e.g., if word is JAVASCRIPT and 'A' has been guessed, display J A _ A _ C R I _ T
 */
function updateWordDisplay() {
    let display = "";
    for (const letter of selectedWord) {
        if (guessedLetters.includes(letter)) {
            display += letter + " ";
        } else {
            display += "_ ";
        }
    }
    document.getElementById('word-display').textContent = display;

    // Check for win condition
    if (!display.includes("_")) {
        updateMessage(`🎉 CONGRATULATIONS! You guessed the word: ${selectedWord}!`);
        // Disable input after winning
        document.getElementById('letter-input').disabled = true;
    }
}

/**
 * Updates the list of letters the player has already guessed.
 */
function updateGuessedLettersDisplay() {
    document.getElementById('guessed-letters').textContent = guessedLetters.join(', ');
}

/**
 * Updates the interactive message box.
 * @param {string} message - The message to display.
 * @param {string} color - Optional color for the message.
 */
function updateMessage(message, color = '#007bff') {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = color;
}

// --- Game Logic Functions ---

/**
 * Handles the player's letter guess.
 */
function makeGuess() {
    const inputElement = document.getElementById('letter-input');
    // Sanitize and convert input to a single uppercase letter
    const guess = inputElement.value.toUpperCase().trim(); 
    inputElement.value = ''; // Clear the input field

    // Check if the input is a valid single letter
    if (!/^[A-Z]$/.test(guess)) {
        updateMessage("Please enter a single valid letter (A-Z).", '#ffc107');
        return;
    }

    // Check for repeated guess
    if (guessedLetters.includes(guess)) {
        updateMessage(`You already guessed the letter '${guess}'. Try a new one!`, '#ffc107');
        return;
    }

    // Add the new guess to the array
    guessedLetters.push(guess);
    
    // Check if the guess is correct
    if (selectedWord.includes(guess)) {
        updateMessage(`✅ Good guess! The letter '${guess}' is in the word!`, '#28a745');
    } else {
        updateMessage(`❌ Incorrect guess! The letter '${guess}' is NOT in the word.`, '#dc3545');
    }

    updateWordDisplay();
    updateGuessedLettersDisplay();
}

/**
 * Resets the game to start with a new word.
 */
function resetGame() {
    // Re-enable input
    document.getElementById('letter-input').disabled = false; 
    initializeGame();
}

// Start the game when the script loads
initializeGame();

// Add event listener for the Enter key on the input field
document.getElementById('letter-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        makeGuess();
    }
});