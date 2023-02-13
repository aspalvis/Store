export const fillItem = (resultObject: any, parentObject: any) => {
  const resultObject_Entries = Object.entries(resultObject);
  var result = { ...resultObject };
  resultObject_Entries.forEach((row) => {
    result[row[0]] = parentObject[row[0]];
  });
  return result;
};
