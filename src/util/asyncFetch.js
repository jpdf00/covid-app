const getData = async (url) => {
  const data = await fetch(url, { method: 'GET', redirect: 'follow' });
  return data;
};

export default getData;
