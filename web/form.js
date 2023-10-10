import { server } from "./server"

  const form= document.querySelector("#form")
  const input=document.querySelector("#url")
  const content = document.querySelector ("#content")

  form.addEventListener("submit", async (event)=> {
  event.preventDefault()
  content.classList.add("placeholder")

const videoURL =  input.value
 
if(!videoURL.includes ("shorts")){
return content.textContent = "Esse video  não é um short."
}


const [_, params] = videoURL.split("/shorts/")
 const [videoID] = params.split ("?si")

 content.textContent = "Obtendo o texto do áudio..."

  const transcription = await server.get("/sumary/" + videoID)

 content.textContent = "Realizando o resumo ..."

      const sumary = await server.post ("/sumary",{
    text:transcription.data.result,
    })
    
 content.textContent= sumary.data.result
 content.classList.remove("placeholder")
})