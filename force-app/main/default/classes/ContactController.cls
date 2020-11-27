public with sharing class ContactController {
    @AuraEnabled(cacheable = true)
    public static list<contact> getContacts(){
        
        //return new list<contact>([select firstname, lastname, email from contact limit 10]);
        
            throw new AuraHandledException('Forced error');
        
    }
}