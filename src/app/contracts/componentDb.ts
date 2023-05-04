import { Configuration } from 'src/app/injectors/classes/configuration';
import { Styles } from '../injectors/classes/styles';

export class ComponentDb {
    Id!: number;
    Name!: string;
    Styles: Styles = new Styles('','');
    Configuration: Configuration = new Configuration();
}