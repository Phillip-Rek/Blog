const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      default: null,
    },
    description: {
      type: String,
      default: null
    },
    markdown: {
      type: String,
      required: true,
      default:null,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      default:null,
    },
  });

  articleSchema.pre("validate", function (next) {
      this.slug = this.title&& this.title, { lower: true, strict: true };
  });

  module.exports = mongoose.model("Article", articleSchema);
