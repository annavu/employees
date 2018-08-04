class Employees {
  async getEmployees() {
    const apiCall = await fetch('https://api.myjson.com/bins/18ia4g');

    const data = await apiCall.json();

    return data;
  }
}