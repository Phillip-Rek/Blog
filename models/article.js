const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    markdown: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  });

  articleSchema.pre("validate", function (next) {
      this.slug = this.title&& this.title, { lower: true, strict: true };
  });

  module.exports = mongoose.model("Article", articleSchema);
