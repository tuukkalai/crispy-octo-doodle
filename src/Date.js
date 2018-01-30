import React, {Component} from 'react';
import moment from 'moment';

class Date extends Component {
    render() {
        return <div>
            <h1>{moment().format('dddd')}</h1>
            <p>{moment().format('MMMM Do YYYY')}</p>
          </div>;
    }
}

export default Date;
