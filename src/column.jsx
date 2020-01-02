import React from 'react';

import styled from 'styled-components';
import Task from './task';
import Draggable from 'react-draggable';
import { Droppable } from 'react-beautiful-dnd';
import { Scrollbars } from 'react-custom-scrollbars';

import GetItem from './item.jsx';

import { Menu, Icon,Button,Popover,Input,Form } from 'antd';

import 'antd/dist/antd.css';
const Drag = Draggable; 
const { SubMenu } = Menu;

const Container = styled.div`
    //margin: 8px;
    //border: 1px solid lightgrey;
    //border-radius: 2px;

    // width:250px;
  //position:static;
    // display: flex;
    // flex-direction: column;
`;
const Container2 = styled.div`
    //margin: 8px;
    //border: 1px solid lightgrey;
    //border-radius: 2px;

    // width:250px;
    //position:fixed;
    //top:400px;
    // display: flex;
    // flex-direction: column;
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

    // border-style:solid;
    // border-color:blue;
    // height:inherit;
    height:inherit;
    //position: ${props => (props.onDragEnter ? 'relative' : 'fixed')}
    //position:fixed;
    //top:200px
    //z-index:0
`;

const TaskList2 = styled.div`
    //padding:8px;
    //transition: backgroun-color 0.2s ease;
    // background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')}
    //flex-grow: 1;
    //min-height: 100px;

    //border-top-height:'inherit'+3;
    border-style:solid;
    height:inherit;
    border-color:#e8e8e8;
    border-width:0.5px;
    background-color:#f5f5f5;
    box-shadow: 1px 1px 1px 1px #e8e8e8;

    border-radius:10px;

    //position: ${props => (props.onDragEnter ? 'relative' : 'fixed')}
    //position:absolute;
    //top:400px;
    //z-index:0
`;



const Sub = (props) => {
  //console.log(props.column.id);
  //console.log(props);
  const dragHandlers=props.dragHandlers;
  if (props.column.id==='column-1') {
    return (
      
      <Menu

        openKeys={props.state.openedSubMenus}

        // onMouseEnter={()=>{
        //     //  props.state.dragState===true ?
        //     //  props.state.openedSubMenus.includes(props.column.id) === true ?
        //     //  props.state.openedSubMenus=props.state.openedSubMenus :
        //     //  props.state.openedSubMenus.push(props.column.id) :
        //     //  props.state.openedSubMenus = props.state.openedSubMenus
        // }}
        
        open
        {...props}
        key={props.column.id}
        mode="inline"
        style={{ height: '90vh', width: '325px',zIndex: 0,overflowY:'auto',overflowX:'hidden'}}
      >
        
        {props.tasks.map((task, index) =>
      //  <Draggable axis="y" {...dragHandlers}>
      
          <Task  key={task.id} dispatch={props.dispatch} task={task} index={index} items={props.items} state={props.state} />
          // </Draggable>
        )}
        {props.provided}
      </Menu>
    );
  }
  // if (props.column.id==='column-2') {
  //   console.log(props);
  //   return (
  //     <Menu
  //       openKeys={props.state.openedSubMenus}
  //       // onMouseEnter={()=>{
  //       //     //  props.state.dragState===true ?
  //       //     //  props.state.openedSubMenus.includes(props.column.id) === true ?
  //       //     //  props.state.openedSubMenus=props.state.openedSubMenus :
  //       //     //  props.state.openedSubMenus.push(props.column.id) :
  //       //     //  props.state.openedSubMenus = props.state.openedSubMenus
  //       // }}
  //       open
  //       {...props}
  //       key={props.column.id}
  //       mode="inline"
  //       style={{ height: 'inherit', width: '300px', margin: '10px', zIndex: 0 }}
  //     >
  //       {props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} items={props.items} state={props.state} />)}
  //       {props.provided}
  //     </Menu>
  //   );
  // }

  if (props.column.id==='column-2') {
    //console.log(props);
    //console.log(props);
    var items = [];
    props.column.itemIds.forEach(element => {
      Object.keys(props.items).map(key => {
        if (key === element) {
          items.push(props.items[element]);
        }
      });
    });
    return (
      <Menu
        openKeys={props.state.openedSubMenus}
        onClick={(key,item)=> global.key=key}
        // onMouseEnter={()=>{
        //     //  props.state.dragState===true ?
        //     //  props.state.openedSubMenus.includes(props.column.id) === true ?
        //     //  props.state.openedSubMenus=props.state.openedSubMenus :
        //     //  props.state.openedSubMenus.push(props.column.id) :
        //     //  props.state.openedSubMenus = props.state.openedSubMenus
        // }}
        open
        {...props}
        key={props.column.id}
        mode="inline"
        style={{ height: '250px', width: '330px', margin: '10px', zIndex: 0,overflowY:'auto',overflowX:'hidden'}}
      >
       
        <SubMenu key='constant' expandIcon={<div></div>} style={{marginTop:'-55.5px',padding:'-50px',width:'inherit'-1,marginLeft:'-15.5px',marginRight:'-14px'}}>
       
         {items.map((item, index) =><GetItem key={item.id} item={item} index={index} state={props.state} />)}
        
         </SubMenu>
        {props.provided}

      </Menu>
    );
  }
  
 }


