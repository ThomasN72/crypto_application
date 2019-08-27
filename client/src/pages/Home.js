import React, {Component} from "react";
import { Message, Icon, Form, Container, Grid} from "semantic-ui-react";
import API from "../utils/API"
import "./Home.css";
import TableList from "../components/TableList"
import Graph from "../components/Graph"
import { dom } from '@fortawesome/fontawesome-svg-core'
import _ from "lodash";
import Dashboard from "./Dasboard"
import moment from "moment";
dom.watch() // This will kick of the initial replacement of i to svg tags and configure a MutationObserver

class Home extends Component {
    state = {
        crytos: [],
        selected: {},
        historical: [],
        profit: null
    }

    getDataAttribute = (data) =>    {
        let crytoClicked = data.target.parentNode.dataset.name;

        if(crytoClicked){
            let newSelected = this.state.crytos.filter(crypto => crypto.name === crytoClicked )
            if(newSelected.length > 0)
                this.setState({selected: newSelected[0]}, () => this.getHistoricalPrices(this.state.selected.name))
        }
    }

    getHistoricalPrices = (crypto) => {
        API.getCrytoHistoricalAPI(crypto).then(
            crypto => {
                this.setState({historical: crypto.data})
            }
        )
    }

    componentDidMount = () => {
        API.getCrytosAPI().then(
            crytos => 
                {
                    let formatList = crytos.data.data.map(crypto => ({
                        id: crypto.id,
                        name: crypto.name,
                        last_updated: moment(crypto.last_updated, moment.ISO_8601).format("MM-DD-YYYY"),
                        priceUsd: parseFloat(parseFloat(crypto.quote.USD.price).toFixed(2)),
                        market_cap: parseFloat(parseFloat(crypto.quote.USD.market_cap).toFixed(2)),
                    }))
                    let selectedCrypto;
                    this.setState({crytos: formatList, selected: formatList[0]}, () => {
                        return selectedCrypto = this.state.selected
                    })
                    return selectedCrypto
                }
        ).then(selected => 
            this.getHistoricalPrices(selected.name)
        ).catch(err => console.log('err', err))
    }

    render () {
        const selected = !_.isEmpty(this.state.selected);
        const crytosRendered = this.state.crytos.length > 0;
        const dataRendered = _.isEmpty(this.state.historical);
        let graphData = [];
        if(!dataRendered){
            graphData = this.state.historical.data.map(
                data => ({
                    x: moment(data.date, moment.ISO_8601).format("MM-DD-YYYY"), 
                    y: parseFloat(parseFloat(data.priceUsd).toFixed(2))
                })
            )
        }
        
        return (
            <Container className="home-container">
                <div className="title">Dashboard</div>
                {selected && <Dashboard data={this.state.selected}/>}
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={6}>
                        <Graph 
                            data={graphData}
                            title="Market Summary (Historical)"
                        />
                        </Grid.Column>
                        <Grid.Column width={9} onClick={this.getDataAttribute}>
                            {crytosRendered && <TableList >{this.state.crytos}</TableList>}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

export default Home;

