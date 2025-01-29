function unique ( ... arr) {
    return [...new Set(...arr)];
}

function flatten (arr) {
    
        return arr.reduce((acc, item) => {
          if (Array.isArray(item)) {
            return acc.concat(flatten(item));
          } else {
            return acc.concat(item);
          }
        }, []);

      
}

function chunk (arr, size) {
        if (!Array.isArray(arr)) {
          throw new Error('Input must be an array');
        }
        if (typeof size !== 'number' || size <= 0) {
          throw new Error('Size must be a positive number');
        }
      
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            
          result.push(arr.slice(i, i + size));
        }
        
        return result;
      
      
}


module.exports = {
    unique,
    flatten,
    chunk
}