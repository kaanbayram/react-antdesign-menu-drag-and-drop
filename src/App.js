import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import initialData from './initial-data';
import Column from './column.jsx'
import Draggable from 'react-draggable';
import { DragDropContext,Droppable } from 'react-beautiful-dnd';
import Reducer from './Reducer';
import { Menu,Icon } from 'antd';
import styled from 'styled-components';
//import '@atlastkit/css-reset';

const Drag = Draggable; 
const Container = styled.div`
  display:flex;
  //border-style:solid;
  //border-color:blue;
  //border-left-height:100vh;
  height:100vh;
  width:'100vw;
  
  position:'relative';
`;

const TaskList = styled.div`
    //padding:8px;
    //transition: backgroun-color 0.2s ease;
    // background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')}
    //flex-grow: 1;
    //min-height: 100px;
    //display:'flex';
    //position:absolute;
    //margin-top:600px;
   //margin-left:500px;
   //width:100vw;
   //height:100vh;
`;


const MenuReturn = (props) => {
  //console.log(props);


  return (
    // <TaskList
    //    // subMenuOpenDelay={}
    //     //openKeys={props.state.openedSubMenus}
    //     {...props}
    //     mode="inline"
    //     style={{height:'400px'}}
    // >
    props.state.columnOrder.map((columnId, index) => {
      const column = props.state.columns[columnId];
      //console.log(column);
      const tasks = column.taskIds.map(taskId => props.state.tasks[taskId]);

      return <Column key={column.id} column={column} tasks={tasks} items={props.state.items} index={index} state={props.state} />;
    })

    // </TaskList>
  );
}

class App extends Component {

  constructor(props){
    super(props);
    this.dispatch = this.dispatch.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }
  state = initialData;

  onDragStart = async (start) => {
    // document.body.style.color='orange';
    

    console.log(start);
    
    //this.setState({sourceId:start.source.droppableId});
    if (await start.source.droppableId==='column-2') {
      this.setState({
        itemDrag:true,
        selectedId:start.draggableId,
      });

    }
    const { type } = await start
    // document.body.style.transition = 'background-color 0.2s ease';
    const homeIndex = await this.state.columnOrder.indexOf(start.source.droppableId);
    await this.setState({
      homeIndex,
    });

    if(await type!=='task'){
      this.setState({dragState:true});
      //console.log('dragState: '+this.state.dragState);
    }
    
  };
  componentWillReceiveProps(){
    //console.log('aa');
  }

  // onDragUpdate = update => {
  //   const { destination } = update;
  //   const opacity = destination ? destination.index /Object.keys(this.state.tasks).length : 0;

  //   document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  // }

