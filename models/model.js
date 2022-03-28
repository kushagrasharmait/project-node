module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        empNumber: Number,
        designation: String,
        department: String,

      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Employee = mongoose.model("Employee", schema);
    return Employee;
  };
  