export class Role {
    
    private _id:number;
    
    private _name:string;
    
    constructor() {}   
    
    get id():number {
        return this._id;
    }
    
    set id( value:number ) {
        this._id = value;
    }

    
    get name():string {
        return this._name;
    }
    
    set name( value:string ) {
        this._name = value;
    }
        
    toJSON() {
        
        let json = {};
        
        json["name"] = this._name;
        
        return json;
        
    }

}



