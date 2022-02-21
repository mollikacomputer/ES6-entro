document.getElementById('border-btn').addEventListener('click', function(){
    const container = document.getElementById('container');
    container.style.border = '5px solid black';
});
document.getElementById('bg-button').addEventListener('click', function(){
    const bgChange = document.getElementById('bg-color');
    bgChange.style.backgroundColor = 'gray';
    bgChange.style.padding = '50px';
    bgChange.style.color = 'white';
});


function addBgColor(){
        const friends = document.getElementsByClassName('friend');
        for(const friend of friends){
            friend.style.backgroundColor = 'lightblue';
        }

}

document.getElementById('friend-btn').addEventListener('click', function(){
    const friendContainer = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = 
    `
            <h1> new Friend Lorem ipsum dolor sit amet.</h1>
            <p>  
            New Friend Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sed consequatur aperiam earum fugit ipsam nostrum!
            </p>
    `
    friendContainer.appendChild(friendDiv);
})