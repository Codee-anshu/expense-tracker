
import NetInfo from "@react-native-community/netinfo";

export async function addExpenseToDataase(expenseData) {
    // // Replace YOUR_DATABASE_URL with the actual URL of your Firebase Realtime Database
    // const databaseURL = "https://expense-tracker-app-727a3-default-rtdb.firebaseio.com/"

    // // Convert data to JSON
    // const jsonData = JSON.stringify(expenseData);

    // // Firebase Realtime Database endpoint URL
    // const endpointURL = `${databaseURL}/expenses.json`; // Replace your-data-path with the path where you want to store the data
    // console.log(endpointURL)
    // // Make a POST request using the fetch API
    // await fetch(endpointURL, {
    //     method: 'GET',
    //     // headers: {
    //     //     'Content-Type': 'application/json',
    //     // },
    //     // body: jsonData,
    // }).then((response) => console.log('res1', response))
    //     .then(data => {
    //         console.log('Data posted successfully:', data);
    //     })
    //     .catch(error => {
    //         console.error('Error posting data:', error);
    //     });

    const response = await NetInfo.fetch();
   console.log( response.isConnected)


    console.log("pressed")
    const resp = await NetInfo.fetch("https://api.sampleapis.com/coffee/hot");
    const data = await resp.json();
    console.log(data)
    

}



