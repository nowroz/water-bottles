const fetchJSONPromise = async (endpoint) => {
  const response = await fetch(endpoint);

  return response.json();
};

export { fetchJSONPromise };
