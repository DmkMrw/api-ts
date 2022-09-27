export interface BaseRepository<K> {
  addItem(item: K): K;
  deleteItem(id: string): boolean;
  updateItem(id: string, item: K): K | undefined;
  getItemById(id: string): K | undefined;
  getAllItems(): Array<K>;
}