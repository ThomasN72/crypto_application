
import React, {Component} from "react";
import { Grid, Transition, Image, Input} from "semantic-ui-react";
import API from "../utils/API"
import "./Dashboard.css";
import Segment from "../components/Segment"
import _ from "lodash";

class Dashboard extends Component {
    state = {
        selected: this.props.data,
        purchasePrice: 0,
        sharesBought: 0,
        profit: 0
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render () {
        const dataRendered = _.isEmpty(this.state.historical);
        let propsData = this.props.data
        
        const selected = !_.isEmpty(propsData);
        let profit = 0;
        let purchasePrice = this.state.purchasePrice || 0
        let sharesBought = this.state.sharesBought || 0
        let currentPrice = propsData.priceUsd || 0
        if(purchasePrice && sharesBought)
            profit = parseFloat(parseFloat((purchasePrice - currentPrice)* sharesBought).toFixed(2))
        
        return (
            <Grid columns='five' >
                <Grid.Row className="dashboard">
                    <Grid.Column>
                        <Segment colorInfo="primary" title="Crypto Name">
                            <span className="dashboard-text">{selected && propsData.name}</span>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment colorInfo="secondary" title="Current Price(USD)">
                            <span className="dashboard-text">$ {selected && propsData.priceUsd}</span>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment colorInfo="task" title="Price Bought(USD)">
                        <Input
                            className="input-box"
                            label={{ basic: true, content: '$USD' }}
                            labelPosition='left'
                            placeholder='Enter Price...'
                            name='purchasePrice'
                            value={this.state.purchasePrice}
                            onChange={this.handleInputChange}
                        />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment colorInfo="task" title="Shares">
                        <Input
                            className="input-box"
                            label={{ basic: true, content: 'Shares' }}
                            labelPosition='right'
                            placeholder='Enter shares...'
                            name='sharesBought'
                            value={this.state.sharesBought}
                            onChange={this.handleInputChange}
                        />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment colorInfo="others" title="Earnings (YTD)">
                            <span className="dashboard-text">{`$ ${profit}`}</span>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Dashboard;

