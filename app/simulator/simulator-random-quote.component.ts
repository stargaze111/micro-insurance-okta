import {Component} from '@angular/core'
import {PostQouteModel} from '../models/post-qoute.model'


@Component({
    moduleId: module.id,
    template: ''
})

export class SimulatorRandomQuoteComponent{
    public insuranceTypes:string[ ] = ['Ride Sharing', 'Food Delivery', 'Rental Car','Holiday Travel'];
    public genders:string[ ] = ['Male', 'Female'];
    public ages:string[ ] = ['18', '19', '20', '21','22', '23', '24', '25','26', '27', '28', '29','30', '31', '32', '33'];
    public destinations:string[ ] = [
        '21 Regent St, Redfern', 
        'unit 21/32 King St, Surry Hills', 
        '5 Railway Pd, Glenfield',
         'unit 3/40 John St Strathfield',
         '21 Regent St, Redfern', 
        '21/32 Renwick St Sydney', 
        'Level 4,40, Pitt St, CBD',
         '50 John St, Newtown ',
         '80 Lawis St, Glebe', 
        'unit 33/50 King St, Paddington', 
        '5 George Pde, Glenfield',
         '33  John Cresent, Strathfield',
         '4 Alexandria Rd, Campsie',
         '67  Redfern St, Lawishem',
         '33  Ben Cresent, Croydon',
         'Unit 33/5 Steve St, Killira',
        ];
    public companies:string[ ] = ['Tuber', 'Delivermoo','GoGet','MenuLog', 'SMS Insurance'];
  
     
      
    public randomQuote: PostQouteModel = 
        new PostQouteModel(
            this.getRandom(this.insuranceTypes),
            this.getRandom(this.genders),
            this.getRandom(this.ages),
            this.getRandom(this.destinations),
            this.getRandom(this.destinations),
            this.getRandom(this.companies)
            );

    public getRandomQoute():PostQouteModel{
        return  new PostQouteModel(
            this.getRandom(this.insuranceTypes),
            this.getRandom(this.genders),
            this.getRandom(this.ages),
            this.getRandom(this.destinations),
            this.getRandom(this.destinations),
            this.getRandom(this.companies)
            );
    }

    public getRandom(arrayObject:string[]){
        return  arrayObject[Math.floor(Math.random()*arrayObject.length)];

    }
}
