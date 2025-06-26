import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SelectedTag = {
  id: number;
  name: string;
};

type VariableStore = {
  selectedTags: SelectedTag[];
  addSelected: (tag: SelectedTag) => void;
  removeSelected: (id: number) => void;
  clearSelected: () => void;
};

export const useVariableStore = create<VariableStore>()(     // this is for edit variables store
  persist(
    (set, get) => ({ 
      selectedTags: [],

      addSelected: (tag) => {
        const exists = get().selectedTags.some((t) => t.id === tag.id);
        if (!exists) {
          set({ selectedTags: [...get().selectedTags, tag] });
        }
      },

      removeSelected: (id) => {
        const current = get().selectedTags;
        const filtered = current.filter((t) => t.id !== id);
        if (filtered.length !== current.length) {
          set({ selectedTags: filtered });
        }
      },

      clearSelected: () => set({ selectedTags: [] }),
    }),
    {
      name: 'variable-store', 
    }
  )
);
