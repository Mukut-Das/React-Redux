
import {Add_To_Cart} from "./constant"
export const cartData=(data=[], action )=>{
    if(action.type===Add_To_Cart){
    console.log("reducercalled " , action)
    return action.data   
}else{
    return "aNo action match"
}
   
}