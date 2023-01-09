const itemsList = [
    'Latte',
    'Cereali',
    'Pane',
    'Pasta',
    'Sughi Pronti',
    'Acqua',
    'Tonno'
]

const container = document.getElementById('my_list');


let i = 0;

while ( i < itemsList.length) {

    container.innerHTML += `<li>${itemsList[i]}</li>`;
    
       console.log(itemsList[i]); 
    i++
   
}



