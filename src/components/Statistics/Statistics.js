import React, { Component } from 'react';
import { initStat } from '../../store/actions/covid19';
import { connect } from 'react-redux';
import classes from './Statistics.module.css';
import { commafy } from '../../util/commafy';

class Statistics extends Component{

    componentDidMount() {
        this.props.onInitStat();
    }

    render() {
        const dashboardStats = [
            {
              primary: {
                label: 'Total Cases',
                value: commafy(Math.trunc(this.props.data?.cases))
              },
              secondary: {
                label: 'Per 1 Million',
                value: commafy(Math.trunc(this.props.data?.casesPerOneMillion))
              }
            },
            {
              primary: {
                label: 'Total Deaths',
                value: commafy(Math.trunc(this.props.data?.deaths))
              },
              secondary: {
                label: 'Per 1 Million',
                value: commafy(Math.trunc(this.props.data?.deathsPerOneMillion))
              }
            },
            {
              primary: {
                label: 'Total Tests',
                value: commafy(Math.trunc(this.props.data?.tests))
              },
              secondary: {
                label: 'Per 1 Million',
                value: commafy(Math.trunc(this.props.data?.testsPerOneMillion))
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