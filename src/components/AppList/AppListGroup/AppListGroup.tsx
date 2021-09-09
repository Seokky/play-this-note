import React, { Component } from 'react';
import clsx from 'clsx';

import { AppListGroup as TAppListGroup } from 'types/AppListGroup';

import angleSvg from 'assets/icons/angle-down.svg';
import styles from './AppListGroup.module.css';

import AppListGroupItem from './AppListGroupItem/AppListGroupItem';

type Props = {
  group: TAppListGroup
}

export default class AppListGroup extends Component<Props> {
  render() {
    const { title, expanded } = this.props.group;

    const hasItems = this.props.group.items.length > 0;

    const angleIcon = (
      hasItems && <img src={angleSvg} alt="expand" />
    );

    const items = (
      hasItems &&
      expanded &&
      <div className={styles.items}>
        {
          this.props.group.items.map(
            (i) => <AppListGroupItem key={i.title} item={i} />
          )
        }
      </div>
    );

    const wrapperClassNames = clsx([
      styles.wrapper,
      expanded && styles['wrapper--expanded']
    ]);

    return (
      <div className={wrapperClassNames} onClick={this.onClick}>
        <div className={styles.title}>
          { title }
          { angleIcon }
        </div>

        { items }
      </div>
    );
  }

  onClick = () => {
    //
  }
}