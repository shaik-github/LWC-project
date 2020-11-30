public with sharing class ContactController {
    @AuraEnabled(cacheable = true)
    public static list<contact> getContacts(){
        
        //return new list<contact>([select firstname, lastname, email from contact limit 10]);
        //second
        //branch1 from git desktop
            throw new AuraHandledException('Forced error');
        
    }
}