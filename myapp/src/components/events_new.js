import React,  { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { postEvents } from "../actions";
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class EventsNew extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }
    renderField(field) {
        const {input, label, type, meta: {touched, error}} = field
        return (
            <TextField
                hintText={label}
                floatingText={label}
                type={type}
                errorText={touched&&error}
                {...input}
                fullWidth={true}
            />
        )
    }

    async onSubmit(values){
        await this.props.postEvents(values)
        this.props.history.push('/')
    }

    render() {
        const { handleSubmit,pristine,submitting,invalid} = this.props
        const style = {margin:12}
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div>
                    <Field label="Title" name="title" type="text" component={this.renderField} />
                </div>
                <div>
                    <Field label="Body" name="body" type="text" component={this.renderField} />
                </div>
                <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
                <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
            </form>
        )
    }
}

const validate = values => {
    const error = {}
    if (!values.title) error.title  ="Enter a title, please"
    if (!values.body) error.body  ="Enter a body, please"
    return error
}

const mapDispatchToProps = ({postEvents})
export default connect(null, mapDispatchToProps)(
    reduxForm({validate, form:'eventNewForm'})(EventsNew)
)
