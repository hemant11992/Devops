import { api, LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const fieldArr =[`Account.Phone`];
export default class LDSmethod extends LightningElement {
    @api
    recordId;
    @api
    objectApiName;

    @wire(getRecord,{recordId: `$recordId`,fields :fieldArr})
    accountDetails;

    get retrivePhone()
    {
        if(this.accountDetails.Phone){
            console.log(JSON.stringify(this.accountDetails.data));
            return this.accountDetails.data.fields.Phone.value;
        }
        return undefined;
    }

    //get retrivePhone()
   // {
    //    if(this.accountDetails.data){
    //        return this.accountDetails.data.fields.Phone.value;
    //    }
     //   return undefined;
    //}
}