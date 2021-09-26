import React, { Component } from 'react';
import clsx from 'clsx';

import { AppListSubItem as TAppListSubItem } from 'types/AppListSubItem';

import styles from 'assets/styles/components/app/AppListGroupItem.module.css';

type Props = {
  item: TAppListSubItem;
};

export default class AppListSubItem extends Component<Props> {
  classNames = clsx([styles.wrapper, this.props.item.checked && styles['wrapper--checked']]);

  render() {
    return (
      <div className={this.classNames}>
        <span className={styles.title}>{this.props.item.title}</span>
        <span className={styles.circle} />
      </div>
    );
  }
}
