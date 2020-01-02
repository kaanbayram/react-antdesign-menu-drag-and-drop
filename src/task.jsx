import React from 'react';

import styled from 'styled-components';
import {default as DragLib} from 'react-draggable/build/Draggable';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Menu,Icon } from 'antd';
import GetItem from './item.jsx';
import 'antd/dist/antd.css';
import SubmenuComp from './SubmenuComp';


const {SubMenu} = Menu;

const Container = styled.div`
    //border: 1px solid lightgrey;
    //border-radius: 2px;
    //padding-left:-13px;
    //margin-bottom: 8px;
    //background-color: ${props =>(props.isDraggingOver ? 'blue' : 'white')}
    background-color: ${props => (props.isDragging ? '#e6f7ff' : 'initial')}
    //margin-top
    //display: flex;
`;

const Handle = styled.div`
    width: 20px;
    height: 20px;
    background-color: orange;
    border-radius: 15px;
    margin-right: 8px;
`;

const TaskList = styled.div`
    //padding:8px;
    //transition: backgroun-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver|| props.isDragging ? '#e6f7ff' : 'initial')}
    //height:15px,
    //padding-top:-10px;
    //padd
    //flex-grow: 1;
    //min-height: 100px;
`;
// const Item = ({content}) => {
//     return <Menu.Item>  {content} </Menu.Item>
// }


const Item = (props) => {
//    const items = props.task.itemIds.map(itemId => props.taskItems[itemId]);
//    console.log(items);
  
    var items=[];
    //props.items = JSON.parse(JSON.stringify(props.items));
    props.task.itemIds.forEach(element => {
       Object.keys(props.items).map(key => {
           if (key===element) {
               items.push(props.items[element]);
           }
       });
    });
    //console.log(props.task);
    // props.task.itemIds.forEach(element => {
        
    //     if (props.items.find(x => x.id===element)!==undefined && props.items.find(x => x.id===element)!==null) {
    //         items.push(props.items.find(x => x.id===element));
    //     }
    // });
    //console.log(items);
    //console.log(props);
    return (
       
        <SubMenu

       
            // onMouseEnter={()=>{
            //     //  props.state.dragState===true ?
            //     //  props.state.openedSubMenus.includes(props.column.id) === true ?
            //     //  props.state.openedSubMenus=props.state.openedSubMenus :
            //     //  props.state.openedSubMenus.push(props.column.id) :
            //     //  props.state.openedSubMenus = props.state.openedSubMenus
            // }}
           
            style={{paddingTop:'-10px',borderStyle:'solid',borderTopColor:'#1890ff',borderLeft:'none',borderRight:'none',borderBottom:'none',borderTopWidth:'1px',width:'inherit'-1,marginLeft:'-22.5px'}}
            
            onTitleClick={async () => {
                props.state.openedSubMenus.includes(props.task.id) === true ?
                props.state.openedSubMenus.splice((props.state.openedSubMenus.indexOf(props.task.id)), 1) :
                props.state.openedSubMenus.push(props.task.id)
            }}

            key={props.task.id} {...props}
            
            title={
                <span style={{marginTop:'10px'}}>
                    <Icon style={{ color: '#1890ff' }} type={
                        //"mail"
                        props.task.content ==='Mission 1' ? "mail" :
                        props.task.content==='Mission 2' ? "setting" :
                        props.task.content==='Mission 3' ? "appstore" :
                        props.task.content==='Mission 4' ? "calendar" : null
                    }
                    />
                    <span>{props.task.content}</span>
                </span>
            }
        >
            {/* <div style={{width:'inherit',paddingBottom:'30px'}}> */}
          
             {items.map((item, index) =><GetItem dispatch={props.dispatch} key={item.id} item={item} index={index} state={props.state} />)}
            
             {props.provided}
            
             {/* </div> */}
      
        </SubMenu>
    );
}


