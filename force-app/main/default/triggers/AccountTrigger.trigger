trigger AccountTrigger on SOBJECT (before insert) {
if(trigger.isInsert)
{
System.debug('d');
}else if(trigger.isUpdate)
{
    
}
}