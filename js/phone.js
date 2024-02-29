const loadPhone = async() =>{
    const res= await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data= await res.json();
    const phones=data.data;
    console.log(phones);
    displayPhones(phones);

}

const displayPhones = phones =>{
    //step 1 get the div we are going to addend 
    const phoneContainer=document.getElementById('phone-container');
    phones.forEach(phone =>{
        console.log(phone);
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

}

loadPhone();