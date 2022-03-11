let vm = Vue.createApp({
    data() {
      return {
        newVinylObj: {
            cover: " ",
            artist: " ",
            album: " ",
            year: " ",
            owned: ' ',
        },
        rankLink: "https://www.rollingstone.com/music/music-lists/best-albums-of-all-time-1062063/",
        rankTitle: "Rolling Stones 500 Best Albums of All Time",
        vinyls: [
            {   
                cover: "covers/marvin-gaye.jpg",
                artist: "Marvin Gaye",
                album: "What's Going On",
                year: "1971",
                owned: "yes",
            }, {  
                cover: "covers/joni-mitchell.jpg", 
                artist: "Joni Mitchell",
                album: "Blue",
                year: "1971",
                owned: "yes",
            }, {   
                cover: "covers/fleetwood-mac.jpg",
                artist: "Fleetwood Mac",
                album: "Rumors",
                year: "1977",
                owned: "yes",
            }, {   
                cover: "covers/bob-dylan.jpg",
                artist: "Bob Dylan",
                album: "Blood on the Tracks",
                year: "1975",
                owned: "yes",
            }, {   
                cover: "covers/rolling-stones.jpg",
                artist: "The Rolling Stones",
                album: "Exile on Main Street",
                year: "1972",
                owned: "not yet",
            }
        ]
      }
    },
    methods: {
        submitHandler: () => {
            console.log('submitted');
            vm.vinyls = vm.vinyls.concat(vm.newVinylObj);
            vm.resetForm();
        },
        resetForm: () => {
            vm.newVinylObj = {
                cover: " ",
                artist: " ",
                album: " ",
                year: " ",
                owned: ' ',
            };
        },
        deleteItem: item => {
            vm.vinyls = vm.vinyls.filter(album => {
                return album !== item;
            })
        }
    }
  }).mount("#vinylApp");