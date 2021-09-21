export interface BaseStudent{
    
    fname: string,
    lname: string,
    nic: string
    email: string,
    phone: string,
    gender: string,
    dob: Date
    address_l1: string,
    address_l2: string,
    city: string,
    postal_code: number
    district: string
   
}

export interface Student extends BaseStudent{
    reg_no: string
}