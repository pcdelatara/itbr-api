const totalImages = 21;
const randomNumber = Math.floor(Math.random() * totalImages) + 1;
const imageName = ` (${randomNumber}).png`;

const imageURL = `https://pcdelatara.github.io/itbr-api/images/${imageName}`;
const json = { image: imageURL };

const blob = new Blob([JSON.stringify(json)], { type: 'application/json' });
const response = new Response(blob, {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

response.text().then(text => {
  document.write(`<pre>${text}</pre>`);
});
