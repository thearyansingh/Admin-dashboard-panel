import Product from "../model/Product1.js";

export const addProduct = async (req, res) => {
  try {
    const { name, description, price, discount, category } = req.body;
    // const images = req.files?.map((file) => ({
    //   filename: file.filename,
    //   path: file.path,
    //   mimetype: file.mimetype,
    //   size: file.size,
    // }));
    const product = await Product.create({
      name,
      description,
      price,
      discount,
      category,
      // images,
    });

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding product",
      error: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      success: true,
      total: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching product",
      error: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { name, description, price, discount, category } = req.body;

    let updatedData = {
      name,
      description,
      price,
      discount,
      category,
    };

   
    // if (req.files && req.files.length > 0) {
    //   updatedData.images = req.files.map((file) => ({
    //     filename: file.filename,
    //     path: file.path,
    //     mimetype: file.mimetype,
    //     size: file.size,
    //   }));
    // }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true },
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating product",
      error: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting product",
      error: error.message,
    });
  }
};
