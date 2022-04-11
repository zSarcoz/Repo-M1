/* function Node(){
    this.data = data;
    this.next = null;
}

function LinkedList(){
    this.head = null;
}

let list = new LinkedList();

LinkedList.prototype.add = function(data){
    let node = new Node(data);


    let current = this.head;

    if(!current){
        this.head = node;
    }
    
    while(current.next){
        current = current.next
    }

    current.next = node;
}
 */

function Node(data){ 
    this.data = data;
    this.next = null;
}

function LinkedList(){
    this.head = null;
}

var list = new Node();

LinkedList.prototype.add = function(value){
    let node = new Node(value);

    let current = this.head;


    if(!current){
        this.head = node;
    }

    while(current.next){

        current = current.next;
    }

    current.next = node;
}

LinkedList.prototype.remove = function(){

    let current = this.head;

    if(!current) return null;

    if(!current.next){
        let lastValue = this.head.value;
        this.head = null; 
        this.len--

        return lastValue;
    }
    
    while(current.next.next){
        current = current.next;
    }

    let lastValue = this.next.value;
    current.next = null;
    this.len--;
    return lastValue;
}

linkedList.prototype.search = function(arg){
    let current = this.head;

    if(this.head == null) return null;

    while(current){

        if(current.value == arg) return current.value;

        else if(typeof arg === 'function'){
            if(arg(current.value)){
                return current.value;
            }
        }
    }

    return current.value;
}