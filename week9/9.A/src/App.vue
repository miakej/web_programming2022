<script setup>
     import { reactive } from 'vue';
     
    const vinyls =  [
            {   
                cover: "src/covers/marvin-gaye.jpg",
                artist: "Marvin Gaye",
                album: "What's Going On",
                year: "1971",
                owned: "yes",
            }, {  
                cover: "src/covers/joni-mitchell.jpg", 
                artist: "Joni Mitchell",
                album: "Blue",
                year: "1971",
                owned: "yes",
            }, {   
                cover: "src/covers/fleetwood-mac.jpg",
                artist: "Fleetwood Mac",
                album: "Rumors",
                year: "1977",
                owned: "yes",
            }, {   
                cover: "src/covers/bob-dylan.jpg",
                artist: "Bob Dylan",
                album: "Blood on the Tracks",
                year: "1975",
                owned: "yes",
            }, {   
                cover: "src/covers/rolling-stones.jpg",
                artist: "The Rolling Stones",
                album: "Exile on Main Street",
                year: "1972",
                owned: "not yet",
            }
        ];
    const newVinylObj = {
        cover: " ",
        artist: " ",
        album: " ",
        year: " ",
        owned: ' ',
        };
    const state = reactive({vinyls ,newVinylObj});
</script>

<template>
  <div class="collection-wrapper">
  <h1>1970's Vinyl Collection</h1>
     <div id="vinylApp">
        <div class="table">
            <div class="collectionRow header">
                <div class="cell cover-image">Cover</div>
                <div class="cell album-name">Album</div>
                <div class="cell album-artist">Artist</div>
                <div class="cell album-year">Year</div>
                <div class="cell owned">Owned</div>
                <div class="cell actions">Delete</div>
            </div>

        </div>
        <form v-on:submit.prevent="submitHandler" class="new-console-form">
            <fieldset>
                <legend>Add a vinyl to the collection</legend>
                <div>
                    <label for="cover">Cover Art (URL)</label>
                    <input id="cover" type="text" v-model="newVinylObj.cover">
                </div>
                <div>
                    <label for="album">Album</label>
                    <input id="album" type="text" v-model="newVinylObj.album">
                </div>
                <div>
                    <label for="artist">Artist</label>
                    <input id="artist" type="text" v-model="newVinylObj.artist">
                </div>
                <div>
                    <label for="year">Year</label>
                    <input id="year" type="text" v-model="newVinylObj.year">
                </div>
                <div>
                    <label for="owned">Owned?</label>
                    <input id="owned" type="text" v-model="newVinylObj.owned">
                </div>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    </div>
  </div>
</template>

<style>
body {
    background: #93E1D8; 
}

table, thead, th, tbody, tr, td {
    margin: 0 auto;
    text-align: center;
    font-family: 'Calistoga', cursive;
    padding: 1rem;
}

td {
    width: 200px;
}

h1 {
    font-family: 'Monoton', cursive;
    font-size: 4em;
    text-align: center;
    color: #114B5F;
}

th {
    font-size: 2em;
    background-color: white;
    color: #EEC643; 
}

td {
    font-size: 1.5em;
}

img {
    max-width: 200px;
}

tr:hover {
    
    background: #EEC643;
    color: black;
}

.buy {
    background: white;
    color: #114B5F;
    }

.keep, .newKeep {
    background: #11485F;
    color: white;
}

.new-console-form fieldset {
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #11485F;
    border: none;
}

.new-console-form div {
    margin: 10px 0;
    width: 120px;
   color: white;
}

legend {
    background: white;
    color:#EEC643;
    font-family: 'Calistoga', cursive;
    padding: 10px;
    border-radius: 10px;
}
.new-console-form div label {
    max-width: 120px;
}

.new-console-form input {
    max-width: 120px;
    display:block;
    border: none;
    margin: 5px;
    border-radius: 5px;
}
</style>
