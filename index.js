const contactService = require('./contacts');
const {program} = require("commander");

// const { Command } = require("commander");
// const program = new Command();


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
          const allContacts = await contactService.listContacts();
          console.table(allContacts);
      break;

    case "get":
          const oneContact = await contactService.getContactById(id);
          console.log(oneContact);
      break;

    case "add":
          const newContact = await contactService.addContact( name, email, phone );
          console.log(newContact);
      break;

    case "remove":
          const deleteContact = await contactService.removeContact(id);
          console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);