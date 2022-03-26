<template>
            <tbody>
                <tr
                v-for="(album, index) in state.vinyls"
                :key="index"
                :class="{keep: album.owned === 'yes', newKeep: newVinylObj.owned === 'yes', buy: album.owned !== 'yes'}"
                >
                    <td><img :title="album.album" :src="album.cover" :alt="album.artist + ' ' + album.album + ' cover art'"></td>
                    <td>{{album.album}}</td>
                    <td>{{album.artist}}</td>
                    <td>{{album.year}}</td>
                    <td>{{album.owned}}</td>
                    <td class="cellActions">
                        <button type="button" v-on:click="deleteItem(album)">Delete</button> 
                    </td>
                </tr>
            </tbody>
</template>