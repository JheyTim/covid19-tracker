import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import { connect } from 'react-redux';
import classes from './Graph.module.css';
import { initGraph } from '../../store/actions/covid19';

class Graph extends Component {

    componentDidMount() {
        this.props.onInitGraph()
    }

    render () {
        let state = {
            cases: {
                labels: this.props.data.cases ? Object.getOwnPropertyNames(this.props.data.cases) : [],
                datasets: [
                {
                    label: 'Cases',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(13,46,166,751)',
                    borderColor: 'rgba(44,0,0,1)',
                    borderWidth: 2,
                    data: this.props.data.cases ? Object.values(this.props.data.cases) : [],
                }
                ]
            },
            deaths: {
                labels: this.props.data.cases ? Object.getOwnPropertyNames(this.props.data.cases) : [],
                datasets: [
                {
                    label: 'Deaths',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(13,46,166,751)',
                    borderColor: 'rgba(44,0,0,1)',
                    borderWidth: 2,
                    data: this.props.data.cases ? Object.values(this.props.data.deaths) : [],
                }
                ]
            },
            recovered: {
                labels: this.props.data.cases ? Object.getOwnPropertyNames(this.props.data.cases) : [],
                datasets: [
                {
                    label: 'Recovered',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(13,46,166,751)',
                    borderColor: 'rgba(44,0,0,1)',
                    borderWidth: 2,
                    data: this.props.data.cases ? Object.values(this.props.data.recovered) : [],
                }
                ]
            }
        }

        let graph = null;
        if (!this.props.loading) {
            graph = (
                <div className={classes.GraphContainer}>
                    <Line data={state.cases} 
                    options={{
                        title:{
                            display:true,
                            text:'Cases',
                            fontSize:20
                        },
                        legend:{
                            display: false
                        }
                    }}/>
                    <Line data={state.deaths} 
                    options={{
                        title:{
                            display:true,
                            text:'Deaths',
                            fontSize:20
                        },
                        legend:{
                            display: false,
                        }
                    }}/>
                    <Line data={state.recovered} 
                    options={{
                        title:{
                            display:true,
                            text:'Recovered',
                            fontSize:20
                        },
                        legend:{
                            display: false,
                        }
                    }}/>
                </div>
            )
        }
        return graph;
    }
};

const mapStateToProps = state => {
    return {
      data: state.graphData,
      loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitGraph: () => dispatch(initGraph())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);