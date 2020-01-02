const initialData = {
   
    refreshState:false,
    dragState:false,
    openedSubMenus:['constant'],
    visible:false,
    deleteItem:'',
    task1:[],
    tasks2:[],
    task3:[],
    task4:[],

    destinationId:'',
    draggableId:'',

    subfonk:false,
    willopenmenu:'',
    draggingOver:'',
    selectedId:'',
    itemStyle:{},
    x:'',
    y:'',
    itemDrag:false,
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    },

    items:{
        'item-1': { id: 'item-1',content:'Element 1'},
        'item-2': { id: 'item-2',content:'Element 2'},
        'item-3': { id: 'item-3',content:'Element 3'},
        'item-4': { id: 'item-4',content:'Element 4'},
        'item-5': { id: 'item-5',content:'Element 5'},
        'item-6': { id: 'item-6',content:'Element 6'},
        'item-7': { id: 'item-7',content:'Element 7'},
        'item-8': { id: 'item-8',content:'Element 8'},
        'item-9': { id: 'item-9',content:'Element 9'},
        'item-10': { id: 'item-10',content:'Element 10'},
        'item-11': { id: 'item-11',content:'Element 11'},
        'item-12': { id: 'item-12',content:'Element 12'},
        'item-13': { id: 'item-13',content:'Element 13'},
        'item-14': { id: 'item-14',content:'Element 14'},
        'item-15': { id: 'item-15',content:'Element 15'},
        'item-16': { id: 'item-16',content:'Element 16'},
        'item-17': { id: 'item-17',content:'Element 17'},
        'item-18': { id: 'item-18',content:'Element 18'},
        'item-19': { id: 'item-19',content:'Element 19'},
        'item-20': { id: 'item-20',content:'Element 20'},
        'item-21': { id: 'item-21',content:'Element 21'},
        'item-22': { id: 'item-22',content:'Element 22'},
        'item-23': { id: 'item-23',content:'Element 23'},
        'item-24': { id: 'item-24',content:'Element 24'},
        'item-25': { id: 'item-25',content:'Element 25'},
        'item-26': { id: 'item-26',content:'Element 26'},
        'item-27': { id: 'item-27',content:'Element 27'},
        'item-28': { id: 'item-28',content:'Element 28'},
        'item-29': { id: 'item-29',content:'Element 29'},
        'item-30': { id: 'item-30',content:'Element 30'},
        'item-31': { id: 'item-31',content:'Element 31'},
        'item-32': { id: 'item-32',content:'Element 32'},
    },

    tasks:{
        'task-1': { id: 'task-1',content:'Mission 1',itemIds:['item-1','item-2']},
        'task-2': { id: 'task-2',content:'Mission 2',itemIds:['item-3','item-4']},
        'task-3': { id: 'task-3',content:'Mission 3',itemIds:['item-5','item-6']},
        'task-4': { id: 'task-4',content:'Mission 4',itemIds:['item-7','item-8']},
        'task-5': { id: 'task-5',content:'Mission 5',itemIds:['item-9','item-10']},
        'task-6': { id: 'task-6',content:'Mission 6',itemIds:['item-11','item-12']},
        'task-7': { id: 'task-7',content:'Mission 7',itemIds:['item-13','item-14']},
        'task-8': { id: 'task-8',content:'Mission 8',itemIds:['item-15','item-16']},
        'task-9': { id: 'task-9',content:'Mission 9',itemIds:['item-17','item-18']},
        'task-10': { id: 'task-10',content:'Mission 10',itemIds:['item-19','item-20']},
        'task-11': { id: 'task-11',content:'Mission 11',itemIds:['item-21','item-22']},
        'task-12': { id: 'task-12',content:'Mission 12',itemIds:['item-23','item-24']},
        'task-13': { id: 'task-13',content:'Mission 13',itemIds:['item-25','item-26']},
        'task-14': { id: 'task-14',content:'Mission 14',itemIds:['item-27','item-28']},
        'task-15': { id: 'task-15',content:'Mission 15',itemIds:['item-29','item-30']},
        'task-16': { id: 'task-16',content:'Mission 16',itemIds:['item-31','item-32']},
    },
    

    columns:{
        'column-1':{
            id:'column-1',
            title:'Options 1',
            taskIds: ['task-1','task-2','task-3','task-4'],
        },
        'column-2':{
            id:'column-2',
            title:'Options 2',
            taskIds: ['task-5','task-6','task-7','task-8'],
            itemIds: ['item-25','item-26','item-27','item-28','item-29','item-30']
        },
        // 'column-3':{
        //     id:'column-3',
        //     title:'Options 3',
        //     taskIds: ['task-9','task-10','task-11','task-12'],
        // },
        // 'column-4':{
        //     id:'column-4',
        //     title:'Options 4',
        //     taskIds: ['task-13','task-14','task-15','task-16'],
        // },
    },
    menus:{
        'menu-1':{
            id:'menu-1',
            title:'menu 1',
            columnIds: [],
        },
        'menu-2':{
            id:'menu-2',
            title:'menu 2',
            columnIds: [],
        },
    },
    columnOrder: ['column-1','column-2'],
}

export default initialData;