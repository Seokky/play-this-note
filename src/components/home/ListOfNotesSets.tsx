import React, { Component } from 'react';
import { RootState } from 'types/RootState';
import { AppList as TAppList } from 'types/AppList';
import { connect } from "react-redux";
import styles from 'assets/styles/components/home/ListOfNotesSets.module.css';
import AppList from 'components/app/AppList';

type Props = {
  sets: TAppList
}
class ListOfNotesSets extends Component<Props> {
  render() {
    return (
      <div className={styles.wrapper}>
        <AppList list={this.props.sets} />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): Props => ({
  sets: state.sets.sets
});

export default connect(mapStateToProps)(ListOfNotesSets);