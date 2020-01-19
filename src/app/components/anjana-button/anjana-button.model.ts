export class ButtonConfig {
    className?: string;
    color: ButtonColor;
    disabled?: boolean;
    id?: string;
    type?: Type;
  }

export enum ButtonColor {
    DEFAULT,
    PRIMARY,
    WHITE,
    NEGATIVE
  }

export enum Type {
    BUTTON,
    RESET,
    SUBMIT
  }
