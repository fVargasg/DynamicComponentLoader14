import { Configuration } from "./configuration";

/**
 * This class carries the component configuration and data.
 */
export class ComponentConfigData {
    Config: Configuration | undefined;
    Data: any | undefined;

    constructor(_config?: Configuration, _data?: any) {
        this.Config = _config;
        this.Data = _data;
    }
}