function generateBtn() {
    function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()-_=+[]{};:'\"<>,.?/";

        let allowedChars = "";
        let password = "";

        allowedChars += includeLowercase ? lowercaseChars : "";
        allowedChars += includeUppercase ? uppercaseChars : "";
        allowedChars += includeNumbers ? numberChars : "";
        allowedChars += includeSymbols ? symbolChars : "";

        if (length <= 0) {
            return "Password length must be at least 1";
        }

        if (allowedChars.length === 0) {
            return "At least 1 of the options need to be selected";
        }

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }

        return password;
    }

    const passwordLength = document.getElementById("length").value;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    const passwordText = document.getElementById("password");

    const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    passwordText.value = password;
}

function updateLengthDisplay() {
    const lengthInput = document.getElementById("length");
    const lengthDisplay = document.getElementById("lengthDisplay");
    lengthDisplay.textContent = lengthInput.value; // Update the displayed length
}

