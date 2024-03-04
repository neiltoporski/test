const getJSONData = async () => {

// Replace YOUR_BIN_ID with the actual ID of your bin
const binId = '655ea5e30574da7622ca6bc1'; 
// Replace YOUR_API_KEY with your JSONbin.io API key
const apiKey = '$2b$10$zhqQdXWQew55ytBi6tw5teLZTtv2I49Bx0K2R7XG.8DdZ.tlirKxC'; 
const url = "https://api.jsonbin.io/v3/b/"+binId+"?meta=false";

	const response = await fetch(url,
		{
			method: 'GET',
			headers: {
				'X-Master-Key': apiKey,
				'Content-Type': 'application/json'
			}
		}
	);
  if (response.status !== 200) {
    throw new Error("cannot fetch data");
  }
  let data = await response.json();
  
  // Remove the "metadata" and "records" keys from the object
	delete data.metadata;
	delete data.records;

	//Convert the modified object back into a JSON string
	data = JSON.stringify(data);
	//this works
	return data;
};
