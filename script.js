var emailInput = document.getElementById('email');
        var emailError = document.getElementById('emailError');
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        function validateEmail() {
            var email = emailInput.value.trim();

            if (!email) {
                // If email is empty, remove error class and clear error message
                emailInput.classList.remove('error');
                emailError.textContent = '';
            } else if (!emailPattern.test(email)) {
                emailError.textContent = 'Valid email required';
                emailInput.classList.add('error');
            } else {
                emailError.textContent = '';
                emailInput.classList.remove('error');
                document.querySelector('main').classList.add('hidden');
                document.querySelector('.success').classList.remove('hidden');

                var message = document.getElementById('message');
                message.innerHTML = 'A confirmation email has been sent to <strong class="dark-slate-grey">' + email + '</strong>. Please open it and click the button inside to confirm your subscription.' ;
            }
        }

        document.getElementById('emailForm').addEventListener('submit', function (event) {
            if (!validateEmail()) {
                event.preventDefault(); // Prevent form submission if email validation fails
            }
        });

        function validateInput() {
            var email = emailInput.value.trim();

            if (!email) {
                // If email is empty, remove error class and clear error message
                emailInput.classList.remove('error');
                emailError.textContent = '';
            } else if (!emailPattern.test(email)) {
                emailError.textContent = 'Valid email required';
                emailInput.classList.add('error');
            } else {
                emailError.textContent = '';
                emailInput.classList.remove('error');
        }}

        // Add event listener for the 'input' event on the email input field
        emailInput.addEventListener('input', function (event) {
            validateInput();
        });

        document.getElementById('dismiss').addEventListener('click', function() {
                document.querySelector('main').classList.remove('hidden');
                document.querySelector('.success').classList.add('hidden');
                document.getElementById('errorMessage').classList.add('hidden');
            });