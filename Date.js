import React, { Component } from 'react';
import { Keyboard } from 'react-native';

import { View, Container, Content, Item, Input, Label,Form } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';


import "@expo/vector-icons";

export default class Date extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      value: '',
      mode: 'date',
      displayFormat: 'DD/MM/YYYY',
      label: 'Date',
    };
  }

  showDateTimePicker = () => {
   
    this.setState({ show: true });
    Keyboard.dismiss();
  };

  hideDateTimePicker = () => {
    this.setState({ show: false });
  };

  handleDatePicked = value => {
    this.setState({ value: value });
    setTimeout(() => {
      this.hideDateTimePicker();
    }, 250);
  };

  render() {
    const {label, value, show, mode, displayFormat} = this.state;
    return (
      <Container avoidKeyboard> 
        
        <Content padder>
        <Form onPress={this.showDateTimePicker}>
          <Item floatingLabel onKeyPress={this.showDateTimePicker}>
            
            <Input caretHidden   value={value ? moment(value).format(displayFormat) : ''} onFocus={this.showDateTimePicker} />
          <Label>{label}</Label>
          </Item>
          <DateTimePicker
            date={value ? new Date(value) : new Date()}
            isVisible={show}
            mode={mode}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
          </Form>
        </Content>
      </Container>
    );
  }
}