class IndexController {
  getIndex(req, res) {
    res.json({ message: 'API funcionando!' });
  }
}

export default IndexController;