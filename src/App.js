
import './App.css';
import React from 'react';
import VirtualSelect from './Virtual-Select.js';

export default class SampleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  
  render() {
    
    const options = [
      { label: 'hyderabad', value: '1' },
      { label: 'chennai', value: '2' },
      { label: 'delhi', value: '3' },
      { label: 'mumbai', value: '4' },
      { label: 'jaipur', value: '5' },

    ];

    return (
      <div >
      <p>select your favourite cities in india</p>
      <form  >
      <VirtualSelect 
          options={options}
          onChange={this.handleChange}
          multiple="true"
        />
        
      </form>
      </div>
    );
  }
}
