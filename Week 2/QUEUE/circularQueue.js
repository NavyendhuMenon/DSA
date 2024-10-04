

class circularQueue{

    constructor(capacity){

        this.item = new Array (capacity)
        this.capacity= capacity
        this.curlength = 0
        this.rear = -1
        this.front =-1
    }

    isFull(){

        return this.capacity === this.curlength
    }

    isEmpty(){

        return this.curlength===0
    }

    enqueue(el){

        if(!this.isFull()){

            this.rear = (this.rear +1 ) % this.capacity
            this.item[this.rear]= el
            this.curlength++

            if(this.front===-1){
                this.front = this.rear
            }
        }
    }


    dequeue(){

        if(this.isEmpty()){
            return null
        }

        let dValue = this.item[this.front]

        this.item[this.front] = null

        this.front = (this.front +1 ) % this.capacity

        this.curlength -= 1

        if(this.isEmpty()){

            this.front =-1
            this.rear =-1
        }

        return dValue
    }

}