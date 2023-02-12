require("dotenv").config();
const express = require("express");
const router = express.Router();

var coolSeason = [
  {
    name: "broccoli",
    url: "https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg",
  },
  {
    name: "cauliflower",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtNrKTzCH5FAm3bEfPtQYIV3SDiXTq1nKtQ&usqp=CAU",
  },
  {
    name: "Mustard",
    url: "https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg",
  },
  {
    name: "Lettuce",
    url: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGV0dHVjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
  },
  {
    name: "peas",
    url: "https://images.unsplash.com/photo-1596564823703-d28706a620e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
  },
  {
    name: "cauliflower",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtNrKTzCH5FAm3bEfPtQYIV3SDiXTq1nKtQ&usqp=CAU",
  },
  {
    name: "spinach",
    url: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
  },
  {
    name: "Apple",
    url: "https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8QVBwbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60",
  },
];

var warmSeason = [
  {
    name: "Tomatoes",
    url: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dG9tYXRvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60",
  },
  {
    name: "Peppers",
    url: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwcGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
  },
  {
    name: "Cucumber",
    url: "https://images.unsplash.com/photo-1542814744-5f6b075c051c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGN1Y3VtYmVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
  },
  {
    name: "melons",
    url: "https://images.unsplash.com/photo-1596273312170-6f83de8755f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8TWVsb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60",
  },
  {
    name: "corn",
    url: "https://images.unsplash.com/photo-1554402100-8d1d9f3dff80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29ybnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
  },
];

var moderateSeason = [
  {
    name: "Bananas",
    url: "https://images.unsplash.com/photo-1610911434407-54dbc487af49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbmFuYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60",
  },
  {
    name: "pineapples",
    url: "https://images.unsplash.com/photo-1587883012610-e3df17d41270?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGluZWFwcGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
  },
  {
    name: "Mangoes",
    url: "https://images.unsplash.com/photo-1629358821360-500f89a5a907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuZ29lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
  },
  {
    name: "Coffee",
    url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60",
  },
  {
    name: "Wheat",
    url: "https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hlYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60",
  },
];

router.post("/post", (req, res) => {
  try {
    console.log(req.body.city);
    const city = req.body.city;
    const unit = "metric";
    const ApiKey = process.env.ApiKey;
    let temp = 0;
    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      ApiKey +
      "&units=" +
      unit +
      "";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // res.status(200).json(data.main.temp);
        temp = data.main.temp;
        if (temp < 20) {
          return res.status(200).json(coolSeason);
        } else if (temp >= 20 && temp <= 30) {
          return res.status(200).json({moderateSeason});
        } else {
          return res.status(200).json({warmSeason});
        }
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(400).send("SOmething went wrong");
  }
});

module.exports = router;