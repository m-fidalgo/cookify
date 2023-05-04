import { SelectItem } from 'app/types';

export type SelectProps = {
  items: SelectItem[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  value?: string[];
};
