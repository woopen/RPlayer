import { Player } from './player';
import { PlayerOptions } from './types';
export declare function tryOpenEdge(player: Player): void;
export declare function setCssVariables(el: HTMLElement, opts: PlayerOptions): void;
export declare function setVideoAttrs(video: HTMLVideoElement, opts: PlayerOptions['videoAttrs']): void;
export declare function setVideoSources(video: HTMLVideoElement, opts: PlayerOptions['videoSources']): void;
export declare function setVideoVolumeFromLocal(video: HTMLVideoElement): void;
export declare function registerNamedMap(player: Player): void;
export declare function transferEvent(player: Player): void;
