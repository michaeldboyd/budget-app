import Dexie from 'dexie';

const db = new Dexie('budget-app');

db.version(1).stores({
  budgets: "++id,&name,type,group,amount,*category",
});

export default db;