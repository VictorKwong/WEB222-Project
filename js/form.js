const result = document.getElementById('result-form')

const thanks = document.createElement('h2');
thanks.innerHTML = "Thanks for the feedback on your experience with our customer support team.";
thanks.classList.add("nameThanks");
result.appendChild(thanks);


new URLSearchParams(window.location.search).forEach((value,names) => {
    if(`${names}` === 'names' ){
        const memory = document.createElement('p');
        memory.innerHTML = "Hello " + value + ",";
        memory.classList.add("nameGreeting");
        result.appendChild(memory);
    }
    if(`${names}` === 'email' ){
        const memory = document.createElement('p');
        memory.innerHTML = "Please check below to verify your email address with Forgotten Hymns: ";
        memory.classList.add("nameTitle");
        result.appendChild(memory);
        const memoryTwo = document.createElement('p');
        memoryTwo.innerHTML = value;
        memoryTwo.classList.add("nameEmail");
        result.appendChild(memoryTwo);
    }
    if(`${names}` === 'phone' ){
        const memory = document.createElement('p');
        memory.innerHTML = "2-Step Verification phone number: " + value;
        memory.classList.add("nameTitle");
        result.appendChild(memory);
    }
    if(`${names}` === 'comment' ){
        const memory = document.createElement('p');
        memory.innerHTML = "Feedback:";
        memory.classList.add("nameTitle");
        result.appendChild(memory);
        const memoryTwo = document.createElement('p');
        memoryTwo.innerHTML = value;
        memoryTwo.classList.add("nameMessage");
        result.appendChild(memoryTwo);
    }
})

const returnMemory = document.createElement('a');
returnMemory.href= "./Feedback.html"
// returnMemory.classList.add("nameReturn");
const returnMemoryTwo = document.createElement('div');
returnMemoryTwo.innerHTML = "Back to Feedback";
returnMemoryTwo.classList.add("nameReturn");
returnMemory.appendChild(returnMemoryTwo);
result.appendChild(returnMemory);