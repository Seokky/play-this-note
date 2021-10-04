import React, { CSSProperties, FunctionComponent } from 'react';
import { ReactComponent as AngleDownSvg } from 'assets/icons/angle-down.svg';
import { ReactComponent as ArrowRightSvg } from 'assets/icons/arrow-right.svg';
import { ReactComponent as MicSvg } from 'assets/icons/mic.svg';
import { ReactComponent as PlusSvg } from 'assets/icons/plus.svg';
import { ReactComponent as SettingsSvg } from 'assets/icons/settings.svg';
import styles from './AppIcon.module.css';

type Props = {
  name: string;
  color?: string;
  style?: CSSProperties;
}

const AppIcon = ({ name, color, style }: Props) => {
  const icons: Record<string, FunctionComponent> = {
    'angle-down': AngleDownSvg,
    'arrow-right': ArrowRightSvg,
    mic: MicSvg,
    plus: PlusSvg,
    settings: SettingsSvg,
  };
  const IconComponent = icons[name];
  const styleComputed = {
    color,
    ...style,
  };

  return (
    <div
      className={styles.wrapper}
      style={styleComputed}
    >
      <IconComponent />
    </div>
  );
};

AppIcon.defaultProps = {
  color: 'inherit',
  style: {},
};

export default AppIcon;
