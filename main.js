
  
  const generateRandomInfo = () => {
    const randomIndex = Math.floor(Math.random() * data[0].results.length);
    const randomPerson = data[0].results[randomIndex];
  
    const fullName = `${randomPerson.name.title} ${randomPerson.name.first} ${randomPerson.name.last}`;
    const phone = randomPerson.phone;
    const address = `${randomPerson.location.street.number} ${randomPerson.location.street.name}, ${randomPerson.location.city}, ${randomPerson.location.state}, ${randomPerson.location.country}, ${randomPerson.location.postcode}`;
  
    const nameDiv = document.getElementById('name');
    nameDiv.innerHTML = name.innerHTML = 'Name: ' + fullName 
    
    const phoneDiv = document.getElementById('phone');
    phoneDiv.innerHTML = phone.innerHTML = 'Phone Number: ' + phone;
   
    const addressDiv = document.getElementById('address');
    addressDiv.innerHTML = 'Address: ' + address;
    
    // `
    //   <p>Name: ${fullName}</p>
    //   <p>Phone: ${phone}</p>
    //   <p>Address: ${address}</p>
    // `;
  };
  
  const randomBtn = document.getElementById('randomBtn');
  randomBtn.addEventListener('click', generateRandomInfo);
  