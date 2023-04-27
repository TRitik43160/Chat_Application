// let sendMessage=(<HTMLInputElement>document.getElementById('Send')).value;


// const myInput = document.getElementById('Send') as HTMLInputElement;
// const inputValue = myInput.value;





// function Sendme(){
// let s=document.createElement('div');
// s.classList.add('message');
// s.classList.add('outgoing');
// let v=document.createElement('p');
// v.innerHTML=inputValue;
// s.appendChild(v);
// chatwindow.appendChild(s);
// console.log(inputValue);


// }


const chatwindow: any = document.querySelector('.window');
const chatwindow2: any = document.querySelector('.window2');

const chatwindow3: any = document.querySelector('.window3');
const chatwindow4: any = document.querySelector('.window4');


const Meghna=document.getElementById('Meghna');
Meghna?.addEventListener('click',()=>{
    let a=document.querySelector('.c');
    let b=document.querySelector('.d');
    a?.classList.add('chat2');
    b?.classList.add('chat2');
    let c=document.querySelector('.a');
    let d=document.querySelector('.b');
    c?.classList.remove('chat2');
    d?.classList.remove('chat2');
});

const Titli=document.getElementById('Titli');
Titli?.addEventListener('click',()=>{
    let a=document.querySelector('.a');
    let b=document.querySelector('.b');
    a?.classList.add('chat2');
    b?.classList.add('chat2');
    let c=document.querySelector('.c');
    let d=document.querySelector('.d');
    c?.classList.remove('chat2');
    d?.classList.remove('chat2');
});

const myButton = document.getElementById('myButton');
myButton?.addEventListener('click', () => {
    let myInput = document.getElementById('myInput') as HTMLInputElement;
    let inputValue = myInput.value;
    let s = document.createElement('div');
    s.classList.add('message');
    s.classList.add('outgoing');
    let head= document.createElement('h5');
    head.innerHTML='AdamKhor';
    s.appendChild(head);
    let v = document.createElement('p');
    v.innerHTML = inputValue;
    s.appendChild(v);
    chatwindow.appendChild(s);
   myInput.value=" ";

   let e = document.createElement('div');
   e.classList.add('message');
//    e.classList.add('incoming');
   let he= document.createElement('h5');
   he.innerHTML='AdamKhor';
   e.appendChild(he);
   let vi = document.createElement('p');
   vi.innerHTML = inputValue;
   e.appendChild(vi);
   chatwindow2.appendChild(e);

});



const yourButton = document.getElementById('yourButton');
yourButton?.addEventListener('click', () => {
    let yourInput = document.getElementById('yourInput') as HTMLInputElement;
    let inputValue2 = yourInput.value;
    let chat2 = document.createElement('div');
    chat2.classList.add('message');
    chat2.classList.add('outgoing');
    let head2= document.createElement('h5');
    head2.innerHTML='Meghna';
    chat2.appendChild(head2);
    let para2 = document.createElement('p');
    para2.innerHTML = inputValue2;
    chat2.appendChild(para2);
    chatwindow2.appendChild(chat2);
    yourInput.value=" ";

    let chat = document.createElement('div');
    chat.classList.add('message');
    // chat.classList.add('incoming');
    let head= document.createElement('h5');
    head.innerHTML='Meghna';
    chat.appendChild(head);
    let para = document.createElement('p');
    para.innerHTML = inputValue2;
    chat.appendChild(para);
    chatwindow.appendChild(chat);
    
});

const myButton2 = document.getElementById('myButton2');
myButton2?.addEventListener('click', () => {
    let myInput2 = document.getElementById('myInput2') as HTMLInputElement;
    let inputValue2 = myInput2.value;
    let s = document.createElement('div');
    s.classList.add('message');
    s.classList.add('outgoing');
    let head= document.createElement('h5');
    head.innerHTML='AdamKhor';
    s.appendChild(head);
    let v = document.createElement('p');
    v.innerHTML = inputValue2;
    s.appendChild(v);
    chatwindow3.appendChild(s);
   myInput2.value=" ";

   let e = document.createElement('div');
   e.classList.add('message');
//    e.classList.add('incoming');
   let he= document.createElement('h5');
   he.innerHTML='AdamKhor';
   e.appendChild(he);
   let vi = document.createElement('p');
   vi.innerHTML = inputValue2;
   e.appendChild(vi);
   chatwindow4.appendChild(e);

});



const yourButton2 = document.getElementById('yourButton2');
yourButton2?.addEventListener('click', () => {
    let yourInput2 = document.getElementById('yourInput2') as HTMLInputElement;
    let inputValue2 = yourInput2.value;
    let chat2 = document.createElement('div');
    chat2.classList.add('message');
    chat2.classList.add('outgoing');
    let head2= document.createElement('h5');
    head2.innerHTML='Titli';
    chat2.appendChild(head2);
    let para2 = document.createElement('p');
    para2.innerHTML = inputValue2;
    chat2.appendChild(para2);
    chatwindow4.appendChild(chat2);
    yourInput2.value=" ";

    let chat = document.createElement('div');
    chat.classList.add('message');
    // chat.classList.add('incoming');
    let head= document.createElement('h5');
    head.innerHTML='Titli';
    chat.appendChild(head);
    let para = document.createElement('p');
    para.innerHTML = inputValue2;
    chat.appendChild(para);
    chatwindow3.appendChild(chat);
    
});