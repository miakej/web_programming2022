<script setup>
    import VinylList from "../data/vinyls.json";
    import ItemRow from "../components/ItemRow.vue";
    import { reactive } from 'vue';
    
    const vinyls = [];
    const newVinylObj = {
        cover: "(from url)",
        artist: " ",
        album: " ",
        };
    const state = reactive({vinyls ,newVinylObj});

    function addNewVinyl () {
        state.vinyls.push({
            cover: state.newVinylObj.cover,
            artist: state.newVinylObj.artist,
            album: state.newVinylObj.album,
            id: state.vinyls.length + 1,
        });
        state.newVinylObj.cover = null;
        state.newVinylObj.artist = null;
        state.newVinylObj.album = null;
    }
</script>

<template>
    <div class="collection-wrapper">
        <div class="collection-list">
            <ItemRow 
                v-for="(vinyl, index) in VinylList" 
                :key="index" 
                :album="vinyl" 
                :index="index"
            />
            <ItemRow 
                v-for="(vinyl, index) in state.vinyls" 
                :key="index" 
                :album="vinyl" 
                :index="index"
            />
        </div>
        <div class="collection-sidebar">
            <div class="add-vinyl-form">
                <form v-on:submit.prevent="addNewVinyl" class="new-vinyl-form">
                    <fieldset>
                        <legend>Add a new vinyl to the collection —————</legend>
                        <div>
                            <label for="cover" class="title">Cover: </label>
                            <input id="cover" type="text" v-model="newVinylObj.cover">
                        </div>
                        <div>
                            <label for="album" class="title">Album:  </label>
                            <input id="album" type="text" v-model="newVinylObj.album">
                        </div>
                        <div>
                            <label for="artist" class="title">Artist:  </label>
                            <input id="artist" type="text" v-model="newVinylObj.artist">
                        </div>

                        <button type="submit" class="submit">Submit</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

.collection-list {
    float: left;
    width: 75%;
    margin: 0;
}
.collection-sidebar {
    float: right;
    width: 20%;
    margin: 0;
}
.add-vinyl-form {
    position: fixed;
    right: 1rem;
    max-width: 320px;
    color: var(--secondary);
    background: white;
    border: 1px solid var(--secondary);
    box-shadow: 5px 5px var(--secondary);
    margin: 1rem;
    padding: 1rem;
  } 

fieldset {
    border: none;
    font-size: 1.5em;
    padding: 0px;
}

legend {
    font-weight: 700;
}

input {
    padding: 2.5px;
    border: 1px solid var(--accent);
    margin: 4px;
    font-family: 'montserrat', Helvetica, sans-serif;
    font-size: .75em;
    font-weight: 300;
    box-shadow: 2px 2px var(--main);
    width: 50%
}

.title {
    float: left;
    width: 30%;
    text-align: right;
    padding-right: 10px;
}

input:hover, button:hover {
    background-color: var(--accent);
}

button {
    border-bottom: 2px solid var(--main);
    border-right: 2px solid var(--main);
    border-top: 2px solid var(--accent);
    border-left: 2px solid var(--accent);
    background: white;
    font-family: 'montserrat', sans-serif;
    font-size: .8em;
    font-weight: 300;
    margin-top: 5px;
    margin-left: 132px;
}
</style>