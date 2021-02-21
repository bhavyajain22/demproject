import * as React from 'react';
import { Text, View, StyleSheet, Modal, Button } from 'react-native';
import Date from './Date';

class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      show:false
    }
  }
  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       Date
      </Text>
      <Button title='Set Date' onPress={()=>{this.setState({show:true})}}/>
      <Modal
      transparent={true}
      visible={this.state.show}>
      <View style = {{backgroundColor:'000000aa', flex:1}}>
      <View style={{backgroundColor:'#ffffff', margin:50, padding:40, borderRadius:10, flex:1}}>
      <Date/>
      <Button title='Submit' onPress={()=>{this.setstate({show:false})}}/>
      </View>
      </View>
      </Modal>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop: 100,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default App;
