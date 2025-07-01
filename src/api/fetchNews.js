const API_KEY = "d3c3cf10968c485c95a4b7c13bc33cee";

export const fetchNewsBySource = async (source) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=${source}&pageSize=100&apiKey=${API_KEY}`
    );
    const data = await response.json();
    // console.log("***** fetch news by source Data****", data.articles);

    return data.articles;
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchNewsByQuery = async (query, page = 1) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&page=${page}&pageSize=10&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

// export const fetchTopNewsInIndia = async () => {
//   try {
//     const res = await fetch(
//       `https://newsapi.org/v2/top-headlines?q=india&pageSize=10&apiKey=${API_KEY}`
//     );
//     const data = await res.json();
//     return data.articles;
//   } catch (err) {
//     console.log(err.message);
//   }
// };
