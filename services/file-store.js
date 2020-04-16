const fs = require('fs').promises;
const path = require('path');

class FileStore {
  filename = path.join(__dirname, './filestore.json');

  readDataFile() {
    const data = require(this.filename);
    return data;
  }

  async saveDataFile(data) {
    await fs.writeFile(this.filename, JSON.stringify(data), 'utf8');
  }
}

module.exports = FileStore;
