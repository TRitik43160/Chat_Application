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
var chatwindow = document.querySelector('.window');
var chatwindow2 = document.querySelector('.window2');
var chatwindow3 = document.querySelector('.window3');
var chatwindow4 = document.querySelector('.window4');
var Meghna = document.getElementById('Meghna');
Meghna === null || Meghna === void 0 ? void 0 : Meghna.addEventListener('click', function () {
    var a = document.querySelector('.c');
    var b = document.querySelector('.d');
    a === null || a === void 0 ? void 0 : a.classList.add('chat2');
    b === null || b === void 0 ? void 0 : b.classList.add('chat2');
    var c = document.querySelector('.a');
    var d = document.querySelector('.b');
    c === null || c === void 0 ? void 0 : c.classList.remove('chat2');
    d === null || d === void 0 ? void 0 : d.classList.remove('chat2');
});
var Titli = document.getElementById('Titli');
Titli === null || Titli === void 0 ? void 0 : Titli.addEventListener('click', function () {
    var a = document.querySelector('.a');
    var b = document.querySelector('.b');
    a === null || a === void 0 ? void 0 : a.classList.add('chat2');
    b === null || b === void 0 ? void 0 : b.classList.add('chat2');
    var c = document.querySelector('.c');
    var d = document.querySelector('.d');
    c === null || c === void 0 ? void 0 : c.classList.remove('chat2');
    d === null || d === void 0 ? void 0 : d.classList.remove('chat2');
});
var myButton = document.getElementById('myButton');
myButton === null || myButton === void 0 ? void 0 : myButton.addEventListener('click', function () {
    var myInput = document.getElementById('myInput');
    var inputValue = myInput.value;
    var s = document.createElement('div');
    s.classList.add('message');
    s.classList.add('outgoing');
    var head = document.createElement('h5');
    head.innerHTML = 'AdamKhor';
    s.appendChild(head);
    var v = document.createElement('p');
    v.innerHTML = inputValue;
    s.appendChild(v);
    chatwindow.appendChild(s);
    myInput.value = " ";
    var e = document.createElement('div');
    e.classList.add('message');
    //    e.classList.add('incoming');
    var he = document.createElement('h5');
    he.innerHTML = 'AdamKhor';
    e.appendChild(he);
    var vi = document.createElement('p');
    vi.innerHTML = inputValue;
    e.appendChild(vi);
    chatwindow2.appendChild(e);
});
var yourButton = document.getElementById('yourButton');
yourButton === null || yourButton === void 0 ? void 0 : yourButton.addEventListener('click', function () {
    var yourInput = document.getElementById('yourInput');
    var inputValue2 = yourInput.value;
    var chat2 = document.createElement('div');
    chat2.classList.add('message');
    chat2.classList.add('outgoing');
    var head2 = document.createElement('h5');
    head2.innerHTML = 'Meghna';
    chat2.appendChild(head2);
    var para2 = document.createElement('p');
    para2.innerHTML = inputValue2;
    chat2.appendChild(para2);
    chatwindow2.appendChild(chat2);
    yourInput.value = " ";
    var chat = document.createElement('div');
    chat.classList.add('message');
    // chat.classList.add('incoming');
    var head = document.createElement('h5');
    head.innerHTML = 'Meghna';
    chat.appendChild(head);
    var para = document.createElement('p');
    para.innerHTML = inputValue2;
    chat.appendChild(para);
    chatwindow.appendChild(chat);
});
var myButton2 = document.getElementById('myButton2');
myButton2 === null || myButton2 === void 0 ? void 0 : myButton2.addEventListener('click', function () {
    var myInput2 = document.getElementById('myInput2');
    var inputValue2 = myInput2.value;
    var s = document.createElement('div');
    s.classList.add('message');
    s.classList.add('outgoing');
    var head = document.createElement('h5');
    head.innerHTML = 'AdamKhor';
    s.appendChild(head);
    var v = document.createElement('p');
    v.innerHTML = inputValue2;
    s.appendChild(v);
    chatwindow3.appendChild(s);
    myInput2.value = " ";
    var e = document.createElement('div');
    e.classList.add('message');
    //    e.classList.add('incoming');
    var he = document.createElement('h5');
    he.innerHTML = 'AdamKhor';
    e.appendChild(he);
    var vi = document.createElement('p');
    vi.innerHTML = inputValue2;
    e.appendChild(vi);
    chatwindow4.appendChild(e);
});
var yourButton2 = document.getElementById('yourButton2');
yourButton2 === null || yourButton2 === void 0 ? void 0 : yourButton2.addEventListener('click', function () {
    var yourInput2 = document.getElementById('yourInput2');
    var inputValue2 = yourInput2.value;
    var chat2 = document.createElement('div');
    chat2.classList.add('message');
    chat2.classList.add('outgoing');
    var head2 = document.createElement('h5');
    head2.innerHTML = 'Titli';
    chat2.appendChild(head2);
    var para2 = document.createElement('p');
    para2.innerHTML = inputValue2;
    chat2.appendChild(para2);
    chatwindow4.appendChild(chat2);
    yourInput2.value = " ";
    var chat = document.createElement('div');
    chat.classList.add('message');
    // chat.classList.add('incoming');
    var head = document.createElement('h5');
    head.innerHTML = 'Titli';
    chat.appendChild(head);
    var para = document.createElement('p');
    para.innerHTML = inputValue2;
    chat.appendChild(para);
    chatwindow3.appendChild(chat);
});