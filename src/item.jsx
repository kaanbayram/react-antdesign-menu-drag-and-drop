import React from 'react';

import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Menu,Icon } from 'antd';
import 'antd/dist/antd.css';
import initialData from './initial-data';

import { Scrollbars } from 'react-custom-scrollbars';

import ReactDOM from 'react-dom';
import Item from './Item';
 
const {SubMenu} = Menu;

const Container = styled.div`
    //border: 1px solid lightgrey;
    //border-radius: 2px;
    //padding:8px;
    //margin-bottom: 8px;
    //background-color: ${props =>(props.isDragging ? 'lightgreen' : 'white')}
    //position:relative;
    //visibility:${props =>(props.visibility==='hidden' ?  'hidden' : 'visible' )}
    //transform:none;
    //display: flex;
    // border-style:solid,
    // border-color:#1890ff,
    // border-left:none,
    // border-right:none,
    // border-bottom:none,
    // border-top-width:0.5px
`;

const TaskList = styled.div`
    //padding:8px;
    //transition: backgroun-color 0.2s ease;
    // background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')}
    //flex-grow: 1;
    //min-height: 100px;
    //transform: translate(-300px, 0px);
    //transform: ${props => (props? 'translate(15px, 15px)' :'none')}


`;

const Handle = styled.div`
    width: 20px;
    height: 20px;
    background-color: orange;
    border-radius: 15px;
    margin-right: 8px;
`;

// const Item = ({content}) => {
//     return <Menu.Item>  {content} </Menu.Item>
// }

const _dragEl = document.getElementById('draggable');

const ItemReturn = (props) => {

   
    //console.log(props);

    const dragHandleProps = props.dragHandleProps;
    return (
        <div className="ant-menu-item">
        <Menu.Item
            key={props.item.id} {...props}
            //onClick={global.deleteItem=props.item.id}
            //itemIcon={<Icon {...dragHandleProps} style={props.drag===true ? {float:'right',marginLeft:'-135px',marginRight:'-16px',marginTop:'-33px'} : {float:'right',marginTop:'-43px'}} type="menu" />}
        >
            <p style={props.drag===true ? {marginTop:'9px',marginLeft:'-18px'} : {}}>
                {props.item.content}
                </p>
        </Menu.Item>
        </div>
        );
        
   
}

const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle,
    //userSelect: 'none',
    position:'static',
    //padding: 8 * 2,
    //margin: `0 0 8px 0`,
    //background: isDragging ? 'lightgreen' : 'red',    
  });

export default class GetItem extends React.Component{

    state={
        timeControl:'',
        visibility:'',
    }

    getStyle(style, snapshot) {
     
        if (!snapshot.isDropAnimating) {
          return style;
        }
        console.log(snapshot);
        console.log(snapshot.draggingOver,this.props.state.openedSubMenus);
        if (snapshot.draggingOver!=='column-2'&&this.props.state.openedSubMenus.includes(snapshot.draggingOver)===false) {
            return {
                ...style,
                // cannot be 0, but make it super tiny
                width:'312px',
                height:'36px',
                marginLeft:'14px',
                transitionDuration: `0.001s`,
              };
        }
        else{
            return {
                ...style,
                width:'312px',
                height:'36px',
                marginLeft:'14px',
                transitionDuration: `0.08`,
              };
        }
       
      }
    optionalPortal(styles, element,snapshot) {
        var left = styles.draggableProps.style.left;
        var top = styles.draggableProps.style.top;

        
        if (styles.draggableProps.style.position === 'fixed') {
            
            //styles=JSON.parse(JSON.stringify(styles));
            

            console.log(styles,snapshot);            
            styles.draggableProps.style.position='absolute';
            styles.draggableProps.style.backgroundColor ='#e6f7ff';
            
            //console.log(styles.draggableProps.style.left);
            //console.log(styles.draggableProps.style.top);

            // styles.draggableProps.style.padding='inherit';
            // styles.draggableProps.style.margin='inherit';

            styles.draggableProps.style.width='312px';
            styles.draggableProps.style.height='36px';
            styles.draggableProps.style.marginLeft='14px';

            //styles.draggableProps.style.transitionDuration= '0.001s';

          
            
            // console.log('prop: ' + this.props.state.draggableId, 'style ' + styles.draggableProps['data-rbd-draggable-id'], 'dragover' + snapshot.draggingOver);
            // if (this.props.state.draggableId === styles.draggableProps['data-rbd-draggable-id'] && snapshot.draggingOver !== null && this.props.state.openedSubMenus.includes(snapshot.isDraggingOver) === false) {
            //     //this.setState({ visibility: 'hidden' });
            //     console.log('çalıştı');
            //     global.visibility = 'hidden';
            //     setTimeout(async () => {
            //         //this.setState({ visibility: 'visible' });
            //         global.visibility = 'visible';
            //     }
            //         , 200);

            // }

            
            // if (this.props.state.visible===true&&this.props.state.selectedId===this.props.item.id) {
            //     styles.draggableProps.style.visibility='hidden';
            // }

            //styles.draggableProps.style.visibility='hidden';

            //styles.draggableProps.style.marginRight='-30px';

            styles.draggableProps.style.left=left;
            styles.draggableProps.style.top=top-620;

            return (
            ReactDOM.createPortal(
                element,
                _dragEl,
            ));
        }
        return element;
    }

