import React, { Component } from 'react'
import axios from 'axios'

import './App.css';
import { API_KEY } from './const'
import Holiday from './Views/Holiday'
import NoHoliday from './Views/NoHoliday'


const CALENDAR = `https://calendarific.com/api/v2/holidays?&api_key=${API_KEY}&country=US&year=2019&month=12&day=25`

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      holiday: []
    }
  }
  componentDidMount() {
    axios.get(CALENDAR).then((res) => {
      console.log(res.data)
      if (res.data.response.holidays.length >= 1) {
        this.setState({
          holiday: res.data.response.holidays
        })
      }
    }).then((err) => {
      console.log(err)
    }).then(console.log("Well that happened"))
  }

  renderView() {
    if (this.state.holiday.length >= 1) {
      return <Holiday holiday={this.state.holiday} />
    } else {
      return <NoHoliday />
    }
  }

  render() {
    console.log(this.state.holiday)
    return (
      <div>
        {this.renderView()}
      </div>
    )
  }
}