class Datafunction{
    constructor(data){
        this.data = data;
    }

    #abstract (data){  // # represents private
        return (this.data*2)+9*2    // Abstracted away from user 
    }

    dataProcessor(data) {
        return this.#abstract(data);
    }
}

const dataFunction = new Datafunction(20);
console.log(dataFunction.dataProcessor());
