import React from 'react';
import { Input } from 'native-base';

export default class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { placeholder: props.text.length == 0  }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    this.setState({ placeholder: ev.nativeEvent.text.length == 0 }); 
    //this.props.onChange && this.props.onChange(ev); 
  }
  render() {
    const { placeholderStyle, style, ...rest } = this.props;
    return(
      <Input 
        {...rest} 
        onChange={this.handleChange}
        style={this.state.placeholder ? [style, placeholderStyle] : style}
      />
    );
  }
}