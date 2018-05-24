import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
    { label: 'Survey Title', name: 'Title' },
    { label: 'Subject Line', name: 'Subject' },
    { label: 'Email Body', name: 'Email_Body' },
    { label: 'Recipient List', name: 'Recipients' }
];

class SurveyForm extends Component {

    renderFields () {
        return FIELDS.map(({ label, name }) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(
                    values => console.log(values)
                )}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text" >
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}


export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);