class Chat {
  constructor() {
    this.userNames = new Set();
    this.sockets = new Map();
  }

  login(userName) {
    const result = {
      success: false,
      data: '',
    };

    if (this.userNames.has(userName)) result.data = 'The name is already taken';
    else {
      this.userNames.add(userName);
      result.data = {
        userName,
        userNames: [...this.userNames],
      };
      result.success = true;
    }
    return result;
  }

  getUserNames() {
    return [...this.userNames];
  }

  removeUser(socket) {
    this.userNames.delete(this.sockets.get(socket));
    this.sockets.delete(socket);
  }
}

module.exports = {
  Chat,
};
