export interface IBaseRequest{
	UserKey?: string;
	IpAddress?: string;
	UserId?: string;
}

export interface IBaseReturn {
	Successful?:boolean;
	FailedReason?:string;
	FailedCode?:number;
	StatusCode?:string;
    UserKey?:string;
    UserStoreGuid?:string;
}

export class BaseRequest implements IBaseRequest {
	UserKey?: string = "";
    UserStoreGuid?: string = "";
	IpAddress?: string = "";
	UserId?: string = "";
	BrowserHistory?: boolean = true;
    constructor() {}
}

export class BaseReturn implements IBaseReturn {
	Successful? = false;
    FailedReason? = "";
    FailedCode?  = 0;
    StatusCode? = "";
    UserKey? = "";
    UserStoreGuid? = "";
    constructor() {}
}