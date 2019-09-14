import client from 'src/PlaidClient'

function reducer(map, ids, hs) {
  return Object.keys(map).map((key) => {
    const e = {
      name: key,
      id: ids[key],
      hierarchy: hs[key],
    }
    if (Object.keys(map[key]).length){
      e.subs = reducer(map[key], ids, hs)
    }
    return e
  })
}

const categoryPromise = new Promise((resolve, reject) => {
  client.getCategories(function(err, response) {
    if (err) {
      return reject(err)
    }
    const ids = {};
    const hs = {};
    const map = response.categories.reduce((acc, {hierarchy, category_id}) => {
      const name = hierarchy[hierarchy.length - 1]
      let temp = acc
      for (let cat of hierarchy) {
        temp[cat] = temp[cat] || {}
        temp[cat] = temp[cat] || {}
        temp = temp[cat]
      }
      ids[name] = category_id
      hs[name] = hierarchy
      return acc
    }, {})

    resolve(reducer(map, ids, hs));
  });
})

export async function get(req, res) {
  try {
    const categories = await categoryPromise
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(
      JSON.stringify(categories)
      );
  } catch (e) {
    res.writeHead(500, {
      'Content-Type': 'application/json'
    });
    res.end()
  }
}
