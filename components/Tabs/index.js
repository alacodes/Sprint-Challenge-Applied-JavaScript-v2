// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabSection = document.querySelector('.topics');

// get request
axios.get(`https://lambda-times-backend.herokuapp.com/topics`).then(res => {
    const topicArray = res.data.topics;
    topicArray.forEach(topic => {
        const newTab = tabCreate(topic);
        tabSection.appendChild(newTab);
    });
});

//  make the function
function tabCreate(topic) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = `${topic}`;

    return tab;
}
