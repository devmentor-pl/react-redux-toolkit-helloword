import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { actions } from './reducers';

import Form from './Form'

class App extends React.Component {
    handleIncrease = event => {
        console.log('increase');
        this.props.onIncrease();
    }
    render() {
        const { counter } = this.props;
        return (
            <section>
                { counter }
                <button onClick={ this.handleIncrease }>
                    increase
                </button>
                <Form />
            </section>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        counter: state.counter,
    }
}

const mapActionToProps = {
    onIncrease: actions.increase, // przypisujemy akcję!
};

export default connect(mapStateToProps, mapActionToProps)(App);
