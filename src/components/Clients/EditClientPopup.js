import React, { Component } from 'react';

class EditClientPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.clientInfo.name,
            surname: this.props.clientInfo.surname,
            country: this.props.clientInfo.country
        }
    }

    bindInput = (e) => this.setState({ [e.target.name]: e.target.value })

    updateClient = () => this.props.update(this.state)

    render() {
        let styleClass = this.props.show ? 'modal display-block' : 'modal display-none'
        return (
            <div className={styleClass}>
                <section className="modal-main">
                    <button id='close-popup-btn' onClick={this.props.close}>&times;</button>
                    <p><span>Name: </span><input type='text' value={this.state.name} name='name' onChange={this.bindInput}></input></p>
                    <p><span>Surname: </span><input type='text' value={this.state.surname} name='surname' onChange={this.bindInput}></input></p>
                    <p><span>Country: </span><input type='text' value={this.state.country} name='country' onChange={this.bindInput}></input></p>
                    <button id='update-client-btn' onClick={this.updateClient}>UPDATE</button>
                </section>
            </div>
        );
    }
}

export default EditClientPopup;