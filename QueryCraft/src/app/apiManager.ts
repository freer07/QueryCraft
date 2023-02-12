export class apiManager {

    /* This method should return the following object
        Return: 
            {
                confidence: any,
                prediction: string
            }
    */
    async analyse (sentence: string) {
        var requestOptions: RequestInit = {
            method: 'POST',
            redirect: 'follow',
            mode: 'cors',
            headers: {},

        };

        var params = new URLSearchParams({
            sentence: sentence
        });

        fetch("https://joeljacob.pythonanywhere.com/userinput?" + params, requestOptions)
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data)
                return data
            }).catch(error => {
                console.log('error', error)
            }).finally(() => {
            });
    }
}