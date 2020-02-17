import React, { Component } from 'react'
import OrgForm from './OrgForm';

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
        const { orgName, projectName, projectCode, region, city, grantAmount, grantPeriod } = this.state;
        const values = { orgName, projectName, projectCode, region, city, grantAmount, grantPeriod }
        
        switch(step) {
            case 1: 
                return (
                    <OrgForm 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
            case 2:
                return  <h1>NarrativeForm</h1>
            case 3:
                return  <h1>FinancialForm</h1>
            case 4:
                return  <h1>Confirm</h1>
        }
            
    }
}

export default UserForm
