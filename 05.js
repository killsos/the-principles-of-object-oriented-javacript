function hasPrototypeProperty（obj,name）{
  return name in obj && !Object.hasOwnProperty(name);
}
