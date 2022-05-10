<script setup>
    import VinylList from "../data/vinyls.json";
    import ItemRow from "../components/ItemRow.vue";
    import { reactive } from 'vue';
    console.log(VinylList);
    
    const vinyls = [];
    const newVinylObj = {};
    const state = reactive(vinyls, newVinylObj);

</script>

<template>
    <div class="full-wrapper">
        
        <div class="week8">
            <!-- <div class="table"> -->
                <!-- <div class="tbody"> -->
                    <ItemRow v-for="(album, index) in VinylList" :key="index" :album="album" />
                        <!-- <div class="td"><img :title="album.album" :src="album.cover" :alt="album.artist + ' ' + album.album + ' cover art'"></div>
                        <div class="td">{{album.album}}</div>
                        <div class="td">{{album.artist}}</div>
                        <div class="td">{{album.year}}</div>
                        <div class="td">{{album.owned}}</div>
                        <div class="cellActions">
                            <button type="button" v-on:click="deleteItem(album)">Delete</button> 
                        </div> -->
                    <!-- </div> -->
                <!-- </div>
            </div> -->
            <form v-on:submit.prevent="submitHandler" class="new-vinyl-form">
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