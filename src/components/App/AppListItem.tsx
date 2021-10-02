import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandListItem } from 'store/setsSlice';
import clsx from 'clsx';
import { AppListItem as TAppListItem } from 'types/AppListItem';
import angleSvg from 'assets/icons/angle-down.svg';
import styles from 'assets/styles/components/app/AppListGroup.module.css';

import AppListSubItem from './AppListSubItem';

type Props = {
  item: TAppListItem;
  expandListItem: typeof expandListItem;
};

class AppListItem extends Component<Props> {
  render() {
    const hasItems = this.props.item.items.length > 0;

    const angleIcon = hasItems && <img src={angleSvg} alt="expand" />;

    const items = hasItems && this.props.item.expanded && (
      <div className={styles.items}>
        {this.props.item.items.map((i) => (
          <AppListSubItem key={i.title} item={i} parentTitle={this.props.item.title} />
        ))}
      </div>
    );

    const wrapperClassNames = clsx([
      styles.wrapper,
      this.props.item.expanded && styles['wrapper--expanded'],
    ]);

    return (
      <div className={wrapperClassNames}>
        <div className={styles.title} onClick={this.onClick}>
          {this.props.item.title}
          {angleIcon}
        </div>

        {items}
      </div>
    );
  }

  onClick = () => {
    this.props.expandListItem(this.props.item.title);
  };
}

const mapDispatchToProps = { expandListItem };

export default connect(null, mapDispatchToProps)(AppListItem);
