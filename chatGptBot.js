import { process } from './env.js' // OBJECT WITH ALL THE ENVIRONMENT VARIABLES export const process = {env : {OPENAI_API_KEY: 'sk-...'}}

const apiKey = process.env.OPENAI_API_KEY
const url = 'https://api.openai.com/v1/completions'

function fetchBotReply() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            'model': 'text-davinci-003',
            'prompt': 'Sound enthusiastic in five words or less.'
        })
    })
        .then(response => response.json())
        .then(data => console.log(data.choices[0].text))
        .catch(error => {
            console.log('Error:', error);
        });
}

fetchBotReply()

// OR
// ///////////////////////////////////////////////////////////////////////////
// import { Configuration, OpenAIApi } from 'openai'

// const configuration = new Configuration({
//     apiKey: process.env.REACT_APP_OPENAI_API_KEY
// })

// delete configuration.baseOptions.headers['User-Agent']

// const openai = new OpenAIApi(configuration)

// async function fetchBotReply() {
//     const response = await openai.createCompletion({
//         'model': 'text-davinci-003',
//         'prompt': 'Sound enthusiastic in five words or less.',
//     })
//     console.log(response.data.choices[0].text)
// }

// fetchBotReply();
///////////////////////////////////////////////////////////////////////////
