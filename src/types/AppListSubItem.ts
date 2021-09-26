import { MusicalNote } from './MusicalNote';

export type AppListSubItem = {
  title: string;
  checked: boolean;
  notes: MusicalNote[];
}
