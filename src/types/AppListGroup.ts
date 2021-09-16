import { AppListGroupItem } from './AppListGroupItem';
import { AppListGroupTitle } from './AppListGroupTitle';

export type AppListGroup = {
  title: AppListGroupTitle;
  multiple: boolean;
  expanded: boolean;
  items: AppListGroupItem[];
}