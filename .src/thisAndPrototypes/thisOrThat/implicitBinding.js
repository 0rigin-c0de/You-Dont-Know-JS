let blog = {
  name: "Sunil",
  address: "Hashnode",
  message: function () {
    console.log(`${this.name} blogs on ${this.address}`);
  },
};

blog.message();
