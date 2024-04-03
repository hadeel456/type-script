var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr1 = [1234, 5, 6];
arr1.push(33);
var arr2 = [1, 4, 5];
//////////////////////////////////////////////
var arr3;
arr3 = [2, 3, 4, "r"];
/////////////////
var x;
x = 3;
x = "";
/////////////////////////////
function fun(x, y) {
    if (x === void 0) { x = 0; }
    if (y !== undefined)
        return x + y;
    return;
}
fun();
fun(4, 6);
var Employee = /** @class */ (function () {
    function Employee(id, name, username, email, address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this._username = username;
    }
    Object.defineProperty(Employee.prototype, "username", {
        get: function () {
            return this._username;
        },
        // Setter for username
        set: function (newUsername) {
            this._username = newUsername;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employeeData = {
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
var employee = new Employee(employeeData.id, employeeData.name, employeeData.username, employeeData.email, employeeData.address);
////////////////////////////////////////////////////////////////////
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, username, email, address) {
        return _super.call(this, id, name, username, email, address) || this;
    }
    Manager.prototype.viewEmployeeAddress = function (employee) {
        return employee.address;
    };
    return Manager;
}(Employee));
var account = /** @class */ (function () {
    function account() {
    }
    account.prototype.debit = function () {
        console.log("dibitamount");
    };
    account.prototype.credit_acc = function () {
        console.log("credit");
    };
    return account;
}());
var Saving_Account = /** @class */ (function (_super) {
    __extends(Saving_Account, _super);
    function Saving_Account(Min_Balance, accno, balance) {
        var _this = _super.call(this, balance, accno) || this;
        _this.Min_Balance = Min_Balance;
        return _this;
    }
    Saving_Account.prototype.addcustomer = function () {
        console.log("addcustomer");
    };
    ;
    Saving_Account.prototype.removeCustomer = function () {
        console.log("Removed");
    };
    ;
    return Saving_Account;
}(account));
var currentaccount = /** @class */ (function (_super) {
    __extends(currentaccount, _super);
    function currentaccount(insertrate, accno, balance) {
        var _this = _super.call(this, balance, accno) || this;
        _this.insertrate = insertrate;
        return _this;
    }
    currentaccount.prototype.addcustomer = function () {
        console.log("addcustomer");
    };
    ;
    currentaccount.prototype.removeCustomer = function () {
        console.log("Removed");
    };
    ;
    return currentaccount;
}(account));
