import React from 'react';
import Card from '../Card';
import workday from '../../assets/images/Work-Day-Scheduler.gif';
import mickey from '../../assets/images/mickey-n-friends.gif';
import passwordGen from '../../assets/images/Password-Generator.gif';

function Portfolio() {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-between'>
      <Card name={"Scheduler"} image = {workday} github = {"https://github.com/senaygebrat/Work-Day-Scheduler"} deployed = {"https://senaygebrat.github.io/Work-Day-Scheduler/"} />
      <Card name={"Mickey N Friends"} image = {mickey} github = {"https://github.com/wseban/Mickey-n-Friends-Finder"} deployed = {"https://wseban.github.io/Mickey-n-Friends-Finder/"} />
      <Card name={"Project 3"} image = {passwordGen} github = {"https://github.com/senaygebrat/Password-Generator"} deployed = {"https://senaygebrat.github.io/Password-Generator/"} />
      <Card name={"Project 4"} image = {workday} github = {"https://github.com/senaygebrat/Work-Day-Scheduler"} deployed = {"https://senaygebrat.github.io/Work-Day-Scheduler/"} />
      <Card name={"Project 5"} image = {workday} github = {"https://github.com/senaygebrat/Work-Day-Scheduler"} deployed = {"https://senaygebrat.github.io/Work-Day-Scheduler/"} />
      <Card name={"Project 6"} image = {workday} github = {"https://github.com/senaygebrat/Work-Day-Scheduler"} deployed = {"https://senaygebrat.github.io/Work-Day-Scheduler/"} />
      </div>
    </div>
  )
}

export default Portfolio
