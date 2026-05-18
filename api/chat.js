async function askAI(message){
  try{
    const res = await fetch("https://YOUR-VERCEL-URL/api/chat", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await res.json();

    if(!data.choices){
      return "ERROR: " + JSON.stringify(data);
    }

    return data.choices[0].message.content;

  }catch(e){
    return "Connection error";
  }
}
