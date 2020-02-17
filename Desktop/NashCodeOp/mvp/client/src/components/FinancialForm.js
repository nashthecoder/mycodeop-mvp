import React, { Component } from 'react'

export class FinancialForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default FinancialForm
