import React, { Component } from 'react';

class ShowClientsBlock extends Component {
    showClientsBlock = (e) => {
        if (this.props.showFrom === 0 && e.target.id === '-') return;
        if (e.target.id === '-') this.props.showClientsBlock(this.props.showFrom-20)
        else this.props.showClientsBlock(this.props.showFrom+20)
    }

    render() {
        return (
            <div id='show-clients'>
                <span className='show-clients-arrows' onClick={this.showClientsBlock}><i id='-' className="fas fa-arrow-left"></i></span>
                <span> {this.props.showFrom} - {this.props.showFrom + 20} </span>
                <span className='show-clients-arrows' onClick={this.showClientsBlock}><i id='+' className="fas fa-arrow-right"></i></span>
            </div>
        );
    }
}

export default ShowClientsBlock;