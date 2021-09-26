import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppList } from 'types/AppList';
import { AppListGroupTitle } from 'types/AppListGroupTitle';
import { NOTES } from 'app-constants/notes';
import { getFirstNFrets } from '../app-constants/guitar-frets';

interface SetsState {
  sets: AppList;
}

const initialState: SetsState = {
  sets: [
    {
      title: 'Мои наборы',
      multiple: false,
      expanded: false,
      items: [],
    },
    {
      title: 'Все ноты (по октавам)',
      multiple: true,
      expanded: false,
      items: [
        {
          title: 'Субконтр-октава (A0-B0)',
          notes: NOTES.OCTAVES.SUB_CONTRA,
          checked: false,
        },
        {
          title: 'Контр-октава (C1-B1)',
          notes: NOTES.OCTAVES.CONTRA,
          checked: false,
        },
        {
          title: 'Большая октава (C2-B2)',
          notes: NOTES.OCTAVES.GREAT,
          checked: false,
        },
        {
          title: 'Малая октава (C3-B3)',
          notes: NOTES.OCTAVES.SMALL,
          checked: false,
        },
        {
          title: 'Первая октава (C4-B4)',
          notes: NOTES.OCTAVES.ONE_LINE,
          checked: false,
        },
        {
          title: 'Вторая октава (C5-B5)',
          notes: NOTES.OCTAVES.TWO_LINE,
          checked: false,
        },
        {
          title: 'Третья октава (C6-B6)',
          notes: NOTES.OCTAVES.THREE_LINE,
          checked: false,
        },
        {
          title: 'Четвертая октава (C7-B7)',
          notes: NOTES.OCTAVES.FOUR_LINE,
          checked: false,
        },
      ],
    },
    {
      title: 'Вокал (по тембру)',
      multiple: true,
      expanded: false,
      items: [],
    },
    {
      title: 'Гитара (по ладам)',
      multiple: false,
      expanded: false,
      items: [
        {
          title: 'первые 3 лада',
          checked: false,
          notes: getFirstNFrets(3),
        },
        {
          title: 'первые 5 ладов',
          checked: false,
          notes: getFirstNFrets(5),
        },
        {
          title: 'первые 7 ладов',
          checked: false,
          notes: getFirstNFrets(7),
        },
        {
          title: 'первые 9 ладов',
          checked: false,
          notes: getFirstNFrets(9),
        },
        {
          title: 'первые 12 ладов',
          checked: false,
          notes: getFirstNFrets(12),
        },
      ],
    },
    {
      title: 'Гитара (по струнам)',
      multiple: true,
      expanded: false,
      items: [
        {
          title: '1-я струна',
          notes: NOTES.GUITAR.STRINGS.FIRST,
          checked: false,
        },
        {
          title: '2-я струна',
          notes: NOTES.GUITAR.STRINGS.SECOND,
          checked: false,
        },
        {
          title: '3-я струна',
          notes: NOTES.GUITAR.STRINGS.THIRD,
          checked: false,
        },
        {
          title: '4-я струна',
          notes: NOTES.GUITAR.STRINGS.FOURTH,
          checked: false,
        },
        {
          title: '5-я струна',
          notes: NOTES.GUITAR.STRINGS.FIFTH,
          checked: false,
        },
        {
          title: '6-я струна',
          notes: NOTES.GUITAR.STRINGS.SIXTH,
          checked: false,
        },
      ],
    },
  ],
};

export const setsSlice = createSlice({
  name: 'sets',
  initialState,
  reducers: {
    expandListGroup: (state, action: PayloadAction<AppListGroupTitle>) => {
      const group = state.sets.find((s) => s.title === action.payload)!;

      group.expanded = !group.expanded;
    },
  },
});

export const { expandListGroup } = setsSlice.actions;

export default setsSlice.reducer;
