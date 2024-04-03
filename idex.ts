
let arr1 :number []=[1234,5,6];
arr1.push(33);
let arr2 :Array<number>=[1,4,5];

//////////////////////////////////////////////

let arr3:(string|number)[];
arr3=[2,3,4,"r"];
/////////////////
let x :number|string;
x=3; x=""; 
/////////////////////////////
function  fun (x:number=0,y?:number):any {
       if (y!==undefined)
       return x+y
    return ;
}
fun();
fun(4,6);
///////////////////////////////////////////////////////////////////////////

interface IEmployee {
    id: number;
    name: string;
     username: string;
    email: string;
    address: infoAdd;
}

interface infoAdd {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}
class Employee implements IEmployee{
    private _username: string;
    constructor(
        public id:number,
        public name:string,
        username:string,
        public email:string,
        public address:infoAdd
    )
    {
        this._username = username;
    }
    get username(): string {
        return this._username;
    }
    
    // Setter for username
    set username(newUsername: string) {
        this._username = newUsername;
    }
}

const employeeData: IEmployee = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    }
};

const employee = new Employee(
    employeeData.id,
    employeeData.name,
    employeeData.username,
    employeeData.email,
    employeeData.address
);


////////////////////////////////////////////////////////////////////



    class Manager extends Employee {
        constructor(
            id: number,
            name: string,
            username: string,
            email: string,
            address: infoAdd
        ) {
            super(id, name, username, email, address);
        }
    
        viewEmployeeAddress(employee: Employee): infoAdd {
            return employee.address;
        }
    }
//////////////////////////////////////////////////


interface iaccount{
    date:number;
    addcustomer:()=>void;
    removeCustomer:()=>void;
}

class account  {
   

 public accno :number;
 balance :string;
 debit (){
    console.log("dibitamount");
 }
 credit_acc(){
    console.log("credit");
 }

}

class Saving_Account extends account implements iaccount{
    constructor(
        
        public Min_Balance:number,
        accno:number,
        balance:string
        ){
            super();
        }
    
        date:number;
        addcustomer():void {
            console.log("addcustomer");
        }; 
        removeCustomer():void{
            console.log("Removed");
        };
    }

        class currentaccount extends account implements iaccount{
            constructor(
                
                public insertrate:number,
                accno:number,
                balance:string
                ){
                    super();
                }
            
                date:number;
                addcustomer():void {
                    console.log("addcustomer");
                }; 
                removeCustomer():void{
                    console.log("Removed");
                };
}