export default class Column extends React.Component {

  constructor(props){
    super(props);
    this.onChangeKey = this.onChangeKey.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.Delete = this.Delete.bind(this);
  }
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    },
    id:'',
    content:'',
  };

 

  onChangeKey(e){
    //console.log(e.target.value);
    this.setState({id:e.target.value});
  }
  onChangeText(e){
    //console.log(e.target.value);
    this.setState({content:e.target.value});
  }

  onSubmitItem(props){
    //console.log(props);
    props.state.items[this.state.id] = {id:this.state.id,content:this.state.content}
    //console.log(props.state.items);
    var columns = props.state.columns;
    columns['column-2'].itemIds.push(this.state.id);
    this.dispatch('CHANGE_DATA',{columns:columns});
    this.setState({
      id:'',
      content:'',
    });
  }

  dispatch(type, payload) {
    this.props.dispatch({
        type: type,
        payload: payload
    });
}

  optionalPortal2(styles, element) {
    if (styles.draggableProps.style.position === 'fixed') {
      // return ReactDOM.createPortal(
      //     element,
      //     _dragEl,
      // );
      styles.draggableProps.style.position = 'static';
      styles.draggableProps.style.zIndex = 10;
      return element;
    }
    return element;
  }

  async Delete(){
    console.log(this.props.column);
    
    var empty = await this.props.state.columns;
    console.log(empty);
    for ( let index = await 0; await index < empty['column-2'].itemIds.length; await index++) {
      console.log(empty[index]);
      console.log(global.key.key);
      //console.log(global.key,this.props.state,this.props);

      if ( await empty['column-2'].itemIds[index] === global.key.key) {
        await empty['column-2'].itemIds.splice(index, 1); 
        
        await this.dispatch('CHANGE_DATA',{columns:empty});
      }
    }
    await console.log(empty);
    await console.log(this.props.state.columns);
  }


  render() {
    //console.log(this.props.state);
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;


    const content = (
      <div style={{width:'200px',height:'120px'}}>
        <Form>
       <Form.Item style={{marginBottom:'-0.5px'}}> <Input onChange={this.onChangeText} placeholder="Text" value={this.state.content} /></Form.Item>
       <Form.Item style={{marginBottom:'0.5px'}}> <Input onChange={this.onChangeKey} placeholder="Key" value={this.state.id} /></Form.Item>
       <Form.Item><center><Button onClick={()=>this.onSubmitItem(this.props)} style={{width:'100px'}} type="primary"><p style={{fontWeight:'bold',fontSize:'15px',marginTop:'3px'}}>ADD</p></Button></center></Form.Item>
        </Form>
      </div>
    )

    const contentUrl = (
      <div style={{width:'200px',height:'120px'}}>
        <Form>
       
        </Form>
      </div>
    )

    
    
    //console.log(this.props.column.id);

    if(this.props.column.id==='column-1'){
      return (<div>
        {/* <Draggable
                      draggableId={this.props.column.id}
                      index={this.props.index}
                  >
                      {(provided) => ( */}
  
        <Container
        // {...provided.draggableProps}
        // ref={provided.innerRef}
        // {...provided.dragHandleProps}
        >
  
          
          <Droppable droppableId={this.props.column.id} type="task">
  
            {(provided, snapshot) => (
  
  
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
  
                <Sub dragHandlers={dragHandlers} {...this.props} dispatch={this.props.dispatch} provided={provided.placeholder} items={this.props.items} state={this.props.state} />
              
              </TaskList>
            )}
          </Droppable>
  
  
        </Container>
  
  
        {/* )}
      
                  </Draggable> */}
  
      </div>
      )
    }
    if(this.props.column.id==='column-2'){
      return (<div id="menuitem">
       
  
        <Container>
          <Droppable droppableId={this.props.column.id} type="item">
  
            {(provided, snapshot) => (
  
  
              <TaskList2
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
  
              >
               
  
                <Sub {...this.props} provided={provided.placeholder} items={this.props.items} state={this.props.state} />
              
                <br/>
                <div style={{display:'flex',marginLeft:'11.5px',marginTop:'-31px'}}>
             <Popover content={content} trigger="click"><Button type="primary" style={{borderRadius:'0px',borderBottomLeftRadius:'10px',marginRight:'4px'}}><p style={{fontWeight:'bold',marginTop:'5px'}}>Add Element</p></Button></Popover>
             <Popover content={contentUrl} trigger="click"><Button type="primary" style={{borderRadius:'0px',marginRight:'4px',width:'px'}}><p style={{fontWeight:'bold',marginTop:'5px'}}>Add URL</p></Button></Popover>
             <Button type="primary" onClick={this.Delete} style={{borderRadius:'0px',borderBottomRightRadius:'10px',marginRight:'4px',width:'115px'}}><p style={{fontWeight:'bold',marginTop:'5px'}}>Delete</p></Button>
             </div>
              <br/>
              </TaskList2>
            )}
          </Droppable>
  
        </Container>
  
  
     
  
      </div>
      )
    }
    






  }
}