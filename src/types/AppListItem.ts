import { AppListSubItem } from './AppListSubItem';
import { AppListItemTitle } from './AppListItemTitle';

export type AppListItem = {
  title: AppListItemTitle;
  multiple: boolean;
  expanded: boolean;
  items: AppListSubItem[];
}
