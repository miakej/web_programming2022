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
                label: "Motown",
                rank: "1",
                award: "Platinum",
            }, {  
                cover: "covers/joni-mitchell.jpg", 
                artist: "Joni Mitchell",
                album: "Blue",
                year: "1971",
                label: "Reprise",
                rank: "3",
                award: "Platinum",
            }, {   
                cover: "covers/fleetwood-mac.jpg",
                artist: "Fleetwood Mac",
                album: "Rumors",
                year: "1977",
                label: "Warner Bros.",
                rank: "7",
                award: "Diamond",
            }, {   
                cover: "covers/bob-dylan.jpg",
                artist: "Bob Dylan",
                album: "Blood on the Tracks",
                year: "1975",
                label: "Columbia",
                rank: "9",
                award: "Platinum",
            }, {   
                cover: "covers/rolling-stones.jpg",
                artist: "The Rolling Stones",
                album: "Exile on Main Street",
                year: "1972",
                label: "Rolling Stones Records",
                rank: "14",
                award: "Platinum",
            }
        ]
      }
    }
  }).mount("#vinylApp");