import {ActionType} from "./Action";
import {StyleSheet} from "./Style";

export namespace Widget {
    interface Base {
        name?: string,
    }

    interface DisplayComponent {
        x?: number;
        y?: number;
        scaleX?: number;
        scaleY?: number;
        alpha?: number;
        color?: number;
        visible?: boolean;
        rotation?: any;
        width?: number;
        height?: number;
    }

    export type AllWidget = Widget.Button | Widget.Custom | Widget.Text | Widget.Image | Widget.Checkbox | Widget.Rect;

    export interface Button extends Base, DisplayComponent {
        type: WidgetType.button
    }

    export interface Custom extends Base, DisplayComponent {
        type: WidgetType.custom,
        children?: CustomChildrenItem[],
        animations?: [],
        props?: object,
        actionList?: ActionType[] | String
    }

    export interface CustomChildrenItem extends DisplayComponent{
        id: string | number,
        libId: string | number,
        name?: string,
        text?: string,
        style?: StyleSheet
    }

    export interface Checkbox extends Base, DisplayComponent{
        type: WidgetType.checkbox,
        up: string,
        down: string,
        move: string,
        upAndSelected: string,
        moveAndSelected: string,
        width: number,
        height: number,
        checkGroup: string
    }

    export interface Image extends Base, DisplayComponent {
        type: WidgetType.image,
        src: string | number
    }

    export interface Text extends Base, DisplayComponent {
        type: WidgetType.text,
        style?: Object
    }
    export interface Rect extends Base, DisplayComponent {
        type: WidgetType.rect,
        width: number,
        height: number,
        radius?: number,
        color: number
    }
}

export enum WidgetType {
    text = 'Label',
    rect = 'Rect',
    image = 'Image',
    table = 'table',
    input = 'input',
    slider = 'slider',
    button = 'Button',
    custom = 'custom',
    checkbox = 'CheckBox',
    container = 'container',

    // ANI
    dragonbones = 'dragonbones',
    particle = 'particle',
    sheet = 'sheet',
    // MEDIA
    video = 'video',
    audio = 'audio',
    microphone = 'microphone',
    // NPM
    npm = 'npm',
    // VECTOR
    svg = 'svg',
    graphic = 'graphic',
}
