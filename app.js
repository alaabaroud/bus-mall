
let firstImage=document.getElementById('firstImage');
let secondImage=document.getElementById('secondImage');
let thirdImage=document.getElementById('thirdImage');


let firstimgIndex;
let secondimgIndex;
let thirdimgIndex;

let attempts= 5;
let userAttempts =0;




function product(productName, filePath){
    this.productName=productName;
    this.filePath=filePath;
    this.views=0;
    product.allProduct.push(this);


}

product.allProduct=[];


new product('bag','img/bag.jpg');
new product('banana','img/banana.jpg');
new product('bathroom', 'img/bathroom.jpg');
new product('boots', 'img/boots.jpg');
new product('breakfast','img/breakfast.jpg');
new product('bubblegum', 'img/bubblegum.jpg');
new product('chair', 'img/chair.jpg');
new product('cthulhu','img/cthulhi.jpg');
new product('dog-duck','img/dogduck.jpg');
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
    
    while (firstimgIndex===secondimgIndex) {
    firstimgIndex=generateRandomIndex();
}
        
    //console.log(product.allproduct[firstimgIndex].filePath);

    firstImage.src=product.allProduct[firstimgIndex].filePath;
    secondImage.src=product.allProduct[secondimgIndex].filePath;
    thirdImage.src=product.allProduct[thirdimgIndex].filePath;
}

render();

 document.getElementById("images").addEventListener('click', handleUserClick);

 function handleUserClick (event){

     userAttempts++
     console.log(userAttempts);
 }




