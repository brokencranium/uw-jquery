function AddressBook(){
	var contacts = [];

	this.addContact = function(contact){
		contacts.push(contact);
		$('body').trigger('dataModelChanged');
	}

    this.deleteContact = function(id){
    	delete contacts[id];
    }

   this.getContactDetails = function(id){
   	     return contacts[id];
   }

   this.getAllNames = function(){
   	return contacts;
   }

}

function Contact(fn,ln,em){
	this.fname = fn;
	this.lname = ln;
	this.email = em;
}

