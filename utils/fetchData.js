export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "afe6a2b9e4msh50439ca98537c3bp1c6517jsn9972860b2a26",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "afe6a2b9e4msh50439ca98537c3bp1c6517jsn9972860b2a26",
  },
};

export const fetchData = async (url, option) => {
  const response = await fetch(url, option);
  const data = await response.json();
  return data;
};
