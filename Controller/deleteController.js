app.delete("/user/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findByIdAndDelete(id);

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error });
  }
});
