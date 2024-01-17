export class ErrorHandler extends Error{
    statusCode:number;
    constructor(message:string,statusCode:any){
        super(message);
        this.statusCode=statusCode

        Error.captureStackTrace(this,this.constructor);
    }
}