  onDragUpdate = async update => {
    const { destination } = await update;
    await console.log(update);

   // this.state.tasks[update.destination.droppableId].itemIds=[];
    //this.setState({dragId:update.draggableId});
    //this.setState({tasks:this.state.tasks});
    //await clearTimeout(global.time);
    
    //global.destination='';
  
    // this.state.openedSubMenus.push('column-1');
    // this.setState({openedSubMenus:this.state.openedSubMenus});
    //this.setState({openedSubMenus:['task-1']}); 
    

    // if(await destination!==null){
    //   console.log('çalıştı');
    //   global.time = setTimeout(async () =>{
    //     if (await this.state.dragState===true) {
    //       if(this.state.openedSubMenus.includes(destination.droppableId) === false){
    //         const empty = await this.state.openedSubMenus;
    //         await empty.push(destination.droppableId);
            
    //        await  this.setState({
    //           openedSubMenus:this.state.openedSubMenus,
    //           tasks:this.state.tasks,
    //           columns:this.state.columns,
    //           });

    //       }
    //     }
     
    //   }
    // , 400);
    // }

     


    // await console.log(this.state.openedSubMenus);
    // const opacity = destination ? destination.index /Object.keys(this.state.tasks).length : 0;

    // document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  }
 

  onDragEnd = async result => {
    //this.setState({dragId:''});
    //console.log(document.getElementById('task-4'));

    await this.setState({
      homeIndex: null,
      itemDrag:false,
    });
    //document.body.style.color='inherit';
    const {destination,source,draggableId,type } = await result;

    console.log(result,draggableId);
    this.setState({
      //destinationId:destination.droppableId,
      draggableId:draggableId
    });
    // const control = false;
    // this.state.openedSubMenus.forEach(element => {
    //   if (element===destination.droppableId) {
    //     control = true;
    //   }
    // });
    // if (control===false) {
    //   this.setState({visible:true});
    // }

    if(await type!=='column'){
      await this.setState({dragState:false});
      //await console.log('dragState: '+this.state.dragState);
    }

    if(await !destination){
      return;
    }

    if(
      await destination.droppableId === source.droppableId &&
      destination.index === source.index
    ){
      return;
    }

    if(await type==='column'){
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index,1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      };
      this.setState(newState);
      return;
    }
    
      if (await type==="item"&&source.droppableId!=='column-2'&&destination.droppableId!=='column-2') {
      
      const tasksUpdate = this.state.tasks;
 
      console.log(result.destination.droppableId);
      tasksUpdate[source.droppableId].itemIds.splice(source.index,1);
      tasksUpdate[destination.droppableId].itemIds.splice(destination.index, 0, draggableId);
     
      
      const newState = {
        ...this.state,
        tasks:tasksUpdate,
      };
      this.setState(newState);

      // const items = this.state.task1;

      // items.splice(source.index,1);
      // items.splice(destination.index, 0, draggableId);

      //  const newState = {
      //   ...this.state,
      //   task1:items,
      // };
      // this.setState(newState);


      return;
    }
    if (await type==="item"&&(source.droppableId==='column-2')) {
      this.setState({itemStyle:{}});
      const columnsUpdate = this.state.columns;
      const tasksUpdate = this.state.tasks;
      
      this.setState({itemDrag:false});
      //const 
      // const source = this.state.tasks[source.draggableId];
      // const destination = this.state.taks[destination.draggableId];

      // console.log(columnsUpdate);
      // console.log(destination);
      // console.log(source);
      // console.log(columnsUpdate[source.droppableId]);
      // console.log(columnsUpdate[source.droppableId].itemIds);
      columnsUpdate[source.droppableId].itemIds.splice(source.index,1);
      //console.log(columnsUpdate[source.droppableId]);

      if (await destination.droppableId==='column-2') {
        columnsUpdate[destination.droppableId].itemIds.splice(destination.index, 0, draggableId);
      }
      if (await destination.droppableId!=='column-2') {
        tasksUpdate[destination.droppableId].itemIds.splice(destination.index, 0, draggableId);
      }
      //tasksUpdate[destination.droppableId].itemIds.splice(destination.index, 0, draggableId);

      const newState = await {
        ...this.state,
        columns:columnsUpdate,
        tasks:tasksUpdate,
      };
      this.setState(newState);
      return;
    }
    if (await type==="item"&&(destination.droppableId==='column-2')) {
      this.setState({itemStyle:{}});
      const columnsUpdate = this.state.columns;
      const tasksUpdate = this.state.tasks;


      await  this.setState({itemDrag:false});
      //const 
      // const source = this.state.tasks[source.draggableId];
      // const destination = this.state.taks[destination.draggableId];

      // console.log(columnsUpdate);
      // console.log(destination);
      // console.log(source);
      // console.log(columnsUpdate[source.droppableId]);
      // console.log(tasksUpdate[source.droppableId].itemIds);
      await tasksUpdate[source.droppableId].itemIds.splice(source.index,1);
      //console.log(columnsUpdate[source.droppableId]);

      if (await destination.droppableId==='column-2') {
        columnsUpdate[destination.droppableId].itemIds.splice(destination.index, 0, draggableId);
      }
      if (await destination.droppableId!=='column-2') {
        tasksUpdate[destination.droppableId].itemIds.splice(destination.index, 0, draggableId);
      }
      //tasksUpdate[destination.droppableId].itemIds.splice(destination.index, 0, draggableId);

      const newState = await {
        ...this.state,
        columns:columnsUpdate,
        tasks:tasksUpdate,
      };
      this.setState(newState);
      return;
    }

    const start = await this.state.columns[source.droppableId];
    const finish = await this.state.columns[destination.droppableId];

    //console.log(start,finish);
    if(await start === finish){

      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index,1);
      newTaskIds.splice(destination.index, 0, draggableId);
  
      const newColumn = {
        ...start,
        taskIds:newTaskIds
      };
  
      const newState = {
        ...this.state,
        columns:{
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };
  
      this.setState(newState);
      return;

    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index,1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index,0,draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };
    
    const newState={
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      },
    };
    this.setState(newState);
    
  }


   // if (type==="item") {
    //   const tasksUpdate = this.state.tasks;
    //   // const source = this.state.tasks[source.draggableId];
    //   // const destination = this.state.taks[destination.draggableId];
    //   console.log(tasksUpdate);
    //   console.log(destination);

    //   console.log(tasksUpdate[source.droppableId]);
    //   tasksUpdate[source.droppableId].itemIds.splice(source.index,1);
    //   tasksUpdate[destination.droppableId].itemIds.splice(destination.index, 0, draggableId);

    //   const newState = {
    //     ...this.state,
    //     tasks:tasksUpdate,
    //   };
    //   this.setState(newState);
    //   return;
    // }

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
    
    async dispatch(action) {
      let newState = await Reducer(this.state, action);
      
      this.setState(newState);
      //await console.log(newState);
      //await console.log(this.state);
    }

    onMouseMove(e) {
      this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
      //this.setState({ x: e.pageX - e.target.offsetLeft, y: e.pageY - e.target.offsetTop });
      // console.log(this.state.x);
      // console.log(this.state.y);
    }

  render() {
    // this.dragElement(document.getElementById("mydiv"));
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;

    return (<div style={{overflowY:'hidden'}}>

      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        {/* <Droppable droppableId="all-columns" direction="horizontal" type="column" style={{width:'100vw',height:'100vh'}}>
          {(provided) => ( */}


        <Container
        //  {...provided.droppableProps}
        //  ref={provided.innerRef}
        >

          {/* <MenuReturn provided={provided.placeholder} {...this.props} state={this.state}/> */}

          {this.state.columnOrder.map((columnId, index) => {
            const column = this.state.columns[columnId];
            //console.log(column);
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
            if (column.id === 'column-1') {
              return <Column dispatch={this.dispatch} key={column.id} column={column} tasks={tasks} items={this.state.items} index={index} state={this.state} />;
            }
            if (column.id === 'column-2') {

              return (
                <Drag handle="strong" {...this.props} {...dragHandlers} style={{ margin: '0px', padding: '0px' }}>
                  <div>

                    <div>
                    <div><strong style={{marginTop:'4px',float:'right',marginRight:'45px'}}><Icon style={{fontSize:'35px'}} type="ellipsis" /></strong><Icon style={{marginLeft:'3px',float:'right',fontSize:'20px',marginRight:'-60px',marginTop:'10px'}} type="close-circle" /></div>
                      <div>
                   
                          <Column dispatch={this.dispatch} key={column.id} column={column} tasks={tasks} items={this.state.items} index={index} state={this.state} />
                       
                     </div>
                     </div>
                   </div>
                 </Drag>
              );

            }
          })}
          {/* {provided.placeholder} */}

        </Container>


        {/* )}

        </Droppable> */}

      </DragDropContext>





    </div>
    );
  }



}

export default App;
