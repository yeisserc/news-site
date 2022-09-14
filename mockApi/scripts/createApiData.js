const fs = require('fs');
const axios = require('axios');

const formatData = (rawData) => {
  const articles = Object
    .entries(rawData)
    .map(([id, rest]) => ({
      id,
      ...rest
    }));
  
  const categoriesKeys = articles.reduce(
    (previousValue, currentValue) => {
      previousValue[currentValue.category] = currentValue.category;
      return previousValue;
    },
    {}
  );
  
  const categories = Object.entries(categoriesKeys).map(([key]) => ({
    id: key,
    title: key.charAt(0).toUpperCase() + key.slice(1),
    imageUrl: ''
  }));

  return {
    categories,
    articles
  };
}

async function getData() {
  const { data } = await axios.get(
    'https://firebasestorage.googleapis.com/v0/b/interview-498d3.appspot.com/o/news.json?alt=media&token=63f227b0-7774-4016-b7fe-42507315ac9e'
  );

  const formattedData = formatData(data);

  const jsonString = JSON.stringify(formattedData, null, 2);

  // write JSON string to a file
  fs.writeFile('mockApi/data/db.json', jsonString, (err) => {
      if (err) {
          throw err;
      }
      console.log("JSON data is saved.");
  });
}

getData();