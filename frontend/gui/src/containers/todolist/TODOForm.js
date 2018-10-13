import React from 'react';

export default class TODOForm extends React.Component {
    render() {
        return (
            <div>
                <form className="form">
                    <input type="input" placeholder="TODO List Title" />
                    <button> Create a new TODO List </button>
                </form>
            </div>
        )
    }
}