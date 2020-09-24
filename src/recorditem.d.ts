type RecordItem = {
  type: string;
  name: string;
  text: string;
  notes?: string;
  amount?: number;
  createAt?: Date;
  id?: number;
}


type tagItem = {
  dataIcon: RecordItem[];
  setRead: () => void;
  getSave: () => RecordItem[];
  crateTag: (data: RecordItem) => void;
  removeTag: (value: string) => void;
}


interface Window {
  setRead: void;
  crateTag: (add: RecordItem) => void;
  getSave: RecordItem[];

}