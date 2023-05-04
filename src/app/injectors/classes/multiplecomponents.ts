import { ModuleEnumType } from "src/app/modules/moduleenumtype";
import { ComponentConfigData } from "./compConfigData";
import { Styles } from "./styles";

export class MultipleComponents {
    ComponentNames!: Array<string>;
    ComponentStyles!: Array<Styles>;
    ComponentModules!: Array<ModuleEnumType>;
    ComponentConfugurationData!: Array<ComponentConfigData>;
}