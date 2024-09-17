const sendrequest = document.getElementById("send-request");

    sendrequest.addEventListener("click", async () => {
       // fadeFunction();
    const url = document.getElementById('api-url').value;
    const method = document.getElementById('api-method').value;
    const headers = document.getElementById('api-headers').value;
    const body = document.getElementById('api-body').value;
    
   
     


    try {
        //parse header as json
        const headersObj = headers ? JSON.parse(headers) : {};

        // Set up the request options
        const options = {
            method,headers: headersObj};

       // Add the body if it's a POST or PUT request
        if (method === 'POST' || method === 'PUT') {
            options.body = body ? JSON.stringify(JSON.parse(body)) : null;
        }
        if (!headersObj['Content-Type']) {
            headersObj['Content-Type'] = 'application/json';
        }
        // Make the API request
        const response = await fetch(url, options);

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse the response data as JSON
        const data = await response.json();

        document.getElementById('response-display').textContent = JSON.stringify(data, null, 4);

    }
    catch (error) {
        document.getElementById('response-display').textContent = 'Error:' + error.message;
    }
})
// function fadeFunction(){
//     var container= document.getElementById('main');
//     container.classList.add('fade-out');
// }

