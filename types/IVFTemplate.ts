import {Widget} from './Component'

export interface IVFTemplate {
    assets: Assets.assets,
    global: {
        [key: string]: Global.global
    },
    scenes: Scenes.scene[],
    width: Number,
    height: Number,
    baseUrl: String,
    name: String,
    conversion: String,
    loadMode: LoadMode,
    version: String,
    fps?: number,
    scaleMode: ScaleMode,
    components: {
        [key: string]: Widget.AllWidget
    }
}

export namespace Assets {
    export interface assets {
        [key: string]: {
            type: type,
            url: string
            name: string,
        }
    }

    export enum type {
        js = 'js',
        svg = 'svg',
        font = 'font',
        image = 'image',
        sound = 'sound',
        sheet = 'sheet',
        audio = 'audio',
        video = 'video',
    }
}

export namespace Global {
    export type global  = {
        type: string,
        value: any,
        describe?: string,
    } | number | string | boolean | any
}

export namespace Scenes {
    export interface scene {
        id: String | number,
        libId: String | number
    }
}

export enum ScaleMode {
    cover = 'cover',
    showAll = 'showAll',
    noScale = 'noScale',
    contain = 'contain',
}

export enum LoadMode {
    all = 'all',
    single = 'single'
}