export default class Task extends React.Component{


  
    state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      }
  
    }

      // componentWillReceiveProps(nextProps){
      //   console.log(nextProps);
      //   if (nextProps.state.subfonk!==this.props.state.subfonk) {
      //     //nextProps.state.openedSubMenus.push(nextProps.state.willopenmenu)
      //     console.log(nextProps.state.willopenmenu);
      //     var element = document.getElementById(nextProps.state.willopenmenu);
      //     console.log(document.getElementById(nextProps.state.willopenmenu));
      //     element.click();
          
          
      //   }
      // }

      clickDiv(el) {
        el.click()
      }

      updateSubMenus(){

      }
      
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

    optionalPortal2 = (styles, element,snapshot) => {
        //console.log(styles,snapshot);
        
        var element2=element;
        
        if (styles.draggableProps.style.position === 'fixed'&&snapshot.isDragging===true) {
          // return ReactDOM.createPortal(
          //     element,
          //     _dragEl,
          // );
        
          //styles = JSON.parse(JSON.stringify(styles));
          
          styles.draggableProps.style.position = 'absolute';

         

          if(styles.draggableProps.style.transform!==null){
           
            var str = styles.draggableProps.style.transform.toString();
            var virgul = str.search(",");
            var parantez = str.search('\\)');
            var res = str.substr(virgul, parantez);
          }

          if (res!==undefined) {
            styles.draggableProps.style.transform= 'translate(0px'+res;
          }

          
          //styles.draggableProps.style.transitionDuration= '0.001s';

          // if (!snapshot.isDropAnimating) {
          //   return styles;
          // }
          // else{
            
          // }

          // return {
          //   //...styles,
          //   // cannot be 0, but make it super tiny
            
          // };
         

         //console.log(styles.draggableProps.style.transform);

         //styles.draggableProps.style.transform= 'translateX(0px)';

        //styles.draggableProps.style.float='left';

          //this.dispatch('CHANGE_DATA',{columns:this.props.state.columns});

          return element;
        }
        else{
            return element2;
        }
        // if (styles.draggableProps.style.position !== 'fixed'&&styles.draggableProps.style.left!==0) {
        //     //styles = JSON.parse(JSON.stringify(styles));
        //     //styles.draggableProps.style.position = 'absolute';
           
        //     styles.draggableProps.style.left = 0;
        //     return element;
        // }
        //return element;
      }
      dispatch(type, payload) {
        this.props.dispatch({
            type: type,
            payload: payload
        });
    }
    render(){
        //console.log(this.props.state);
        //const isDragDisabled = this.props.task.id === 'task-1';
        //console.log(this.props);
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        const {deltaPosition, controlledPosition} = this.state;

        return (<div>
             {/* <DragLib axis="y" {...dragHandlers}> aaa   </DragLib> */}
            <Draggable 
            draggableId={this.props.task.id}
            index={this.props.index}
            >
                


                {(provided, snapshot) => {
                    return (
                        <div>
                            {this.optionalPortal2(provided, (
                              
                              <Container
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              isDragging={snapshot.isDragging}
                              id={this.props.task.id}
                              
                          >
                             
                              <Droppable  droppableId={this.props.task.id} type="item" isCombineEnabled={true}>
                                  {(provided, snapshot)=>(

                                       <TaskList
                                       ref={provided.innerRef}
                                       {...provided.droppableProps}
                                       isDraggingOver={snapshot.isDraggingOver}
                                       isCombineEnabled={true}
                                       isDragging={snapshot.isDragging}
                                      >
                                           
                                          <Item {...this.props} dispatch={this.props.dispatch} handle={provided.dragHandleProps} provided={provided.placeholder} state={this.props.state} />     
                                         
                                          {/* {provided.placeholder} */}
                                          {/* <SubmenuComp {...this.props} handle={provided.dragHandleProps} provided={provided.placeholder} state={this.props.state} /> */}
                                      </TaskList> 
                                  )}
                              </Droppable>
                             
                              
                          </Container>

                            ),snapshot)}
                           
                        </div>
                    );

                }}



                {/* {(provided, snapshot) => (



                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >

                        <Droppable droppableId={this.props.task.id} type="item">
                            {(provided, snapshot)=>(
                                 <TaskList
                                 ref={provided.innerRef}
                                 {...provided.droppableProps}
                                 isDraggingOver={snapshot.isDraggingOver}
                                >
                                    <Item {...this.props} handle={provided.dragHandleProps} provided={provided.placeholder} state={this.props.state} />       
                                </TaskList>
                            )}
                        </Droppable>
                       
                     
                    </Container>

                )} */}
            </Draggable></div>
            
        );

    }
}