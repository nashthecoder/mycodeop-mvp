import React, { Component } from 'react';
//import OrgForm from './OrgForm';
import NarrativeForm from './NarrativeForm.js';
import FinancialForm from './FinancialForm.js';
import Confirm from './Confirm.js';

export class UserForm extends Component {
    state = {
        step:1,
        orgName:  '',           
        projectName:  '',     
        projectCode: '',    
        region: '',       
        city:  '',      
        grantAmount:'', 
        grantPeriod:''
    }

//Proceed to the next step
nextStep = () => {
    const { step } = this.state;
    this.setState( {
        step: step + 1
    });
}

//Go back to the previous step
prevStep = () => {
    const { step } = this.state;
    this.setState( {
        step: step - 1
    });
}

//Handle fields change
handleChange = input => e =>{
    this.setState({[input]: e.target.value});
}

    render() {
        const { step } = this.state;
        const { reportPeriod, projectSummary, taskCompleted, taskPending, taskDelayed, risks, issues } = this.state;
        const values = { reportPeriod, projectSummary, taskCompleted, taskPending, taskDelayed, risks, issues }
        
        switch(step) {
            case 1: 
                return (
                    < NarrativeForm
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
            case 2:
                return (
                    < FinancialForm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
                )
            case 3:
                return < Confirm 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                />

            case 4:
                return  <h1>Submit</h1>
        }
            
    }
}

export default UserForm
