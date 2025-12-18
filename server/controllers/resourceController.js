// Resource controllers

exports.getResources = async (req, res) => {
  res.status(200).json({ success: true, message: 'Get resources endpoint' });
};

exports.getResource = async (req, res) => {
  res.status(200).json({ success: true, message: 'Get resource endpoint' });
};

exports.createResource = async (req, res) => {
  res.status(201).json({ success: true, message: 'Create resource endpoint' });
};

exports.updateResource = async (req, res) => {
  res.status(200).json({ success: true, message: 'Update resource endpoint' });
};

exports.deleteResource = async (req, res) => {
  res.status(200).json({ success: true, message: 'Delete resource endpoint' });
};

exports.downloadResource = async (req, res) => {
  res.status(200).json({ success: true, message: 'Download resource endpoint' });
};
