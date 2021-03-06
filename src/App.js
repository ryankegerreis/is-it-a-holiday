import React, { Component } from 'react'
import axios from 'axios'

import './App.css';
import { API_KEY } from './const'
import Holiday from './Views/Holiday'
import NoHoliday from './Views/NoHoliday'

const today = new Date()
const day = today.getDate()
const month = today.getMonth() + 1
const year = today.getFullYear()

const CALENDAR = `https://calendarific.com/api/v2/holidays?&api_key=${API_KEY}&country=US&year=2019&month=${month}&day=${day}`

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      holiday: []
    }
  }
  componentDidMount() {
    console.log(day, month, year)
    axios.get(CALENDAR).then((res) => {
      // console.log(res.data)
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
    return (
      <div>
        {this.renderView()}
      </div>
    )
  }
}