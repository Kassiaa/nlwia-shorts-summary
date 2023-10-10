import { Pipeline, pipeline } from "@xenova/transformers"

import {sumarryexample} from "./utils/summary.js"

export async function summarize (text){
  try{
    //return sumarryexample
      console.log ("Realizando o resumo...")

      const generator = await  pipeline("summarization",
      "Xenova/distilbart-cnn-12-6"
      )


      const output= await generator (text)

      console.log("Resumo concluido com sucesso")
      return output[0].summary_text
  } catch (error) {

    console.log ("Não foi possivel realizar o resumo ", error)
    throw new Error (error)
  }


} 