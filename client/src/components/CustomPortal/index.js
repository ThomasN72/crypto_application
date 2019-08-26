import React, { Component } from "react";
import "./style.css";
import { Button, Grid, Header, Segment, Portal } from "semantic-ui-react"

export default class  CustomPortal extends Component {
    state = {
      open: true,
    }
  
    handleOpen = () => {
      this.setState({ open: true })
    }
  
    handleClose = () => {
      this.setState({ open: false })
    }

    render() {
        let themeColor;
        
        switch (this.props.messageTypes){
            case "info":
                themeColor = "blue";
                break;
            case "warn":
                themeColor = "yellow";
                break;
            case "error":
                themeColor = "red";
                break;
            default:
                themeColor = "";
        }

        return (
            <Grid columns={2}>
                <Grid.Column>
                    <Portal
                        onClose={this.handleClose}
                        open={this.state.open}
                    >
                        <Segment className="portal-segment" color={themeColor}>
                            <Header>
                                {this.props.messageTypes}
                                <Button
                                    icon="close"
                                    onClick={this.handleClose} 
                                    className="portal-button"
                                >
                                </Button>
                            </Header>
                            <p>{this.props.message}</p>
                        </Segment>
                    </Portal>
                </Grid.Column>
            </Grid>
        )
    }
}
  

