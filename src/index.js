export default function(styles) {
  return function() {
    let styleList = [];
    const argumentsList = Array.from(arguments);

    argumentsList.forEach(a => {
      if (typeof a == "string") {
        if (styles[a]) styleList.push(styles[a]);
      }

      if (a instanceof Object) {
        Object.keys(a).forEach(k => {
          if (a[k]) {
            if (styles[k]) styleList.push(styles[k]);
          }
        });
      }

      if (a instanceof Array) {
        a.forEach(k => {
          if (styles[k]) styleList.push(styles[k]);
        });
      }
    });

    return styleList;
  }
}
