<template>
<video autoplay muted loop id="myVideo">
    <source src="https://wp-assets.rollingstone.com/wp-content/uploads/2020/09/PiqFpPQ8-25631591.mp4" type="video/mp4">
</video>
<div class="content">
    <p>Welcome to my vinyl record shelf! Check out my collection for the top albums of all time <a href="https://www.rollingstone.com/music/music-lists/best-albums-of-all-time-1062063/">(according to Rolling Stones magazine)</a>.</p>
</div>
</template>

<style scoped>
video {
  position: fixed;
  right: 10;
  top: 10;
  max-width: 100%;
  max-height: 100%;
}
.content {
  position: fixed;
  top: 4;
  background: rgba(254, 254, 254, 0.2);
  color: #f1f1f1;
  width: 100%;
  padding: 10px;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
}

.content a {
    text-decoration: none;
    color: white;
}

.content a:hover {
    text-decoration: wavy underline;
}
</style>