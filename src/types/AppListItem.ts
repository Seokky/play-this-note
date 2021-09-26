import { AppListSubItem } from './AppListSubItem';
import { AppListGroupTitle } from './AppListGroupTitle';

export type AppListItem = {
  title: AppListGroupTitle;
  multiple: boolean;
  expanded: boolean;
  items: AppListSubItem[];
}
