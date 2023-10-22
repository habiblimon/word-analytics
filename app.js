// No. of word count
//No. of characters count
// Limit -> linkdin & twitter
// warning for some tags or keyword


const textAreaElement = document.querySelector(".word-counter-textarea");
const wordCounter = document.querySelector(".words");
const characterCounter = document.querySelector(".characters");
const twitterCounter = document.querySelector(".twitter");
const linkdinCounter = document.querySelector(".linkdin");

const invalidWordsList = ["payment", "list", "script"];

const wordCounterHandler = () =>{
    //input validation 
    invalidWordsList.forEach((word)=>{
        if(textAreaElement.value.includes(word)){
            alert(`you can't provive ${word} here!`);
            textAreaElement.value = textAreaElement.value.replace(word, "****");
        }
    });



    //setting number of characters
    let numberOfCharacters = textAreaElement.value.length;
    characterCounter.innerHTML = numberOfCharacters;

    //determine number of word 
    let numberOfWord = textAreaElement.value.split(" ").length;
    if(textAreaElement.value.length === 0){
        numberOfWord = 0;
    }
    wordCounter.innerHTML = numberOfWord;



    //twitter counter limit set 

    let twitterCharactersLeft = 250 - numberOfCharacters;
    twitterCounter.innerHTML = twitterCharactersLeft;

    if(twitterCharactersLeft <0){
        twitterCounter.innerHTML = 0;
        setTimeout(()=>{
            let warning = document.querySelector(".warning");
            warning.classList.add("warning-visible");

        }, 1000);

        
    }
    

    //linkedin Counter limit set 
    let linkdinCharactersLeft = 300-numberOfCharacters;
    linkdinCounter.innerHTML = linkdinCharactersLeft;
    
}

textAreaElement.addEventListener("input", wordCounterHandler);