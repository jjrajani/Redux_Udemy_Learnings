import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

  renderField(field) {
    const { meta: { touched, error }, label, input } = field;
    const className=`form-group ${error && touched ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input
          className='form-control'
          type="text"
          {...input}
        />
      <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/')
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title for Post"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link className="btn btn-danger" to="/">Cancel</Link>
        </form>
      </div>
    );
  }

}

function validate(values) {
  const errors = {};

  if (!values.title)      errors.title      = "Enter a title!";
  if (!values.categories) errors.categories = "Enter some categories!";
  if (!values.content)    errors.content    = "Enter some content!";

  /* If erros is empty, the form is fine to submit */
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  validate,
})(
  connect(null, { createPost })(PostsNew)
);
