export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "6b0cb51487mshd8c1a507f909124p1cba75jsnbaa0a93445da",
  },
};

export const fetchData = async (url, option) => {
  const response = await fetch(url, option);
  const data = await response.json();
  return data;
};
