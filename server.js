const express = require("express");
const cors = require("cors");
const fetch = require("cross-fetch");

const app = express();

const PORT = process.env.PORT || 9000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Food Wagon!!! " });
});

// API to fetch list of restaurants
app.get("/api/restaurants", async (req, res) => {
  try {
    const { lat, lng } = req.query;
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=MOBILE_WEB_LISTING`;

    // Fetching restaurants list
    const data = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
    });

    // Check if promise is fulfilled or not
    if (!data.ok) {
      return res.status(400).send({ message: "Network response was not ok" });
    }

    const result = await data?.json();

    // Returning restaurants list
    return res?.status(200)?.send({
      message: "ok",
      data: result,
    });
  } catch (error) {
    return res?.status(500)?.send("Something went wrong!");
  }
});

// API to fetch menu list
app.get("/api/menu", async (req, res, next) => {
  try {
    const { lat, lng, restaurantId } = req.query;
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`;

    // Fetching restaurants list
    const data = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      },
    });

    // Check if promise is fulfilled or not
    if (!data.ok) {
      return res.status(400).send({ message: "Network response was not ok" });
    }

    const result = await data?.json();

    // Returning restaurants list
    return res?.status(200)?.send({
      message: "ok",
      data: result,
    });
  } catch (error) {
    return res?.status(500)?.send("Something went wrong!");
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
