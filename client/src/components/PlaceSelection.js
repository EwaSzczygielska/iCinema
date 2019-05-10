import React from 'react';
import { connect } from 'react-redux';

class PlaceSelection extends React.Component 
{
    constructor() {
        super();
        this.state = {
            place: [
                'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10',
                'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10',
                'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10',
                'D1', 'D2', 'D3', 'D4', 'D5', 'C6', 'C7', 'C8', 'C9', 'C10',
                'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10',
                'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
            ],
            placeAvailable: [
                'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10',
                'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10',
                'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10',
                'D1', 'D2', 'D3', 'D4', 'D5', 'C6', 'C7', 'C8', 'C9', 'C10',
                'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10',
                'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8'
            ],
            placeChecked: [],
            placeReserved: ['F9', 'F10']
        }
    }

    onClickChoice(place) {
        if (this.state.placeReserved.indexOf(place) === -1) {
            if (this.state.placeChecked.indexOf(place) > -1) {
                this.setState({
                    placeAvailable: this
                        .state
                        .placeAvailable
                        .concat(place),
                    placeChecked: this
                        .state
                        .placeChecked
                        .filter(res => res !== place)
                })
            } else {
                this.setState({
                    placeChecked: this
                        .state
                        .placeChecked
                        .concat(place),
                    placeAvailable: this
                        .state
                        .placeAvailable
                        .filter(res => res !== place)
                })
            }
        }
    }

    render() {
        return (
            <div> 
                <h1> Select your place! </h1> 
                <ChairGrid place={this.state.place}
                          available={this.state.placeAvailable}
                          reserved={this.state.placeReserved}
                          checked={this.state.placeChecked}
                          onClickChoice={this.onClickChoice.bind(this)}/> 
            </div>
        )
    }
}
    
class ChairGrid extends React.Component
{
    render() {
        return (
            <div className = "cinema">
                        <div className = "chairgrid">
                            {this.props.place.map(row => 
                                <div className={this.props.checked.indexOf(row) > -1 ?'chairchecked' :
                                               this.props.available.indexOf(row) > -1 ?'chairavailable' :'chairreserved'}
                                    //key={row}
                                    onClick={ e => this.onClickPlace(row)}>
                                    <span> {row} </span>
                                </div>)
                            } 
                        </div>
                <CheckedList checked={this.props.checked} /> 
            </div> 
        )
    }
                        
    onClickPlace(place) {
        this.props.onClickChoice(place);
    }
}
                                    
class CheckedList extends React.Component
{
    render() {
        return ( 
            <div>
                <h4> Your chairs: </h4>
                <div> {this.props.checked.map(res => 
                    <span key={res} className='seats'>
                        {res}
                    </span>)}  
                </div> 
                <h4>The number of tickets: {this.props.checked.length} </h4>
            </div>
        )
    }
}
                            
export default connect(null)(PlaceSelection);