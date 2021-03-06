import type {
  Checkbox,
  ControlItem,
  Player, Popover, Tooltip,
} from 'nplayer';
import { BulletOption } from './danmaku/bullet';
import {
  BOTTOM, COLOR, isDefaultColor, MODE, SCROLL, SEND, SEND_SETTINGS, TOP,
} from './utils';

let utils: Player['Player']['__utils'];

class DanmakuSendBox implements ControlItem {
  readonly id = 'danmaku-send';

  el!: HTMLElement;

  private player!: Player

  tooltip!: Tooltip;

  private popover!: Popover;

  private inputEl!: HTMLInputElement;

  private sendEl!: HTMLElement;

  private colorInputEl!: HTMLInputElement;

  private colorEl!: HTMLElement;

  private typeCBs: Record<Required<BulletOption>['type'], Checkbox> = {} as any;

  private currentType = 'scroll';

  init(player: Player, position: number) {
    this.player = player;
    const { __utils, components, I18n } = player.Player;
    utils = __utils;
    const {
      $, addDisposableListener, addDisposable, createSvg,
    } = utils;

    this.el = $('.danmaku_send');
    const settingElement = this.el.appendChild($());
    settingElement.appendChild(createSvg('icon', 'M9.62 14L12 7.67 14.37 14M11 5L5.5 19h2.25l1.12-3h6.25l1.13 3h2.25L13 5h-2z'));
    this.tooltip = addDisposable(this, new components.Tooltip(settingElement, I18n.t(SEND_SETTINGS)));
    this.popover = addDisposable(this, new components.Popover(settingElement, () => this.tooltip.show(), undefined, true));
    this.inputEl = this.el.appendChild($('input'));
    this.sendEl = this.el.appendChild($('.danmaku_send_btn', undefined, I18n.t(SEND)));

    this.setPos(position);

    const row = () => $('.flex.align-center.danmaku_row');
    const panelElement = this.popover.panelEl;
    let rowElement = $('.danmaku_row');
    panelElement.appendChild(rowElement);
    rowElement.appendChild($(undefined, undefined, I18n.t(MODE)));
    rowElement = rowElement.appendChild($('.flex.align-center'));
    this.typeCBs.scroll = addDisposable(this, new components.Checkbox(rowElement, { html: I18n.t(SCROLL), checked: true, change: this.onTypeChange('scroll') }));
    this.typeCBs.top = addDisposable(this, new components.Checkbox(rowElement, { html: I18n.t(TOP), change: this.onTypeChange('top') }));
    this.typeCBs.bottom = addDisposable(this, new components.Checkbox(rowElement, { html: I18n.t(BOTTOM), change: this.onTypeChange('bottom') }));
    rowElement = row();
    rowElement = $('.danmaku_row');
    panelElement.appendChild(rowElement);
    rowElement.appendChild($(undefined, undefined, I18n.t(COLOR)));
    rowElement = rowElement.appendChild($('.danmaku_color_row'));
    this.colorInputEl = rowElement.appendChild($('input'));
    addDisposableListener(this, this.colorInputEl, 'input', () => {
      this.updateColor(this.colorInputEl.value);
    });
    this.colorEl = rowElement.appendChild($('.danmaku_color_preview'));
    rowElement = $('.danmaku_colors');
    addDisposableListener(this, rowElement, 'click', ({ target }: MouseEvent) => {
      const el = target as HTMLElement;
      if (el && el.dataset.value) {
        this.updateColor(el.dataset.value);
      }
    });
    let colorItem;
    player.danmaku.opts.colors.forEach((c) => {
      colorItem = $('.danmaku_color');
      colorItem.style.background = c;
      colorItem.dataset.value = c;
      rowElement.appendChild(colorItem);
    });
    panelElement.appendChild(rowElement);

    addDisposableListener(this, settingElement, 'click', this.show);
    addDisposableListener(this, this.inputEl, 'keypress', (ev: KeyboardEvent) => {
      if (ev.altKey || ev.ctrlKey || ev.metaKey || ev.shiftKey) return;
      const code = ev.keyCode || ev.which;
      if (code !== 13) return;
      this.send();
    });
    addDisposableListener(this, this.inputEl, 'focus', () => player.control.require());
    addDisposableListener(this, this.inputEl, 'blur', () => player.control.release());
    addDisposableListener(this, this.sendEl, 'click', this.send);

    this.updateColor('#FFFFFF');
  }

  update(position: number): void {
    this.setPos(position);
  }

  private setPos(position: number): void {
    this.popover.resetPos();
    if (position === 2) this.popover.setBottom();
  }

  private onTypeChange = (type: Required<BulletOption>['type']) => () => {
    this.currentType = type;
    this.typeCBs.scroll.update(false);
    this.typeCBs.top.update(false);
    this.typeCBs.bottom.update(false);
    this.typeCBs[type].update(true);
  }

  updateColor(v: string) {
    this.colorInputEl.value = v;
    this.colorEl.style.background = v;
    this.inputEl.style.color = v;
  }

  show = (ev?: MouseEvent) => {
    if (ev && utils.getEventPath(ev).includes(this.popover.el)) return;
    this.tooltip.hide();
    this.popover.show();
  }

  send = () => {
    const value = this.inputEl.value;
    if (!value) return;
    this.inputEl.value = '';
    const bullet: BulletOption = {
      text: value,
      time: this.player.currentTime,
      type: this.currentType as any,
      color: isDefaultColor(value) ? undefined : this.colorInputEl.value,
    };
    this.player.danmaku.send(bullet);
  }

  dispose() {
    if (!this.player) return;
    utils.dispose(this);
    utils.removeNode(this.el);
    this.player = null!;
    this.el = null!;
  }
}

export const danmakuSendBoxControlItem = () => new DanmakuSendBox();
