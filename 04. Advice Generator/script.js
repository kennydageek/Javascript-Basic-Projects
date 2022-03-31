// DOM Variables

let btn = document.querySelector('.container-button');
let adviceID = document.querySelector('.advice-id');
let quote = document.querySelector('.container-body__quote');


// Fetching Advice

fetchAdvice = async function() {
        try {
        const res = await fetch('https://api.adviceslip.com/advice');
        
        // handling response error
        if(!res.ok) {
                throw new Error(`Something went wrong (${res.status})`)
        }
            
        const data = await res.json();

        adviceID.textContent = data.slip.id
        quote.textContent = data.slip.advice
        }catch {
                quote.textContent = "Something went wrong please try again"
                quote.style.color ='yellowgreen';
                quote.style.fontSize = '1.6rem';
        }
    }

// Fetching advice upon refresh
window.addEventListener('DOMContentLoaded', function() {
        fetchAdvice();
})

// Click functionality
btn.addEventListener('click', function() {
     fetchAdvice();   
});