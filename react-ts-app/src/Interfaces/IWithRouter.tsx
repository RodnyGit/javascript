export interface IWithRouter{
    history:{
        goBack():any,
        push(route:string):any
    };
    location:{};
    match:{};
    staticContext?:{};
    __protpo__:{};
}