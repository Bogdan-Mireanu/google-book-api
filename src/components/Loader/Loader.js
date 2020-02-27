import React, {Component} from 'react';
import './loader.css';

export default class Loader extends Component{
    
    render() {
        return (
            <div>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        );
    }
}