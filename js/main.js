var words = [
    {
     writer:'Jim Rohn',
     quote: 'Beware of what you become in pursuit of what you want.'   
    },
    {
     writer: 'Epictetus', 
     quote: 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
     writer: 'Frank Sinatra', 
     quote: 'The best revenge is massive success.'
    },
    {
     writer: 'Wayne Gretzy', 
     quote: 'You miss 100% of the shots you don\'t take.'
    },
    {
     writer: 'Nelson Mandela', 
     quote: 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
     writer: 'Elbert Hubbard', 
     quote: 'Do not take life too seriously. You will not get out alive.'
    },
];

function show(){
        var x = Number ( Math.floor(Math.random() * words.length)) ;
        document.getElementById("demo").innerHTML=(words[x].quote);
        document.getElementById("demo1").innerHTML=(words[x].writer);
}
