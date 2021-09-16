import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppList } from 'types/AppList';
import { AppListGroupTitle } from 'types/AppListGroupTitle';

interface SetsState {
  sets: AppList
}

const initialState: SetsState = {
  sets: [
    {
      title: 'Мои наборы',
      multiple: false,
      expanded: false,
      items: []
    },
    {
      title: 'Все ноты',
      multiple: true,
      expanded: false,
      items: [
        {
          title: 'test',
          checked: false,
        },
        {
          title: 'test',
          checked: false,
        },
        {
          title: 'test',
          checked: false,
        },
      ]
    },
    {
      title: 'Вокал (по октавам)',
      multiple: true,
      expanded: false,
      items: [
        {
          title: 'Субконтр-октава (A0-B0)',
          checked: false,
        },
        {
          title: 'Контр-октава (C1-B1)',
          checked: false,
        },
        {
          title: 'Большая октава (C2-B2)',
          checked: false,
        },
        {
          title: 'Малая октава (C3-B3)',
          checked: false,
        },
        {
          title: 'Первая октава (C4-B4)',
          checked: false,
        },
        {
          title: 'Вторая октава (C5-B5)',
          checked: false,
        },
        {
          title: 'Третья октава (C6-B6)',
          checked: false,
        },
        {
          title: 'Четвертая октава (C7-B7)',
          checked: false,
        },
      ]
    },
    {
      title: 'Гитара (по ладам)',
      multiple: false,
      expanded: false,
      items: [
        {
          title: 'первые 3 лада',
          checked: false,
        },
        {
          title: 'первые 5 ладов',
          checked: false,
        },
        {
          title: 'первые 7 ладов',
          checked: false,
        },
        {
          title: 'первые 9 ладов',
          checked: false,
        },
        {
          title: 'первые 12 ладов',
          checked: false,
        },
        {
          title: 'первые 15 ладов',
          checked: false,
        },
      ]
    },
    {
      title: 'Гитара (по струнам)',
      multiple: true,
      expanded: false,
      items: [
        {
          title: 'test',
          checked: false,
        },
        {
          title: 'test',
          checked: false,
        },
        {
          title: 'test',
          checked: false,
        },
      ]
    },
    {
      title: 'Укулеле (по ладам)',
      multiple: false,
      expanded: false,
      items: [
        {
          title: 'test',
          checked: false,
        },
        {
          title: 'test',
          checked: false,
        },
        {
          title: 'test',
          checked: false,
        },
      ]
    },
    {
      title: 'Укулеле (по струнам)',
      multiple: true,
      expanded: false,
      items: [
        {
          title: 'test',
          checked: false,
        },
        {
          title: 'test',
          checked: false,
        },
        {
          title: 'test',
          checked: false,
        },
      ]
    },
  ]
};

export const setsSlice = createSlice({
  name: 'sets',
  initialState,
  reducers: {
    expandListGroup: (state, action: PayloadAction<AppListGroupTitle>) => {
      const group = state.sets.find((s) => s.title === action.payload)!;

      group.expanded = !group.expanded;
    }
  }
});

export const { expandListGroup } = setsSlice.actions;

export default setsSlice.reducer;