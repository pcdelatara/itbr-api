# itbr-api

This is a "api" for geting random italian brainrot creatures.

Usage : 
```javascript
function getRandomImage() {
      fetch('https://pcdelatara.github.io/itbr-api/imget.json')
        .then(res => res.json())
        .then(data => {
          const randomIndex = Math.floor(Math.random() * data.images.length);
          const randomImage = data.images[randomIndex];
          document.getElementById("meme-img").src = randomImage;
        })
        .catch(err => {
          console.error("Failed to load image:", err);
        });
    }
```

Example : https://pcdelatara.github.io/itbr-api-example/
