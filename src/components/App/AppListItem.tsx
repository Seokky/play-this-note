import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandListGroup } from 'store/setsSlice';
import clsx from 'clsx';
import { AppListItem as TAppListItem } from 'types/AppListItem';
import angleSvg from 'assets/icons/angle-down.svg';
import styles from 'assets/styles/components/app/AppListGroup.module.css';

import AppListSubItem from './AppListSubItem';

type Props = {
  group: TAppListItem;
  expandListGroup: typeof expandListGroup;
};

class AppListItem extends Component<Props> {
  render() {
    const hasItems = this.props.group.items.length > 0;

    const angleIcon = hasItems && <img src={angleSvg} alt="expand" />;

    const items = hasItems && this.props.group.expanded && (
      <div className={styles.items}>
        {this.props.group.items.map((i) => (
          <AppListSubItem key={i.title} item={i} />
        ))}
      </div>
    );

    const wrapperClassNames = clsx([
      styles.wrapper,
      this.props.group.expanded && styles['wrapper--expanded'],
    ]);

    return (
      <div className={wrapperClassNames} onClick={this.onClick}>
        <div className={styles.title}>
          {this.props.group.title}
          {angleIcon}
        </div>

        {items}
      </div>
    );
  }

  onClick = () => {
    this.props.expandListGroup(this.props.group.title);
  };
}

const mapDispatchToProps = { expandListGroup };

export default connect(null, mapDispatchToProps)(AppListItem);
