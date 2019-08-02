const query = function() {
  const self = {};

  let tables = [];
  let selector = null;

  let whereClauses = [];
  let havingClauses = [];

  let order = [];
  let group = [];

  const selectorAll = row => row;

  self.select = e => {
    if (selector != null) throw new Error("Duplicate SELECT");
    selector = e || false;
    return self;
  };

  self.from = function() {
    if (tables.length > 0) throw new Error("Duplicate FROM");
    tables = Array.from(arguments);
    return self;
  };

  self.where = function() {
    whereClauses.push(Array.from(arguments));
    return self;
  };

  self.having = function() {
    havingClauses.push(Array.from(arguments));
    return self;
  };

  self.orderBy = function() {
    if (order.length > 0) throw new Error("Duplicate ORDERBY");
    order = Array.from(arguments);
    return self;
  };

  self.groupBy = function() {
    if (group.length > 0) throw new Error("Duplicate GROUPBY");
    group = Array.from(arguments);
    return self;
  };

  self.execute = function() {
    let tmpdata = [];
    let gdata = [];

    let data = [];
    let t = 0;

    // JOIN

    if (tables.length > 1) {
      tables.forEach(() => {
        data.push([]);
      });

      tables[0].forEach((row, i) => {
        for (t = 0; t < tables.length; t++) {
          data[t].push(tables[t][i]);
        }
      });

      tmpdata = [];
      (function traverseTable(D, t) {
        if (D.length === 0) {
          tmpdata.push(t.slice(0));
        } else {
          for (let i = 0; i < D[0].length; i++) {
            t.push(D[0][i]);
            traverseTable(D.slice(1), t);
            t.splice(-1, 1);
          }
        }
      })(data, []);

      data = [];
      tmpdata.forEach((row, i) => {
        if (
          whereClauses.every(orWhereClauses => {
            return orWhereClauses.some(whereClause => {
              return whereClause(row);
            });
          })
        ) {
          data.push(row);
        }
      });
    } else if (tables.length === 1) {
      tables[0].forEach((row, i) => {
        if (
          whereClauses.every(orWhereClauses =>
            orWhereClauses.some(whereClause => whereClause(row))
          )
        ) {
          data.push(row);
        }
      });
    } else {
      data = [];
    }

    // Group

    if (group.length > 0) {
      let T = {};

      data.forEach(row => {
        let t = T;
        group.forEach(groupCallback => {
          let k = groupCallback(row);
          t[k] = t[k] || {};
          t = t[k];
        });
        t._data = t._data || [];
        t._data.push(row);
      });

      (function traverse(node, R) {
        if (node._data != null) {
          node._data.forEach(function(e) {
            R.push(e);
          });
        } else {
          for (let k in node) {
            k = /\d+/.test(k) ? Number(k) : k;
            let row = [k, []];
            traverse(node[k], row[1]);
            R.push(row);
          }
        }
      })(T, gdata);

      gdata.forEach(grow => {
        if (
          havingClauses.every(orHavingClauses => {
            return orHavingClauses.some(havingClause => {
              return havingClause(grow);
            });
          })
        ) {
          tmpdata.push(grow);
        }
      });
      data = tmpdata;
    }

    order.forEach(orderCallback => {
      data = data.sort(orderCallback);
    });

    return data.map(selector || selectorAll);
  };

  return self;
};
