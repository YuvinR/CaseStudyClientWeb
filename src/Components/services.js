import { CommonGet,CommonPost } from '../Utils/CommonAxios';



export async function getorders(){
   
    const result =  await CommonGet('getPendingOrders','');

    return result.data;
}

export async function getProductsByOrderNo(orderNo){
    const result =  await CommonGet('getOrderDetailsByNo',orderNo);

    return result.data;
}

export async function changestatus(updatemodel){
    const result =  await CommonPost('updateStatus',updatemodel);

    return result.data;
}

export async function validate(loginmodel){
    const result =  await CommonPost('validate',loginmodel);

    return result.data;
}