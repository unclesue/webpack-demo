class Staff {
  name: string = "Singhi";
  say() {
    console.log(`I am ${this.name}`);
  }
}

const staff = new Staff()
staff.say()