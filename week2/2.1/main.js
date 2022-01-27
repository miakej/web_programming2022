let favShows = ['Parks and Rec', ' Schitts Creek', ' Broad City', ' The Office', ' Freaks and Geeks']
console.log('these shows are great ', favShows);

const yourFav = window.prompt('What is your favorite TV show?');
window.alert('thats a great show!');

console.log ('your favorite tv show is', yourFav);
favShows.push(yourFav);
console.log('our favorite shows are ', favShows.toString());

window.alert(favShows.toString());