import {
  Control,
  FieldName,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

export interface IProject {
  _id: string;
  status: string;
  counselor: string;
  client: string;
  counselingDate: string;
  timeNoteSubmitted: string;
  state: string;
  billed: string;
  notes: string;
}

export interface IEntry {
  status: string;
  client: string;
  billed: string;
  noteEntries: {
    [key: string]: string;
    _id: string;
    counselor: string;
    counselingDate: string;
    timeNoteSubmitted: string;
    state: string;
    notes: string;
  };
}

//https://stackoverflow.com/questions/70157050/how-to-pass-an-array-as-a-prop-and-render-in-child-component-in-typescript-react

export interface IEventProps {
  eventValues?: IEntry[];
  setEditEntry?: React.Dispatch<React.SetStateAction<IProject>>;
}

export interface IClose {
  closeModal(): void;
}

export interface ICloseEditor {
  closeModal(): void;
  editEntry?: IEntry;
}

export interface IToggleState {
  enableToggle(checked: boolean): void;
  enabled: boolean;
}

export interface ISwitch {
  switchLabel: string;
}

export interface IPlannerProps {
  isOpen: boolean;
  closeModal(): void;
  openModal(event: React.MouseEvent<HTMLButtonElement>): void;
}

export interface IEditorPlannerProps {
  isEditorOpen: boolean;
  closeModal(): void;
  editEntry?: IEntry;
}

export type UseControllerProps<TFieldValues extends FieldValues = FieldValues> =
  {
    name: FieldName<TFieldValues>;
    rules?: Exclude<
      RegisterOptions,
      'valueAsNumber' | 'valueAsDate' | 'setValueAs'
    >;
    onFocus?: () => void;
    defaultValue?: unknown;
    control?: Control<TFieldValues>;
  };

export interface IEmployee {
  email: string;
  password: string;
}

export interface IPropsTableBody {
  setEditEntry: React.Dispatch<React.SetStateAction<IProject>>;
}
