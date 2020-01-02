export default function (state, action) {

    switch (action.type) {

        
        case "CHANGE_DATA":{
            return action.payload;
        }

        default:
            break;
    }
}