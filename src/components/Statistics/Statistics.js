import React, { Component } from 'react';
import { initStat } from '../../store/actions/covid19';
import { connect } from 'react-redux';
import classes from './Statistics.module.css';

class Statistics extends Component{

    componentDidMount() {
        this.props.onInitStat();
    }

    commafy = (value) => {
        let numberString = `${value}`;
      
        numberString = numberString.split('');
      
        numberString.reverse();
      
        numberString = numberString.reduce((prev, current, index) => {
            const shouldComma = (index + 1) % 3 === 0 && index + 1 < numberString.length;
            let updatedValue = `${prev}${current}`;
            if ( shouldComma ) {
                updatedValue = `${updatedValue},`;
            }
            return updatedValue;
        }, '');
      
        numberString = numberString.split('');
        numberString.reverse()
        numberString = numberString.join('');
      
        return numberString;
    }

    render() {
        const dashboardStats = [
            {
              primary: {
                label: 'Total Cases',
                value: this.commafy(Math.trunc(this.props.data?.cases))
              },
              secondary: {
                label: 'Per 1 Million',
                value: this.commafy(Math.trunc(this.props.data?.casesPerOneMillion))
              }
            },
            {
              primary: {
                label: 'Total Deaths',
                value: this.commafy(Math.trunc(this.props.data?.deaths))
              },
              secondary: {
                label: 'Per 1 Million',
                value: this.commafy(Math.trunc(this.props.data?.deathsPerOneMillion))
              }
            },
            {
              primary: {
                label: 'Total Tests',
                value: this.commafy(Math.trunc(this.props.data?.tests))
              },
              secondary: {
                label: 'Per 1 Million',
                value: this.commafy(Math.trunc(this.props.data?.testsPerOneMillion))
              }
            }
        ];

        let stat = null;

        if (!this.props.loading) {
          stat = (
            <div className={classes.TrackerStats}>
                <ul className={classes.List}>
                  { dashboardStats.map(({ primary = {}, secondary = {} }, i) => {
                      return (
                      <li key={`Stat-${i}`} className={classes.TrackerStat}>
                              <p className={classes.TrackerStatPrimary}>
                                  { primary.value }
                              </p>
                              <strong>{ primary.label }</strong>
                          
                          
                              <p className={classes.TrackerStatSecondary}>
                                  { secondary.value }
                                  <strong> { secondary.label }</strong>
                              </p>
                      </li>
                      );
                  })}
                </ul>
            </div>
          )
        }
        
        return stat
    }
}

const mapStateToProps = state => {
    return {
      data: state.statistics,
      loading: state.loading
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      onInitStat: () => dispatch(initStat())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);