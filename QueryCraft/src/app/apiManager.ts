export class apiManager {

    /* This method should return the following object
        Return: 
            {
                confidence: any,
                prediction: string
            }
    */
    analyse (sentence: string): Promise<Response> {
        var requestOptions: RequestInit = {
            method: 'POST',
            redirect: 'follow',
            mode: 'cors',
            headers: {},

        };

        var params = new URLSearchParams({
            sentence: sentence
        });

        return fetch("https://joeljacob.pythonanywhere.com/userinput?" + params, requestOptions)
    }
}