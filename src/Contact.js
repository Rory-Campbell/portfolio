import React, {Component} from 'react';
import './Contact.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

class Contact extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <div className="container contact">
                        <h1>Get In Touch</h1>
                            <div className="email">
                                <EmailIcon fontSize='large'/>
                                <h3>EMAIL</h3>
                                <p>rorycampbell345@gmail.com</p>
                            </div>
                            <div className="phone">
                                <PhoneIphoneIcon fontSize='large'/>
                                <h3>PHONE</h3>
                                <p>0412486453</p>


                            </div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
        )
    }

}

export default Contact; 