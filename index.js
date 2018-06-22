var recipes = {
  
}

function updateObjectWithKeyAndValue(object, key, value) {
  result = Object.assign({key: value}, object);
  return result
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  result = Object.assign({},object);
  delete result[key]
  return result
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}