    optionalPortal2(styles, element,snapshot) {
        if (styles.draggableProps.style.position === 'fixed') {
            // return ReactDOM.createPortal(
            //     element,
            //     _dragEl,
            // );
            
            console.log(styles,snapshot);
            console.log(styles.draggableProps.style.left);
            console.log(styles.draggableProps.style.top);
            //styles=JSON.parse(JSON.stringify(styles));
            console.log(styles.draggableProps.style.transform);
            styles.draggableProps.style.position='absolute';
            //styles.draggableProps.style.padding='0px';
            //styles.draggableProps.style.width='inherit';
            //styles.draggableProps.style.height='inherit';
            //styles.draggableProps.style.transform= "translate("+this.props.state.x+","+this.props.state.y+")";
            // styles.draggableProps.style.padding= '16';
            // styles.draggableProps.style.margin= `0 0 8px 0`;
            // styles.draggableProps.style.userSelect= 'none';
            //styles.draggableProps.style.position='fixed';
            // var check = false;
            // var obje = this.props.state.columns['column-1'].taskIds;
            
            // console.log(obje);
            // obje.map(key => {
            //     check = this.props.state.tasks[key].itemIds.includes(styles.draggableProps['data-rbd-draggable-id']);
            //     if (check===true&&snapshot.isDragging===true) {
            //         console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
            //         if (snapshot.draggingOver!==this.props.state.sourceId) {
            //             styles.draggableProps.style.marginTop='-45px';
            //         }
                    
            //     }
            //   });

            // console.log(this.props.state.columns);
            
            styles.draggableProps.style.left='inherit'+4;
            styles.draggableProps.style.top='inherit'+10;

            // styles.draggableProps.style.left=this.props.state.x;
            // styles.draggableProps.style.top=this.props.state.y;

            console.log(styles.draggableProps.style);
            //styles.draggableProps.style.zIndex=20000;
            return element;
        }
        return element;
    }

    

    TimeFonk(){

        setTimeout(() => this.setState({timeControl:'hidden'}), 200);
        console.log(this.state.timeControl);
    }

   
 
    render() {
        // const { item } = this.props;
        //const isDragDisabled = this.props.task.id === 'task-1';
        console.log(global.deleteItem);
        return (
           
            <Draggable draggableId={this.props.item.id} index={this.props.index} >
                {(provided, snapshot) => {
                    return (
                         <Container
                    //         isDragging={snapshot.isDragging}
                    //         visible={this.props.state.visible}
                    //         dragId={this.props.state.dragId}
                    //         id={this.props.item.id}
                    //         visibility={global.visibility===undefined ? global.visibility : 'visible'}

                    >
                        
                           { this.optionalPortal(provided, (
                               <div
                                   {...provided.draggableProps}
                                   {...provided.dragHandleProps}
                                   ref={provided.innerRef}
                                   isDragging={snapshot.isDragging}
                                   style={this.getStyle(provided.draggableProps.style, snapshot)}
                               >
                                       <ItemReturn dragHandleProps={provided.dragHandleProps} drag={snapshot.isDragging} {...this.props} state={this.props.state} />
                                   {/* <Item {...this.props} state={this.props.state} /> */}
                               </div>
                            ),snapshot)}
                     </Container>
                    );

                }}
            </Draggable>
           
        );

    }
}