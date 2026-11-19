const quotes=[
    {
        quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author:"— Thomas A. Edison",
        mood:"success"
    },
    {
        quote:"It does not matter how slowly you go as long as you do not stop.",
        author:"— Confucius",
        mood:"success"

    },
    {
        quote:"A father’s goodness is higher than the mountains, a mother’s goodness is deeper than the sea.",
        author:"— Japanese Proverb",
        mood:"love"
    },
    {
        quote:"We never know the love of a parent till we become parents ourselves.",
        author:"— Henry Ward Beecher",
        mood:"love"
    },
    {
        quote:"Do one thing every day that scares you.",
        author:"— Eleanor Roosevelt",
        mood:"motivational"
    },
    {
        quote:"The only way to do great work is to love what you do.",
        author:"— Steve Jobs",
        mood:"motivational"
    },
    {
        quote:"Opportunities don't happen. You create them.",
        author:"— Chris Grosser",
        mood:"motivational"
    },
    {
        quote:"Don't watch the clock; do what it does. Keep going.",
        author:"— Sam Levenson",
        mood:"success"
    }
];
const author=document.getElementById("author");
const quote=document.getElementById("quote");
const btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    let randomeindex=Math.floor(Math.random()*quotes.length);
    if(quotes[randomeindex].mood=="motivational")
    {
        document.body.style.backgroundColor="#4f46e5";
    }
    if(quotes[randomeindex].mood=="success")
    {
        document.body.style.backgroundColor="gold";
    }
    if(quotes[randomeindex].mood=="love")
    {
        document.body.style.backgroundColor="#ec4899";
    }
    quote.innerText='"'+quotes[randomeindex].quote+'"';
    author.innerText=quotes[randomeindex].author;

});