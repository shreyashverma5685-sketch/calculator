 let display = document.querySelector('.display');
        let currentInput = '';

        function updateCalculator(value) {
        currentInput += value;              // add pressed value to input
        display.textContent = currentInput; // show it on display
        }

        // function updateCalculator(value){
        //     document.querySelector('.buttons-yellow').innerHTML = ''
        // }
       
        /*
        Now letting the users to access my calcultor with their keyboard
         instead of clickings 
        */
        document.body.addEventListener('keydown', (event) => {
            // console.log(event.key);
            let key = event.key;

            // isNaN = is not a number inbuilt by js

            if (!isNaN(key)){
                updateCalculator(key);
            }   else if (key === '+' || key=== '-'|| key === '*'|| key=== '/'){
                updateCalculator(key);
            }   else if (key === '='|| key==='Enter'){
                calculate(key);
            }   else if (key === 'Backspace'){
                deleteone();
            }   else if (key === '.'){
                updateCalculator(key);
            }   else if (key === 'Delete'){
                clearDisplay();
            }


        })
            
        function calculate() {
        try {
            currentInput = eval(currentInput).toString(); // perform math
            display.textContent = currentInput;
        } catch {
            display.textContent = 'Error';  // handle invalid input
            currentInput = '';
        }
        }


        function clearDisplay(){
            currentInput='';
            display.textContent='0';
        }

        function deleteone() {
        // Remove the last character from the input string
        currentInput = currentInput.slice(0, -1);
        
        // Update the display
        display.textContent = currentInput || '0';
        }