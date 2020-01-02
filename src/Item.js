import React,{Component} from 'react';
import { Menu,Icon } from 'antd';
import 'antd/dist/antd.css';


export default class Item extends Component {

    render(){
        return(
            <Menu.Item
            key={this.props.item.id} {...this.props}
        >
            {this.props.item.content}
            </Menu.Item>
        );
    }
}