import React from 'react';
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native';

import CalendarPicker from 'react-native-calendar-picker';

import moment from 'moment'

export default class Calendar extends React.Component{
    
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      calendarVisible : false,
      date:'',
      month:'',
      year:'',
      finalDate:'',
      currentDate:'',
      daysLeft: ''
    };
    
    
  }

  onDateChange=(date) =>{
    
    this.setState({
      selectedStartDate: date, 
      calendarVisible: false
    });
    
    var startDate =this.state.selectedStartDate ? this.state.selectedStartDate.toString() : '';
    console.log(startDate);

    this.state.month = startDate.substring(4,8).trim();
    console.log(this.state.month);
    this.state.year = startDate.substring(11,15);
    console.log(this.state.year);
    this.state.date = startDate.substring(8,10);
    console.log(this.state.date);

    var month = this.state.month;
    var monthNumber = ''

    switch(month){
      case 'Jan': 
        monthNumber='01'; break;

      case 'Feb': 
        monthNumber='02';break;
      case 'Mar': 
        monthNumber='03'; break;

      case 'Apr': 
        monthNumber='04';break;
      
      case 'May': 
        monthNumber='05';break;

      case 'Jun': 
        monthNumber='06';break;

      case 'July': 
        monthNumber='07';break;

      case 'Aug': 
        monthNumber='08';break;

      case 'Sep': 
        monthNumber='09';break;

      case 'Oct': 
        monthNumber='10';break;

      case 'Nov': 
        monthNumber='11';break;
        
      case 'Dec': 
        monthNumber='12';break;

      default:break;
    }
    console.log(monthNumber);
    var currentDate = moment().format("DD/MM/YYYY");
    var finalDate = monthNumber? (this.state.date+'/'+ monthNumber+'/'+this.state.year ): ''

    var start = currentDate.substring(6)+','+currentDate.substring(3,5)+','+currentDate.substring(0,2);
    var end = finalDate.substring(6)+','+finalDate.substring(3,5)+','+finalDate.substring(0,2);
    
    this.setState({ 
      finalDate: finalDate,
      currentDate: currentDate
    });

    var daysLeft = moment(end).diff(start, 'days');
    console.log(daysLeft);

    this.setState({
      daysLeft:daysLeft
    })
  }
  render() { 
    // const { selectedStartDate } = this.state;
    // const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    
      
    
    return (
      <View style={styles.container}>

        {
          
        }

        <TextInput
          placeholder = {"Select a date "}
          onChangeText = {(text)=>{
            this.setState({
              calendarVisible: true
            })
          }}
          value = {this.state.finalDate}
        />

        <View>
          {
            this.state.calendarVisible ?
            (
              <CalendarPicker
                onDateChange={this.onDateChange}
              />
            )
            :
            null
          }
        </View>
        <Text>
          {this.state.currentDate}
        </Text>
      </View>
    );
  }

      
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});