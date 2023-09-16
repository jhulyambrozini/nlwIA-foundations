import { pipeline } from "@xenova/transformers"

export const summarize = async (text) => {
    
    try {
        console.log('realizando o resumo')

        const generator = await pipeline(
            'summarization', 'Xenova/distilbart-cnn-12-6'
        )

        const output = await generator(text)
        console.log('Resumo concluido.')
        return output[0].summary_text

    } catch(error) {
        console.log('Não foi possível realizar o resumo', error)
        throw new Error(error)
    }
}