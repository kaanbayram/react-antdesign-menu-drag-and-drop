import React from 'react';

import styled from 'styled-components';
import Task from './task';
import { Droppable,Draggable } from 'react-beautiful-dnd';

import {Menu,Icon} from 'antd';

import 'antd/dist/antd.css';

const {SubMenu} = Menu;

const Container = styled.div`
    //margin: 8px;
    //border: 1px solid lightgrey;
    //border-radius: 2px;
    width:250px;

    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding:8px;
`;
const TaskList = styled.div`
    //padding:8px;
    //transition: backgroun-color 0.2s ease;
    // background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')}
    //flex-grow: 1;
    //min-height: 100px;
`;



const Men = (props) => {
   // console.log(props);
    return (
        <Menu
        
            // onMouseEnter={()=>{
            //     //  props.state.dragState===true ?
            //     //  props.state.openedSubMenus.includes(props.column.id) === true ?
            //     //  props.state.openedSubMenus=props.state.openedSubMenus :
            //     //  props.state.openedSubMenus.push(props.column.id) :
            //     //  props.state.openedSubMenus = props.state.openedSubMenus
            // }}
            {...props}
            key={props.column.id}
            onTitleClick={async () => {
                props.state.openedSubMenus.includes(props.column.id) === true ?
                props.state.openedSubMenus.splice((props.state.openedSubMenus.indexOf(props.column.id)), 1) :
                props.state.openedSubMenus.push(props.column.id)
            }
            }
            title={
                <span>
                    <Icon style={{ color: '#1890ff' }} type={
                        props.column.title === 'Options 1' ? "mail" :
                        props.column.title==='Options 2' ? "setting" :
                        props.column.title==='Options 3' ? "appstore" :
                        props.column.title==='Options 4' ? "calendar" : ""} />
                    <span>{props.column.title}</span>
                </span>
            }
        >
            {props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
        {props.provided}
    </Menu>
    );
  }

export default class MenuComponent extends React.Component {

    render() {

        return (
            <Draggable
                draggableId={this.props.column.id}
                index={this.props.index}
            >
                {(provided) => (
                    <Container
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    >

                        <Droppable droppableId={this.props.column.id} type="task">
                            {(provided, snapshot) => (
                                <TaskList
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    isDraggingOver={snapshot.isDraggingOver}
                                >
                                    {/* <Menu
                                 mode="inline"
                                 style={{borderStyle:'solid',borderColor:'blue',borderWidth:'0.5px'}}
                                >
                                {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
                                {provided.placeholder}
                                </Menu> */}
                                    <Sub provided={provided.placeholder} {...this.props} manageSubMenuState={this.manageSubMenuState} />
                                </TaskList>
                            )}
                        </Droppable>
                    </Container>
                )}

            </Draggable>
        )
    }
}