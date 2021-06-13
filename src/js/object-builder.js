export default class ObjectBuilder {
  constructor() {
    // Where we will store the filter parameters
    this.value = {};
  }

  set(data = {}) {
    // Loop the new data
    for (let key in data) {
      // Set / reset the parameter in the object
      this.value[key] = [];
      // Call the add function to add the new data to the object
      this.add(data);
    }
  }

  add(data = {}) {
    // Loop the new data
    for (let key in data) {
      // If we dont have this parameter yet, create it as an array
      if (this.value[key] == undefined) this.value[key] = [];

      // If our value is an array
      if (Array.isArray(data[key])) {
        // Loop the value array
        data[key].forEach((value) => {
          // If the filter parameter value does not contain this value, then add it
          if (this.value[key].indexOf(value) == -1) this.value[key].push(value);
        });
      }else {
        // If the parameter value is not an array
        // Simply push the value to the filter
        if (this.value[key].indexOf(data[key]) == -1) this.value[key].push(data[key]);
      }
    }
  }

  remove(data = {}) {
    // Loop the new data
    for (let key in data) {
      // If we dont have this parameter yet, exit the function, nothing else to do
      if (this.value[key] == undefined) return;

      // If our value is an array
      if (Array.isArray(data[key])) {
        // Loop the value array
        data[key].forEach((value) => {
          // If the filter parameter value contains this value, then remove it
          if (this.value[key].indexOf(value) >= 0) this.value[key] = this.value[key].filter((item) => item != value);
        });
      }else {
        // If the parameter value is not an array
        // Simply remove the value from the filter
        if (this.value[key].indexOf(data[key]) >= 0) this.value[key] = this.value[key].filter((item) => item != data[key]);
      }

      // If there are no filter values left, delete the parameter
      if (this.value[key].length === 0) delete this.value[key];
    }
  }

  clear(key = false) {
    // If we specify a key to remove
    if (key && typeof key == 'string') {
      // Remove that key
      delete this.value[key];
    }else {
      // Otherwise loop all the object and delete them
      for (let key in this.value) delete this.value[key];
    }
  }

  get(key = false) {
    // Return the requested value
    return (key && typeof key == 'string') ? this.value[key] : this.value;
  }
}