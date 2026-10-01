// ======================================
// SELECT ELEMENTS
// ======================================

const signupForm =
    document.querySelector("#signup-form");

const fullNameInput =
    document.querySelector("#full-name");

const emailInput =
    document.querySelector("#email");

const phoneInput =
    document.querySelector("#phone");

const roleInput =
    document.querySelector("#role");

const passwordInput =
    document.querySelector("#password");

const passwordToggle =
    document.querySelector("#password-toggle");

const strengthProgress =
    document.querySelector("#strength-progress");

const strengthText =
    document.querySelector("#strength-text");

const aboutInput =
    document.querySelector("#about");

const aboutCount =
    document.querySelector("#about-count");

const termsInput =
    document.querySelector("#terms");

const successMessage =
    document.querySelector("#success-message");

const themeToggle =
    document.querySelector("#theme-toggle");


// ======================================
// ERROR ELEMENTS
// ======================================

const nameError =
    document.querySelector("#name-error");

const emailError =
    document.querySelector("#email-error");

const phoneError =
    document.querySelector("#phone-error");

const roleError =
    document.querySelector("#role-error");

const passwordError =
    document.querySelector("#password-error");

const termsError =
    document.querySelector("#terms-error");


// ======================================
// HELPER FUNCTIONS
// ======================================

function setError(input, errorElement, message) {

    const field =
        input.closest(".field");

    field.classList.add("has-error");
    field.classList.remove("has-success");

    errorElement.textContent =
        message;

    input.setAttribute(
        "aria-invalid",
        "true"
    );
}


function setSuccess(input, errorElement) {

    const field =
        input.closest(".field");

    field.classList.remove("has-error");
    field.classList.add("has-success");

    errorElement.textContent = "";

    input.setAttribute(
        "aria-invalid",
        "false"
    );
}


function clearValidation(
    input,
    errorElement
) {

    const field =
        input.closest(".field");

    field.classList.remove(
        "has-error",
        "has-success"
    );

    errorElement.textContent = "";

    input.removeAttribute(
        "aria-invalid"
    );
}


// ======================================
// NAME VALIDATION
// ======================================

function validateName() {

    const value =
        fullNameInput.value.trim();

    if (value === "") {

        setError(
            fullNameInput,
            nameError,
            "Please enter your full name."
        );

        return false;
    }

    if (value.length < 2) {

        setError(
            fullNameInput,
            nameError,
            "Name must contain at least 2 characters."
        );

        return false;
    }

    setSuccess(
        fullNameInput,
        nameError
    );

    return true;
}


// ======================================
// EMAIL VALIDATION
// ======================================

function validateEmail() {

    const value =
        emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {

        setError(
            emailInput,
            emailError,
            "Please enter your email address."
        );

        return false;
    }

    if (!emailPattern.test(value)) {

        setError(
            emailInput,
            emailError,
            "Please enter a valid email address."
        );

        return false;
    }

    setSuccess(
        emailInput,
        emailError
    );

    return true;
}


// ======================================
// PHONE VALIDATION
// ======================================

function validatePhone() {

    const value =
        phoneInput.value.trim();

    // Phone is optional

    if (value === "") {

        clearValidation(
            phoneInput,
            phoneError
        );

        return true;
    }

    const phonePattern =
        /^[0-9+\-\s()]{10,18}$/;

    if (!phonePattern.test(value)) {

        setError(
            phoneInput,
            phoneError,
            "Please enter a valid phone number."
        );

        return false;
    }

    setSuccess(
        phoneInput,
        phoneError
    );

    return true;
}


// ======================================
// ROLE VALIDATION
// ======================================

function validateRole() {

    if (roleInput.value === "") {

        setError(
            roleInput,
            roleError,
            "Please select your role."
        );

        return false;
    }

    setSuccess(
        roleInput,
        roleError
    );

    return true;
}


// ======================================
// PASSWORD VALIDATION
// ======================================

function validatePassword() {

    const value =
        passwordInput.value;

    if (value === "") {

        setError(
            passwordInput,
            passwordError,
            "Please create a password."
        );

        return false;
    }

    if (value.length < 8) {

        setError(
            passwordInput,
            passwordError,
            "Password must contain at least 8 characters."
        );

        return false;
    }

    if (!/[A-Za-z]/.test(value)) {

        setError(
            passwordInput,
            passwordError,
            "Password must contain at least one letter."
        );

        return false;
    }

    if (!/[0-9]/.test(value)) {

        setError(
            passwordInput,
            passwordError,
            "Password must contain at least one number."
        );

        return false;
    }

    setSuccess(
        passwordInput,
        passwordError
    );

    return true;
}


// ======================================
// PASSWORD STRENGTH
// ======================================

