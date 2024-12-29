document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login-button');
    const signupButton = document.getElementById('signup-button');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const closeButtons = document.querySelectorAll('.close-button');
    const airtimeForm = document.getElementById('airtime-form');
    const dataForm = document.getElementById('data-form');
    const airtimeMessage = document.getElementById('airtime-message');
    const dataMessage = document.getElementById('data-message');

    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const googleLoginButton = document.getElementById('google-login');
     const googleSignupButton = document.getElementById('google-signup');
      const appleLoginButton = document.getElementById('apple-login');
     const appleSignupButton = document.getElementById('apple-signup');

      const loginMessage = document.getElementById('login-message');
      const signupMessage = document.getElementById('signup-message');



    // Function to open modal
    function openModal(modal) {
        modal.style.display = 'block';
    }

    // Function to close modal
    function closeModal(modal) {
        modal.style.display = 'none';
    }


     // Event Listeners for Opening Modals
     if(loginButton){
         loginButton.addEventListener('click', () => openModal(loginModal));
     }

     if(signupButton){
        signupButton.addEventListener('click', () => openModal(signupModal));
     }

    // Event Listeners for Closing Modals
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        });
    });


    // Function to handle form submission and messages for the main forms
     function handleFormSubmit(event, form, messageElement, type) {
        event.preventDefault(); // Prevent default form submission

        // Simulate form processing
        const network = form.querySelector(`[name='${type}-network']`).value;
        const phone = form.querySelector(`[name='${type}-phone']`).value;
        const paymentMethod = form.querySelector(`input[name='${type}-payment-method']:checked`).value;


        let formData;
        if(type === 'airtime') {
            const amount = form.querySelector(`[name='${type}-amount']`).value;
           // Basic validation example (you would need more robust validation)
          if (!network || !phone || !amount || !paymentMethod) {
               messageElement.textContent = 'Please fill in all fields.';
              messageElement.className = 'message error';
              return;
          }
          formData = {
              network: network,
              phone: phone,
              amount: amount,
              paymentMethod: paymentMethod,
              type: type
          }

        }
        if(type === 'data') {
          const plan = form.querySelector(`[name='${type}-plan']`).value;
             // Basic validation example (you would need more robust validation)
          if (!network || !phone || !plan || !paymentMethod) {
             messageElement.textContent = 'Please fill in all fields.';
             messageElement.className = 'message error';
             return;
          }
           formData = {
              network: network,
              phone: phone,
              plan: plan,
              paymentMethod: paymentMethod,
               type: type
          }
        }

        console.log("Form Data to be sent to backend:", formData); // Simulated data to send to backend.

         // Simulate success message
         messageElement.textContent = `Purchase of ${type} was successful! Check your balance`;
        messageElement.className = 'message success';
        form.reset();
    }



      // Function to handle form submission for Login and Sign up forms
    function handleAuthSubmit(event, form, messageElement, type) {
         event.preventDefault();
          let formData;
        if(type === 'login') {
            const email = form.querySelector(`[name='login-email']`).value;
            const password = form.querySelector(`[name='login-password']`).value;

             if (!email || !password) {
               messageElement.textContent = 'Please fill in all fields.';
              messageElement.className = 'message error';
              return;
            }
             formData = {
                email: email,
                password: password,
                 type: type
              }
          }

        if (type === 'signup') {
            const email = form.querySelector(`[name='signup-email']`).value;
            const password = form.querySelector(`[name='signup-password']`).value;
            const name = form.querySelector(`[name='signup-name']`).value;


             if (!email || !password || !name) {
               messageElement.textContent = 'Please fill in all fields.';
              messageElement.className = 'message error';
              return;
            }
             formData = {
               email: email,
              password: password,
              name: name,
               type: type
            }
        }
       console.log("Form Data to be sent to backend:", formData); // Simulated data to send to backend.

       messageElement.textContent = ` ${type} successful!`;
       messageElement.className = 'message success';
        form.reset();
    }



     if(airtimeForm){
         airtimeForm.addEventListener('submit', (event) => {
             handleFormSubmit(event, airtimeForm, airtimeMessage, 'airtime');
         });
    }

    if(dataForm){
        dataForm.addEventListener('submit', (event) => {
           handleFormSubmit(event, dataForm, dataMessage, 'data');
        });
    }


   if(loginForm){
      loginForm.addEventListener('submit', (event) => {
         handleAuthSubmit(event, loginForm, loginMessage, 'login');
       });
   }

    if(signupForm){
       signupForm.addEventListener('submit', (event) => {
           handleAuthSubmit(event, signupForm, signupMessage, 'signup');
       });
   }

  if(googleLoginButton){
    googleLoginButton.addEventListener('click', ()=>{
        console.log('Google login clicked'); // TODO add google functionality
      });
  }
  if(googleSignupButton){
    googleSignupButton.addEventListener('click', ()=>{
        console.log('Google Signup clicked'); // TODO add google functionality
      });
  }
   if(appleLoginButton){
    appleLoginButton.addEventListener('click', ()=>{
        console.log('Apple Login clicked'); // TODO add apple functionality
      });
  }
  if(appleSignupButton){
      appleSignupButton.addEventListener('click', ()=>{
        console.log('Apple Signup clicked'); // TODO add apple functionality
      });
  }


});