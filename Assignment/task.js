var chatwindow = document.querySelector('.window');
var chatwindow2 = document.querySelector('.window2');
var chatwindow3 = document.querySelector('.window3');
var chatwindow4 = document.querySelector('.window4');
//hiding blocks logic
var hide = /** @class */ (function () {
    function hide(Add1, Add2, Remove1, Remove2, classadd) {
        var c = document.querySelector(Add1);
        var d = document.querySelector(Add2);
        c === null || c === void 0 ? void 0 : c.classList.add(classadd);
        d === null || d === void 0 ? void 0 : d.classList.add(classadd);
        var a = document.querySelector(Remove1);
        var b = document.querySelector(Remove2);
        a === null || a === void 0 ? void 0 : a.classList.remove(classadd);
        b === null || b === void 0 ? void 0 : b.classList.remove(classadd);
    }
    return hide;
}());
//only 2blocks are visible at once and other 2 will hide
var Meghna = document.getElementById('Meghna');
Meghna === null || Meghna === void 0 ? void 0 : Meghna.addEventListener('click', function () {
    new hide('.c', '.d', '.a', '.b', 'chat2');
});
//only 2blocks are visible at once and other 2 will hide
var Titli = document.getElementById('Titli');
Titli === null || Titli === void 0 ? void 0 : Titli.addEventListener('click', function () {
    new hide('.a', '.b', '.c', '.d', 'chat2');
});
//logic for sending messages between blocks using class
var Message = /** @class */ (function () {
    function Message(name, window, window2, InputID) {
        var myInput = document.getElementById(InputID);
        var inputValue = myInput.value;
        var s = document.createElement('div');
        s.classList.add('message');
        var head = document.createElement('h5');
        head.innerHTML = name;
        s.appendChild(head);
        var v = document.createElement('p');
        v.innerHTML = inputValue;
        s.appendChild(v);
        s.classList.add('outgoing');
        window.appendChild(s);
        myInput.value = " ";
        var e = document.createElement('div');
        e.classList.add('message');
        e.classList.add('incoming');
        var he = document.createElement('h5');
        he.innerHTML = name;
        e.appendChild(he);
        var vi = document.createElement('p');
        vi.innerHTML = inputValue;
        e.appendChild(vi);
        window2.appendChild(e);
    }
    return Message;
}());
//Setting up the block for  incoming and outgoing of messages
var myButton = document.getElementById('myButton');
myButton === null || myButton === void 0 ? void 0 : myButton.addEventListener('click', function () {
    new Message('AdamKhor', chatwindow, chatwindow2, 'myInput');
});
var yourButton = document.getElementById('yourButton');
yourButton === null || yourButton === void 0 ? void 0 : yourButton.addEventListener('click', function () {
    new Message('Meghna', chatwindow2, chatwindow, 'yourInput');
});
var myButton2 = document.getElementById('myButton2');
myButton2 === null || myButton2 === void 0 ? void 0 : myButton2.addEventListener('click', function () {
    new Message('AdamKhor', chatwindow3, chatwindow4, 'myInput2');
});
var yourButton2 = document.getElementById('yourButton2');
yourButton2 === null || yourButton2 === void 0 ? void 0 : yourButton2.addEventListener('click', function () {
    new Message('Titli', chatwindow4, chatwindow3, 'yourInput2');
});
