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

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.Title = 'You must provide a title.';
        errors.Subject = 'You must provide a subject.';
        errors.Email_Body = 'You must provide an email body.';
        errors.Recipients = 'You must provide a list of recipients.';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);