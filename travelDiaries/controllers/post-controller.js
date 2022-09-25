import mongoose, { mongo, startSession } from "mongoose";
import Post from "../models/Post";
import User from "../models/User";

export const getAllPosts = async (req, res) => {
  let posts;
  try {
    posts = await Post.find();
  } catch (err) {
    return console.log(err);
  }

  if (!posts) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }

  return res.status(200).json({ posts });
};
export const addPost = async (req, res) => {
  const { title, description, location, date, image, user } = req.body;

  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !location &&
    location.trim() === "" &&
    !date &&
    !user &&
    !image &&
    image.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Data" });
  }

  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }

  if (!existingUser) {
    return res.status(404).json({ message: "User not found" });
  }

  let post;

  try {
    post = new Post({
      title,
      description,
      image,
      location,
      date: new Date(`${date}`),
      user,
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    existingUser.posts.push(post);
    await existingUser.save({ session });
    post = await post.save({ session });
    session.commitTransaction();
  } catch (err) {
    return console.log(err);
  }

  if (!post) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }
  return res.status(201).json({ post });
};

export const getPostById = async (req, res) => {
  const id = req.params.id;

  let post;

  try {
    post = await Post.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!post) {
    return res.status(404).json({ message: "No post found" });
  }
  return res.status(200).json({ post });
};

export const updatePost = async (req, res) => {
  const id = req.params.id;
  const { title, description, location, image } = req.body;

  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !location &&
    location.trim() === "" &&
    !image &&
    image.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Data" });
  }

  let post;
  try {
    post = await Post.findByIdAndUpdate(id, {
      title,
      description,
      image,
      location,
    });
  } catch (err) {
    return console.log(err);
  }

  if (!post) {
    return res.status(500).json({ message: "Unable to update" });
  }
  return res.status(200).json({ message: "Updated Successfully" });
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  let post;
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    post = await Post.findById(id).populate("user");
    post.user.posts.pull(post);
    await post.user.save({ session });
    post = await Post.findByIdAndRemove(id);
    session.commitTransaction();
  } catch (err) {
    return console.log(err);
  }
  if (!post) {
    return res.status(500).json({ message: "Unable to delete" });
  }

  return res.status(200).json({ message: "Deleted Successfully" });
};
