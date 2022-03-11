Vue.createApp({
    data() {
      return {
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
    }
  }).mount("#vinylApp");