function updatePasswordStrength() {

    const password =
        passwordInput.value;

    let strength = 0;

    if (password.length >= 8) {
        strength++;
    }

    if (/[A-Z]/.test(password)) {
        strength++;
    }

    if (/[a-z]/.test(password)) {
        strength++;
    }

    if (/[0-9]/.test(password)) {
        strength++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        strength++;
    }


    if (password.length === 0) {

        strengthProgress.style.width =
            "0%";

        strengthText.textContent =
            "Enter a password";

        return;
    }


    if (strength <= 2) {

        strengthProgress.style.width =
            "30%";

        strengthText.textContent =
            "Weak";

    } else if (strength === 3) {

        strengthProgress.style.width =
            "55%";

        strengthText.textContent =
            "Fair";

    } else if (strength === 4) {

        strengthProgress.style.width =
            "78%";

        strengthText.textContent =
            "Good";

    } else {

        strengthProgress.style.width =
            "100%";

        strengthText.textContent =
            "Strong";
    }
}


// ======================================
// SHOW / HIDE PASSWORD
// ======================================

passwordToggle.addEventListener(
    "click",
    function () {

        const isPassword =
            passwordInput.type === "password";


        if (isPassword) {

            passwordInput.type =
                "text";

            passwordToggle.textContent =
                "Hide";

            passwordToggle.setAttribute(
                "aria-label",
                "Hide password"
            );

        } else {

            passwordInput.type =
                "password";

            passwordToggle.textContent =
                "Show";

            passwordToggle.setAttribute(
                "aria-label",
                "Show password"
            );
        }
    }
);


// ======================================
// CHARACTER COUNTER
// ======================================

aboutInput.addEventListener(
    "input",
    function () {

        const length =
            aboutInput.value.length;

        aboutCount.textContent =
            `${length} / 300`;
    }
);


// ======================================
// TERMS VALIDATION
// ======================================

function validateTerms() {

    if (!termsInput.checked) {

        termsError.textContent =
            "Please accept the terms to continue.";

        termsInput.setAttribute(
            "aria-invalid",
            "true"
        );

        return false;
    }

    termsError.textContent = "";

    termsInput.setAttribute(
        "aria-invalid",
        "false"
    );

    return true;
}


// ======================================
// REAL-TIME VALIDATION
// ======================================

fullNameInput.addEventListener(
    "blur",
    validateName
);

emailInput.addEventListener(
    "blur",
    validateEmail
);

phoneInput.addEventListener(
    "blur",
    validatePhone
);

roleInput.addEventListener(
    "change",
    validateRole
);

passwordInput.addEventListener(
    "blur",
    validatePassword
);

passwordInput.addEventListener(
    "input",
    updatePasswordStrength
);

termsInput.addEventListener(
    "change",
    validateTerms
);


// ======================================
// FORM SUBMISSION
// ======================================

signupForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const nameValid =
            validateName();

        const emailValid =
            validateEmail();

        const phoneValid =
            validatePhone();

        const roleValid =
            validateRole();

        const passwordValid =
            validatePassword();

        const termsValid =
            validateTerms();


        const formIsValid =
            nameValid &&
            emailValid &&
            phoneValid &&
            roleValid &&
            passwordValid &&
            termsValid;


        if (!formIsValid) {

            const firstInvalid =
                signupForm.querySelector(
                    '[aria-invalid="true"]'
                );

            if (firstInvalid) {
                firstInvalid.focus();
            }

            return;
        }


        // ==================================
        // SUCCESS
        // ==================================

        successMessage.hidden =
            false;

        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });


        // Reset form

        signupForm.reset();

        clearValidation(
            fullNameInput,
            nameError
        );

        clearValidation(
            emailInput,
            emailError
        );

        clearValidation(
            phoneInput,
            phoneError
        );

        clearValidation(
            roleInput,
            roleError
        );

        clearValidation(
            passwordInput,
            passwordError
        );


        termsError.textContent = "";

        passwordInput.type =
            "password";

        passwordToggle.textContent =
            "Show";

        passwordToggle.setAttribute(
            "aria-label",
            "Show password"
        );

        strengthProgress.style.width =
            "0%";

        strengthText.textContent =
            "Enter a password";

        aboutCount.textContent =
            "0 / 300";


        // Hide success message after a few seconds

        setTimeout(
            function () {

                successMessage.hidden =
                    true;

            },
            5000
        );
    }
);


// ======================================
// DARK MODE
// ======================================

const savedTheme =
    localStorage.getItem(
        "accessibleFormTheme"
    );


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark-mode"
    );

    themeToggle.textContent =
        "☀";

    themeToggle.setAttribute(
        "aria-label",
        "Switch to light mode"
    );
}


// ======================================
// THEME TOGGLE
// ======================================

themeToggle.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark-mode"
        );

        const isDark =
            document.body.classList.contains(
                "dark-mode"
            );


        if (isDark) {

            themeToggle.textContent =
                "☀";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

            localStorage.setItem(
                "accessibleFormTheme",
                "dark"
            );

        } else {

            themeToggle.textContent =
                "☾";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

            localStorage.setItem(
                "accessibleFormTheme",
                "light"
            );
        }
    }
);