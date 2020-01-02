import React,{Component} from 'react';
import { Menu,Icon } from 'antd';
import GetItem from './item.jsx';
import 'antd/dist/antd.css';

import { Draggable } from 'react-beautiful-dnd';

const {SubMenu} = Menu;

const Drag = Draggable;

export default class Sub extends Component{
    state = {
        activeDrags: 0,
        deltaPosition: {
          x: 0, y: 0
        },
        controlledPosition: {
          x: -400, y: 200
        }
      };

      handleDrag = (e, ui) => {
        const {x, y} = this.state.deltaPosition;
        this.setState({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        });
      };
    
      onStart = () => {
        this.setState({activeDrags: ++this.state.activeDrags});
      };
    
      onStop = () => {
        this.setState({activeDrags: --this.state.activeDrags});
      };
    
      // For controlled component
      adjustXPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {x, y} = this.state.controlledPosition;
        this.setState({controlledPosition: {x: x - 10, y}});
      };
    
      adjustYPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {controlledPosition} = this.state;
        const {x, y} = controlledPosition;
        this.setState({controlledPosition: {x, y: y - 10}});
      };
    
      onControlledDrag = (e, position) => {
        const {x, y} = position;
        this.setState({controlledPosition: {x, y}});
      };
    
      onControlledDragStop = (e, position) => {
        this.onControlledDrag(e, position);
        this.onStop();
      };
    render(){
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        const {deltaPosition, controlledPosition} = this.state;
        var items=[];
    //props.items = JSON.parse(JSON.stringify(props.items));
    this.props.task.itemIds.forEach(element => {
       Object.keys(this.props.items).map(key => {
           if (key===element) {
               items.push(this.props.items[element]);
           }
       });
    });
    console.log(this.props.task);
    // props.task.itemIds.forEach(element => {
        
    //     if (props.items.find(x => x.id===element)!==undefined && props.items.find(x => x.id===element)!==null) {
    //         items.push(props.items.find(x => x.id===element));
    //     }
    // });
    //console.log(items);
    //console.log(props);
        return(
            
  <Drag axis="y" {...dragHandlers}>
        <SubMenu

       
            // onMouseEnter={()=>{
            //     //  props.state.dragState===true ?
            //     //  props.state.openedSubMenus.includes(props.column.id) === true ?
            //     //  props.state.openedSubMenus=props.state.openedSubMenus :
            //     //  props.state.openedSubMenus.push(props.column.id) :
            //     //  props.state.openedSubMenus = props.state.openedSubMenus
            // }}


            onTitleClick={async () => {
                this.props.state.openedSubMenus.includes(this.props.task.id) === true ?
                this.props.state.openedSubMenus.splice((this.props.state.openedSubMenus.indexOf(this.props.task.id)), 1) :
                this.props.state.openedSubMenus.push(this.props.task.id)
            }}

            key={this.props.task.id} {...this.props}
            title={
                <span>
                    <Icon style={{ color: '#1890ff' }} type={
                        //"mail"
                        this.props.task.content === 'Mission 1' ? "mail" :
                        this.props.task.content==='Mission 2' ? "setting" :
                        this.props.task.content==='Mission 3' ? "appstore" :
                        this.props.task.content==='Mission 4' ? "calendar" : ""
                    }
                    />
                    <span>{this.props.task.content}</span>
                </span>
            }
        >
             {items.map((item, index) =><GetItem key={item.id} item={item} index={index} state={this.props.state} />)}
             {this.props.provided}
      
        </SubMenu>
        </Drag>
        );
    }
    
}