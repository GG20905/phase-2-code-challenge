 export function Deletebot(id){
    fetch(`http://localhost:5001/bots/${id}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response)=> response.json())
    .then(data => {
        alert(`Bot ${data.id} scrapped!`)
      }) 
}

export function getbot(id){
     fetch(`http://localhost:5001/bots/`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
    }).then(response => response.json())
}

export function getBotById(id) {
  return fetch(`http://localhost:5001/bots/${id}`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Failed to fetch bot');
      }
      return response.json();
  })
  .catch(err => {
      console.log(err);
      throw err; 
  });
}
