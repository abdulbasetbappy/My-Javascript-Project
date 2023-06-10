
        // get the form and result elements
        const form = document.querySelector('form');
        const result = document.querySelector("#result");
        const userName = document.getElementById("NameEnter");
        // listen for form submissions
        form.addEventListener('submit', event => {
          event.preventDefault();
  
          // get the user's birthdate from the form input
          const birthdate = new Date(form.elements.birthdate.value);
  
          // get the current date
          const today = new Date();
  
          // calculate the user's age in years
          let ageYears = today.getFullYear() - birthdate.getFullYear();
  
          // check if the user has had their birthday this year
          const monthDiff = today.getMonth() - birthdate.getMonth();
          if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
              ageYears--;
          }
  
          // calculate the user's age in months
          let ageMonths = today.getMonth() - birthdate.getMonth();
          if (ageMonths < 0 || (ageMonths === 0 && today.getDate() < birthdate.getDate())) {
              ageMonths += 12;
          }
  
          // calculate the user's age in days
          const ageDiffMs = today.getDate() - birthdate.getDate();
          const ageDays = Math.floor(ageDiffMs);
  
          // display the result
          result.innerHTML = `Hey ${userName.value} !! You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
        });
        function fadeIn() {
            const div = document.getElementById('myDiv');
            div.style.opacity = '1';
          }