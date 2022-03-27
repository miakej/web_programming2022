<script setup>
     import { reactive } from 'vue';
     import ItemRow from "./components/ItemRow.vue"
     
    const vinyls =  [
            {   
                cover: "./assets/covers/marvin-gaye.jpg",
                artist: "Marvin Gaye",
                album: "What's Going On",
                year: "1971",
                owned: "yes",
                id: 1,
   }, {  
                cover: "./assets/covers/joni-mitchell.jpg", 
                artist: "Joni Mitchell",
                album: "Blue",
                year: "1971",
                owned: "yes",
                id: 2,
   }, {   
                cover: "./assets/covers/fleetwood-mac.jpg",
                artist: "Fleetwood Mac",
                album: "Rumors",
                year: "1977",
                owned: "yes",
                id: 3,
   }, {   
                cover: "./assets/covers/bob-dylan.jpg",
                artist: "Bob Dylan",
                album: "Blood on the Tracks",
                year: "1975",
                owned: "yes",
                id: 4,
   }, {   
                cover: "./assets/covers/rolling-stones.jpg",
                artist: "The Rolling Stones",
                album: "Exile on Main Street",
                year: "1972",
                owned: "not yet",
                id: 5,
}
        ];
    const newVinylObj = {
        cover: " ",
        artist: " ",
        album: " ",
        year: " ",
        owned: "not yet",
        };
    const state = reactive({vinyls ,newVinylObj});

    function addNewVinyl () {
        state.vinyls.push({
            cover: state.newVinylObj.cover,
            artist: state.newVinylObj.artist,
            album: state.newVinylObj.album,
            year: state.newVinylObj.year,
            owned: state.newVinylObj.owned,
            id: state.vinyls.length + 1,
        });
        state.newVinylObj.cover = "";
        state.newVinylObj.artist = "";
        state.newVinylObj.album = "";
        state.newVinylObj.year = "";
        state.newVinylObj.owned = "not yet";
    }

    function handleDelete (albumToDelete) {
        console.log(albumToDelete.id, albumToDelete.artist);
        state.vinyls = state.vinyls.filter((albumToCheck) => {
            return albumToDelete !== albumToCheck;
        });
    }
</script>

<template>
  <div class="collection-wrapper">
  <h1>1970's Vinyl Collection</h1>
     <div id="vinylApp">
        <div class="table">
            <div class="thead">
                <div class="th">Cover</div>
                <div class="th">Album</div>
                <div class="th">Artist</div>
                <div class="th">Year</div>
                <div class="th">Owned</div>
                <div class="th">Delete</div>
            </div>
        </div>
        <ItemRow 
            v-for="(vinyl, index) in state.vinyls" 
            v-bind:key="index" 
            v-bind:album="vinyl" 
            v-bind:index="index"
            v-on:delete-album="handleDelete"
        />
        <div class="add-vinyl-form">
            <form v-on:submit.prevent="addNewVinyl" class="new-vinyl-form">
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
  </div>
</template>

<style>
body {
    background: #93E1D8; 
    margin: 0 auto;
}

.table, .thead, .th, .tbody, .tr, .td {
    display:flex;
    margin: 0 auto;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
}

.thead {
    width: 100%;
    background-color: aliceblue;
}

.th, .td {
    justify-content: center;
    align-items: center;
    width: 150px;
    padding: 1rem;
}

.tr {
    background-color: aliceblue;
}

h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 4em;
    text-align: center;
    color: #114B5F;
}

.th {
    font-size: 2em;
    background: #EEC643; 
    color: white;
    width: 100%;
}

.td {
    font-size: 1.5em;
}

img {
    max-width: 150px;
}

.tr:hover {
    
    background: #EEC643;
    color: black;
}

.even {
    background: white;
    color: #114B5F;
    }

.odd {
    background: #11485F;
    color: white;
}

.new-vinyl-form fieldset {
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #11485F;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    margin: 1rem 0;
}

.new-vinyl-form div {
    margin: 10px 0;
    width: 120px;
   color: white;
}

legend {
    background: white;
    color:#EEC643;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    padding: 10px;
    border-radius: 10px;
}
.new-vinyl-form div label {
    max-width: 120px;
}

.new-vinyl-form input {
    max-width: 120px;
    display:block;
    border: none;
    margin: 5px;
    border-radius: 5px;
}
</style>
