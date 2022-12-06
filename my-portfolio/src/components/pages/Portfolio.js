import React from 'react';
import Card from '../Card';
import workday from '../../assets/images/Work-Day-Scheduler.gif';
import mickey from '../../assets/images/mickey-n-friends.gif';
import passwordGen from '../../assets/images/Password-Generator.gif';
import weather from '../../assets/images/Weather-Dashboard.gif';
import codingQ from '../../assets/images/Coding-Quiz.gif';
import horiseon from "../../assets/images/horiseon.png";

function Portfolio() {
  return (
    <div className='pjs'>
    <div className='container'>
      <div className='row d-flex justify-content-between'>
      <Card name={"Scheduler"} image = {workday} github = {"https://github.com/senaygebrat/Work-Day-Scheduler"} deployed = {"https://senaygebrat.github.io/Work-Day-Scheduler/"} />
      <Card name={"Mickey Finder"} image = {mickey} github = {"https://github.com/wseban/Mickey-n-Friends-Finder"} deployed = {"https://wseban.github.io/Mickey-n-Friends-Finder/"} />
      <Card name={"Generator"} image = {passwordGen} github = {"https://github.com/senaygebrat/Password-Generator"} deployed = {"https://senaygebrat.github.io/Password-Generator/"} />
      <Card name={"Weather"} image = {weather} github = {"https://github.com/senaygebrat/Weather-Dashboard"} deployed = {"https://senaygebrat.github.io/Weather-Dashboard/"} />
      <Card name={"Coding Quiz"} image = {codingQ} github = {"https://github.com/senaygebrat/Code-Quiz"} deployed = {"https://senaygebrat.github.io/Code-Quiz/"} />
      <Card name={"Horiseon"} image = {horiseon} github = {"https://github.com/senaygebrat/Horiseon-access"} deployed = {"https://senaygebrat.github.io/Horiseon-access//"} />
      </div>
    </div>
    </div>
  )
}

export default Portfolio
