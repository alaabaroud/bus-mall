
let firstImage=document.getElementById('firstImage');
let secondImage=document.getElementById('secondImage');
let thirdImage=document.getElementById('thirdImage');
let container = document.getElementById('images')

let firstimgIndex;
let secondimgIndex;
let thirdimgIndex;

let attempts= 25;
let userAttempts =0;

let name=[];
let vote=[];
let seen= [];

function product(productName, filePath){
    this.productName=productName;
    this.filePath=filePath;
    this.votes=0;
    this.views=0;
    name.push(this.productName);

    product.allProduct.push(this);

    


}
console.log(name);
product.allProduct=[];
console.log(product.allProduct);

new product('bag','img/bag.jpg');
new product('banana','img/banana.jpg');
new product('bathroom', 'img/bathroom.jpg');
new product('boots', 'img/boots.jpg');
new product('breakfast','img/breakfast.jpg');
new product('bubblegum', 'img/bubblegum.jpg');
new product('chair', 'img/chair.jpg');
new product('cthulhu','img/cthulhu.jpg');
new product('dog-duck','img/dog-duck.jpg');
new product('dragon', 'img/dragon.jpg');
new product('pen','img/pen.jpg');
new product('pet-sweep', 'img/pet-sweep.jpg');
new product('scissors', 'img/scissors.jpg');
new product('shark', 'img/shark.jpg');
new product('sweep', 'img/sweep.png');
new product('tauntaun', 'img/tauntaun.jpg');
new product('unicorn', 'img/unicorn.jpg');
new product('usb', 'img/usb.gif');
new product('water-can', 'img/water-can.jpg');
new product('wine-glass', 'img/wine-glass.jpg');



//console.log(product.allProduct);

function generateRandomIndex() {
    return Math.floor(Math.random() * product.allProduct.length); 
}

function render() {
    firstimgIndex=generateRandomIndex();
    secondimgIndex=generateRandomIndex();
    thirdimgIndex=generateRandomIndex();
    
    while (firstimgIndex===secondimgIndex || firstimgIndex===thirdimgIndex || secondimgIndex===thirdimgIndex) {
    firstimgIndex=generateRandomIndex();
    thirdimgIndex=generateRandomIndex();
}
        
    //console.log(product.allproduct[firstimgIndex].filePath);

    firstImage.src=product.allProduct[firstimgIndex].filePath;
    secondImage.src=product.allProduct[secondimgIndex].filePath;
    thirdImage.src=product.allProduct[thirdimgIndex].filePath;
    product.allProduct[firstimgIndex].views++;
    product.allProduct[secondimgIndex].views++;
    product.allProduct[thirdimgIndex].views++;
console.log(product.allProduct[thirdimgIndex].views);
}


render();

 document.addEventListener('click', handleUserClick);

 function handleUserClick(event) {
 
userAttempts++;


if (userAttempts<=attempts) {
    if (event.target.id==='firstImage') {
        product.allProduct[firstimgIndex].votes++;
    } else if (event.target.id==='secondImage') {
        product.allProduct[secondimgIndex].votes++;
    } else if (event.target.id==='thirdImage') {
        product.allProduct[thirdimgIndex].votes++;
    }else {
         alert('click on the images');
         console.log(product.allProduct[thirdimgIndex].votes++)
    }
    render();
} else {
    let button=document.getElementById('btn');
    button.hidden=false;
    button.addEventListener('click', showlist);

    document.removeEventListener('click', handleUserClick);

    for (let i = 0; i <product.allProduct.length; i++) {
       vote.push(product.allProduct[i].votes);
       seen.push(product.allProduct[i].views)
        
    }

}

}
function showlist() {
    let list=document.getElementById ('list');
    for (let i = 0; i < product.allProduct.length; i++) {
    let results= document.createElement('li');

    list.append(results);
    results.textContent=`${product.allProduct[i].productName} has ${product.allProduct[i].votes} and people have seen it ${product.allProduct[i].views} times`;
   
        
    }
    btn.hidden=true;
}
