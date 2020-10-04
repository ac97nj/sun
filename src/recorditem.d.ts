type RecordItem = {
  type: string;
  name: string;
  text: string;
  notes?: string;
  amount?: number;
  createAt?: string;
  id?: number;
}


type RecordItems = {
  type: string;
  name: string;
  text: string;
  notes: string;
  amount: number;
  createAt?: string;
  id: number;
}




type tagItem = {
  dataIcon: RecordItem[];
  setRead: () => void;
  getSave: () => RecordItem[];
  crateTag: (data: RecordItem) => void;
  removeTag: (value: string) => void;
}


type rootState = {
  dataIcon: RecordItem[];
  tagIcon: RecordItem[];
  recordData: RecordItem[];
}



interface Window {
  setRead: void;
  crateTag: (add: RecordItem) => void;
  getSave: RecordItem[];

}