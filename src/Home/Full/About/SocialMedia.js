import React, { Component } from 'react'

import './SocialMedia.css';

import Icon from './Icon.js';

export default class SocialMedia extends Component {
    render() {
        return this.props.socialIcons.map(icon =>(
            <a href={icon.href} target="_blank">
                <Icon icon={icon.icon}/>
            </a>
            ));
    }
}
