
export class Configuration {
    ShowHeader: boolean | undefined;
    HeaderText: string | undefined;
    ShowPrint: boolean | undefined;

    constructor(_ShowHeader?: boolean, _HeaderText?: string, _ShowPrint?: boolean) {
        this.ShowHeader = _ShowHeader;
        this.HeaderText = _HeaderText;
        this.ShowPrint = _ShowPrint;
    }
}