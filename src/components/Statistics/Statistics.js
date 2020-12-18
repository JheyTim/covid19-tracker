import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Statistics.module.css';
import { commafy } from '../../util/commafy';

class Statistics extends Component{
    render() {
        const dashboardStats = [
          {
            primary: {
              label: 'Today\'s Cases',
              value: commafy(Math.trunc(this.props.data?.todayCases))
            }
          },
          {
            primary: {
              label: 'Today\'s Deaths',
              value: commafy(Math.trunc(this.props.data?.todayDeaths))
            }
          },
          {
            primary: {
              label: 'Today\'s Recovered',
              value: commafy(Math.trunc(this.props.data?.todayRecovered))
            }
          },
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
                label: 'Total Active',
                value: commafy(Math.trunc(this.props.data?.active))
              },
              secondary: {
                label: 'Per 1 Million',
                value: commafy(Math.trunc(this.props.data?.activePerOneMillion))
              }
            },
            {
              primary: {
                label: 'Total Recovered',
                value: commafy(Math.trunc(this.props.data?.recovered))
              },
              secondary: {
                label: 'Per 1 Million',
                value: commafy(Math.trunc(this.props.data?.recoveredPerOneMillion))
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
            },
            {
              primary: {
                label: 'Total Critical',
                value: commafy(Math.trunc(this.props.data?.critical))
              },
              secondary: {
                label: 'Per 1 Million',
                value: commafy(Math.trunc(this.props.data?.criticalPerOneMillion))
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
                          
                              {secondary ? <p className={classes.TrackerStatSecondary}>
                                  { secondary.value }
                                  <strong> { secondary.label }</strong>
                              </p>: null}
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

export default connect(mapStateToProps)(Statistics);