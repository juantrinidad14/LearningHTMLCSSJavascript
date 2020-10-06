let emailTextBox = document.getElementById("emailTextBox")
let coffeeTextBox = document.getElementById("coffeeTextBox")
let postButton = document.getElementById("postButton")
let submitButton = document.getElementById("submitButton")
let getUserButton = document.getElementById('getUserButton')
let deleteButton = document.getElementById('deleteButton')
    const sendRequest = (method,url,data) =>{
        const xhr = new XMLHttpRequest()
        xhr.open(method,url)
        xhr.responseType= "json"
        if (data){
            xhr.setRequestHeader("Content-Type", "application/json")
        }
        xhr.onload = () => {
           const data = xhr.response
           console.log(data)
       }
        xhr.send(JSON.stringify(data))
        console.log(data)
    }

    const getData = () => {
        sendRequest('GET',"https://dc-coffeerun.herokuapp.com/api/coffeeorders/")
        
    }

    const postData = () =>{
        sendRequest('POST', 'https://dc-coffeerun.herokuapp.com/api/coffeeorders/', {emailAddress:'juan@gmail.com',coffee: 'Regular'})
    }
    const getSpecificData= () => {
        sendRequest ('GET',`https://dc-coffeerun.herokuapp.com/api/coffeeorders/${emailTextBox.value}`)
        
    }
    const removeData = () => {
        sendRequest ('DELETE',`https://dc-coffeerun.herokuapp.com/api/coffeeorders/${emailTextBox.value}`)
        
    }




submitButton.addEventListener ('click',getData)
postButton.addEventListener('click', postData)
getUserButton.addEventListener('click',getSpecificData)
deleteButton.addEventListener('click', removeData)


