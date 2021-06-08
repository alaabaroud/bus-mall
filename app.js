
let firstImage=document.getElementById('firstImage');
let secondImage=document.getElementById('secondImage');
let thirdImage=document.getElementById('thirdImage');
let container = document.getElementById('images')

let firstimgIndex;
let secondimgIndex;
let thirdimgIndex;

let attempts= 25;
let userAttempts =0;


let vote=[];
let seen= [];
let proname=[];


function product(productName, filePath){
    this.productName=productName;
    this.filePath=filePath;
    this.votes=0;
    this.views=0;
   proname.push(this.productName);
   
  
    product.allProduct.push(this);

    updateStorage();

}
    product.allProduct=[];

    function updateStorage(){
        let string=JSON.stringify(product.allProduct)
        localStorage.setItem('product', string);
    
    };





    function getProductsData (){
        let data=localStorage.getItem('product');

        let productData=JSON.parse(data);
        console.log(data);
        if (productData!==null) {
        product.allProduct=productData;
        }
    
    }
    

  
    




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


viewedpics=[];
viewedpics.push(firstimgIndex, secondimgIndex, thirdimgIndex);
function render() {
    firstimgIndex=generateRandomIndex();
    secondimgIndex=generateRandomIndex();
    thirdimgIndex=generateRandomIndex();
    
    while (firstimgIndex===secondimgIndex || firstimgIndex===thirdimgIndex || secondimgIndex===thirdimgIndex ||viewedpics.includes(firstimgIndex)||viewedpics.includes(secondimgIndex)||viewedpics.includes(thirdimgIndex)) {
    firstimgIndex=generateRandomIndex();
    secondimgIndex=generateRandomIndex();
    thirdimgIndex=generateRandomIndex();
}
        
    //console.log(product.allproduct[firstimgIndex].filePath);

    firstImage.src=product.allProduct[firstimgIndex].filePath;
    secondImage.src=product.allProduct[secondimgIndex].filePath;
    thirdImage.src=product.allProduct[thirdimgIndex].filePath;
    product.allProduct[firstimgIndex].views++;
    product.allProduct[secondimgIndex].views++;
    product.allProduct[thirdimgIndex].views++;
//console.log(product.allProduct[thirdimgIndex].views);
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




let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: proname,
        datasets: [{
            label: '# of Votes',
            data: vote,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '# of Votes',
            data: seen,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
 




getProductsData();
