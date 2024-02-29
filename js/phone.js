const loadPhone = async(searchText) =>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data= await res.json();
    const phones=data.data;
    console.log(phones);
    displayPhones(phones);

}

const displayPhones = phones =>{
    
    //step 1 get the div we are going to addend 
    const phoneContainer=document.getElementById('phone-container');
    //clear phone container cards before adding new search
    phoneContainer.textContent ='';

    //display see more button condition
    const showAllContainer= document.getElementById('show-all-container');
    if(phones.length >10){
        showAllContainer.classList.remove('hidden')
    }
    else{
        showAllContainer.classList.add('hidden')
    }
    //display Only  first 10 items
    phones =phones.slice(0,10);
    
    phones.forEach(phone =>{
        
        //step 2 create a div 
        const phoneCard=document.createElement('div');
        phoneCard.classList = `card bg-gray-100 shadow-xl p-4`;
        //Step 3 Set innerHtml
        phoneCard.innerHTML =`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `;
        //step 4 append child
        phoneContainer.appendChild(phoneCard);
    })
}
//handle Search Button
const handleSearch =() =>{
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    console.log(searchText);
    loadPhone(searchText);

}

// loadPhone();