<script setup>
     import { reactive } from 'vue';
     import ItemRow from "./components/ItemRow.vue"
     
    const vinyls =  [
            {   
                cover: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-001-Marvin-Gaye-WHATS-GOING-ON.jpg?w=1000",
                artist: "Marvin Gaye",
                album: "What's Going On",
                year: "1971",
                rank: "1",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                id: 1,
        }, {
                cover: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-002-Beach-Boys-PET-SOUNDS-update.jpg?w=1000",
                artist: "The Beach Boys",
                album: "Pet Sounds",
                year: "1966",
                rank: "2",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                id: 2, 
        }, {  
                cover: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-003-JoniMitchell-BLUE-HR.jpg?w=1000", 
                artist: "Joni Mitchell",
                album: "Blue",
                year: "1971",
                rank: "3",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                id: 3,
        }, {  
                cover: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-004-Stevie-Wonder-SONGS-IN-THE-KEY-OF-LIFE.jpg?w=1000", 
                artist: "Stevie Wonder",
                album: "Songs in the Key of Life",
                year: "1976",
                rank: "4",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                id: 4,
        }, {   
                cover: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-005-Beatles-ABBEY-ROAD.jpg?w=1000",
                artist: "The Beatles",
                album: "Abbey Road",
                year: "1969",
                rank: "5",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                id: 5,
        }, {   
                cover: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-006-Nirvana-NEVERMIND-HR.jpg?w=1000",
                artist: "Nirvana",
                album: "Nevermind",
                year: "1991",
                rank: "6",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                id: 6,
        }, {   
                cover: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-007-Fleetwood-Mac-RUMOURS.jpg?w=1000",
                artist: "Fleetwood Mac",
                album: "Rumors",
                year: "1977",
                rank: "7",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                id: 7,
        }, {   
                cover: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-008-Prince-PURPLE-RAIN.jpg?w=1000",
                artist: "Prince and the Revolution",
                album: "Purple Rain",
                year: "1984",
                rank: "8",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                id: 8,
        }, {   
                cover: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-009-Bob-Dylan-BLOOD-ON-THE-TRACKS.jpg?w=1000",
                artist: "Bob Dylan",
                album: "Blood on the Tracks",
                year: "1975",
                rank: "9",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                id: 9,
   }, {   
                cover: "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-010-Lauryn-Hill-MISEDUCATION.jpg?w=1000",
                artist: "Lauryn Hill",
                album: "The Miseducation of Lauryn Hill",
                year: "1998",
                rank: "10",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                id: 10,
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
