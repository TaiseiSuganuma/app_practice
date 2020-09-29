import fetch from "node-fetch";

export default async (req, res) => {
  const response = await fetch("https://google.com/v1/universities");
  const data = await response.json();
  res.status(200).json(data);
};
