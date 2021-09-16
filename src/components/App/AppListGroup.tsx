import React, { Component } from 'react';
import { connect } from "react-redux";
import { expandListGroup } from "store/setsSlice";
import clsx from 'clsx';
import { AppListGroup as TAppListGroup } from 'types/AppListGroup';
import angleSvg from 'assets/icons/angle-down.svg';
import styles from 'assets/styles/components/app/AppListGroup.module.css';

import AppListGroupItem from './AppListGroupItem';

type Props = {
  group: TAppListGroup
  expandListGroup: typeof expandListGroup,
}

class AppListGroup extends Component<Props> {
  render() {
    const hasItems = this.props.group.items.length > 0;

    const angleIcon = (hasItems && <img src={angleSvg} alt="expand" />);

    const items = (
      hasItems &&
      this.props.group.expanded &&
      <div className={styles.items}>
        {
          this.props.group.items.map((i) =>
            <AppListGroupItem key={i.title} item={i} />
          )
        }
      </div>
    );

    const wrapperClassNames = clsx([
      styles.wrapper,
      this.props.group.expanded && styles['wrapper--expanded']
    ]);

    return (
      <div className={wrapperClassNames} onClick={this.onClick}>
        <div className={styles.title}>
          { this.props.group.title }
          { angleIcon }
        </div>

        { items }
      </div>
    );
  }

  onClick = () => {
    this.props.expandListGroup(this.props.group.title);
  }
}

const mapDispatchToProps = { expandListGroup };

export default connect(null, mapDispatchToProps)(AppListGroup);