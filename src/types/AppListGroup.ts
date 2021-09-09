import { AppListGroupItem } from './AppListGroupItem';

export type AppListGroup = {
  title: string;
  multiple: boolean;
  expanded: boolean;
  items: AppListGroupItem[];
}