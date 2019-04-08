export class User {
    private name: string;
    private mail: string;
    private phone: number;
    constructor(name: string, mail: string, phone: number) {
        this.name = name;
        this.mail = mail;
        this.phone = phone;
    }
    describe(): void {
        console.log('This is my name: ', this.name, ' And this is my phone number: ', this.phone, ' And this is my mail: ', this.mail)
    }
    setName(name: string) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(phone: number) {
        this.phone = phone;
    }
    textMe() {
        return 'This is my name: ' + this.name + ' And this is my phone number: 0' + this.phone + ' And this is my mail: ' + this.mail;
       
    }
}
