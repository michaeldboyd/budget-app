import { Client as PlaidClient, environments } from 'plaid';

const {
  PLAID_CLIENT_ID='5c2512087caf7c0012fbe5c2',
  PLAID_SECRET='7a6ad06206be538bc3719714cf01ad',
  PLAID_PUBLIC_KEY='5b70eda36e0334015f158a8fdb1bce',
  PLAID_PRODUCTS='transactions',
  PLAID_COUNTRY_CODES='US,CA,GB,FR,ES',
  PLAID_ENV='sandbox',
} = process.env;

const client = new PlaidClient(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PUBLIC_KEY,
  environments[PLAID_ENV],
  {version: '2019-05-29', clientApp: 'Budget'}
)

export default client;