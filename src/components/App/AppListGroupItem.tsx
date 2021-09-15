import React, { Component } from 'react';
import clsx from 'clsx';

import { AppListGroupItem as TAppListGroupItem } from 'types/AppListGroupItem';

import styles from 'assets/styles/components/app/AppListGroupItem.module.css';

type Props = {
  item: TAppListGroupItem;
}

export default class AppListGroupItem extends Component<Props> {
  classNames = clsx([
    styles.wrapper,
    this.props.item.checked && styles['wrapper--checked'],
  ]);

  render() {
    return (
      <div className={this.classNames}>
        <span>{ this.props.item.title }</span>
        <span className={styles.circle} />
      </div>
    );
  }
}