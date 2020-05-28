public without sharing class ContactController {
   // New pull request
    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContactList(Id accId){
        return [select id,name,phone,email from Contact where accountid =: accId];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContactByFilter(Id accountId, String key){
        String query ='select id,name,phone,email from contact where accountid =: accountId and Name like \'%'+key+'%\'';
        return Database.query(query);

    }
}
