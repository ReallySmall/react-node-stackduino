import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from 'css/components/_contact';
import { Link } from 'react-router';
import Image from 'components/Image';
import Loading from 'components/Loading';
import Error from 'components/Error';

const cx = classNames.bind(styles);

const mailApi = axios.create({
  timeout: 10000
});

export default class Contact extends Component {

  constructor(props) {
    super(props);    
    this.state = {
      submission: 'inactive',
      email: '', 
      message: '',
      page: this.props.location
    };
    this.setState = this.setState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(key) {
    return function (event) {
      var state = {};
      state[key] = event.target.value;
      this.setState(state);
    }.bind(this);
  }

  handleSubmit(event) {

    event.preventDefault();

    this.setState({submission: 'sending'});

    mailApi.post('/api/mail', this.state)
      .then(response => {
        if(response.data.statusCode >= 400){
          this.setState({submission: 'error', email: '', message: ''});
          this.resetForm();       
        } else {
          this.setState({submission: 'success', email: '', message: ''});
          this.resetForm();
        }
      })
      .catch(error => {
        this.setState({submission: 'error', email: '', message: ''});
        this.resetForm();        
      });

  }

  resetForm(){

    setTimeout(() => {
      this.setState({ submission: 'inactive' });
    }, 5000);

  }

  render(){

    return (
      <div className={cx('inset-wrapper', 'contact')}>
        <div className={cx('panel', 'form')}>
          <section>
            <h3 className={cx('panel-header')}>Contact</h3>
            {this.state.submission === 'inactive' &&
              <form onSubmit={this.handleSubmit}>
                <fieldset>
                  <div className={cx('form-row')}>
                    <label htmlFor="contact-message">Your message*</label>
                    <textarea id="contact-message" ref="message" name="message" placeholder="Ask a question or leave feedback" maxLength="500" required="required" value={this.state.message} onChange={this.handleChange('message')} />
                  </div>
                  <div className={cx('form-row')}>
                    <label htmlFor="contact-email">Your email*</label>
                    <input id="contact-email" type="email" name="email" required="required" placeholder="Email" maxLength="100" value={this.state.email} onChange={this.handleChange('email')} />
                  </div>
                </fieldset>
                <button type="submit">Send <span className={cx('fa', 'fa-arrow-circle-right')}></span></button>
              </form>
            }
            {this.state.submission === 'sending' &&
              <Loading message="Sending message..." />
            }
            {this.state.submission === 'error' &&
              <Error message="Error sending message." />
            }
            {this.state.submission === 'success' &&
              <p>Sent successfully, thanks for your message!</p>
            }
          </section>
        </div>
      </div>
    )
  }

};

Contact.propTypes = {
  location: PropTypes.string.isRequired
};
