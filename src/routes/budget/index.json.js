const budgets = [
  {
    name: 'Mortgage',
    type: 'bill',
    group: 'Bills',
    amount: 100.00,
    category: 'something',
  }
];


export async function get(req, res) {
  res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(budgets));
}