const chatwindow: any = document.querySelector('.window');
const chatwindow2: any = document.querySelector('.window2');

const chatwindow3: any = document.querySelector('.window3');
const chatwindow4: any = document.querySelector('.window4');

//hiding blocks logic
class hide {
    constructor(Add1: any, Add2: any, Remove1: any, Remove2: any, classadd: any) {
        let c = document.querySelector(Add1);
        let d = document.querySelector(Add2);
        c?.classList.add(classadd);
        d?.classList.add(classadd);
        let a = document.querySelector(Remove1);
        let b = document.querySelector(Remove2);
        a?.classList.remove(classadd);
        b?.classList.remove(classadd);
    }
}
//only 2blocks are visible at once and other 2 will hide
const Meghna = document.getElementById('Meghna');
Meghna?.addEventListener('click', () => {
    new hide('.c', '.d', '.a', '.b', 'chat2');
});

//only 2blocks are visible at once and other 2 will hide
const Titli = document.getElementById('Titli');
Titli?.addEventListener('click', () => {
    new hide('.a', '.b', '.c', '.d', 'chat2');
});

//logic for sending messages between blocks using class
class Message {

    constructor(name: string, window: any, window2: any, InputID: any) {

        let myInput = document.getElementById(InputID) as HTMLInputElement;
        let inputValue = myInput.value;
        let s = document.createElement('div');
        s.classList.add('message');
        let head = document.createElement('h5');
        head.innerHTML = name;
        s.appendChild(head);
        let v = document.createElement('p');
        v.innerHTML = inputValue;
        s.appendChild(v);
        s.classList.add('outgoing');
        window.appendChild(s);

        myInput.value = " ";

        let e = document.createElement('div');
        e.classList.add('message');
        e.classList.add('incoming');
        let he = document.createElement('h5');
        he.innerHTML = name;
        e.appendChild(he);
        let vi = document.createElement('p');
        vi.innerHTML = inputValue;
        e.appendChild(vi);
        window2.appendChild(e);
    }
}

//Setting up the block for  incoming and outgoing of messages
const myButton = document.getElementById('myButton');
myButton?.addEventListener('click', () => {
    new Message('AdamKhor', chatwindow, chatwindow2, 'myInput');
});

const yourButton = document.getElementById('yourButton');
yourButton?.addEventListener('click', () => {
    new Message('Meghna', chatwindow2, chatwindow, 'yourInput');
});

const myButton2 = document.getElementById('myButton2');
myButton2?.addEventListener('click', () => {
    new Message('AdamKhor', chatwindow3, chatwindow4, 'myInput2');
});

const yourButton2 = document.getElementById('yourButton2');
yourButton2?.addEventListener('click', () => {
    new Message('Titli', chatwindow4, chatwindow3, 'yourInput2');
});

