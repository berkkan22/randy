import React, { Component } from 'react'
import './Table.css';

export default class Table extends Component {
    render() {
        return this.props.table.map(colum => (
                <tr>
                  <td className="first">{colum.first}</td>
                  <td className="second">{colum.second}</td>
                </tr>
        ));
    }
}
