import React, { Component } from 'react';
import "./style.css";
import { Button, Grid, Message, Menu, Icon, Header, Table, Segment} from 'semantic-ui-react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryVoronoiContainer} from "victory";



const Graph = (props) => {
      
    return (
        <Segment.Group className="graph">
            <Segment id="chart-title">
                {props.title}
            </Segment>
            <Segment>
            <VictoryChart 
            theme={VictoryTheme.material}
            containerComponent={
                <VictoryVoronoiContainer
                  labels={(d) => `${d.datum.x}, $${d.datum.y}`}
                />
            }
            
            >

<VictoryAxis 
    // width={400}
    // height={400}
    // domain={[-10, 10]}
    theme={VictoryTheme.material}
    standalone={false}
    style={{
                        
        tickLabels: {fontSize: 5, padding: 5}
      }}
  />
  <VictoryAxis dependentAxis crossAxis
    // width={400}
    // height={400}
    // domain={[-10, 10]}
    theme={VictoryTheme.material}
    standalone={false}
    style={{
                        
        tickLabels: {fontSize: 8, padding: 5}
      }}
  />
                
                  {/* <VictoryAxis 
                      style={{
                        
                        tickLabels: {fontSize: 5, padding: 5}
                      }}
                /> */}
               
                <VictoryLine
                    style={{
                        data: { fill: "tomato", opacity: 0.7, stroke: "#4e73df" },
                        parent: { border: "10px solid #ccc", fontSize: 2},
                    }}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}
                    data={props.data}
                    scale={{x: "time", y: "linear"}}
                    width={300} height={300}
                    padding={{ left: 80, right: 100 }}
                />
            </VictoryChart>
            </Segment>
        </Segment.Group>
    )
};

export default Graph;