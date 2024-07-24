const Catering = require("../../models/Services/cateringServiceSchema");
const Decoration = require("../../models/Services/decorationServiceSchema");
const MarriageHall = require("../../models/Services/marriageHallSchema");
const Parlor = require("../../models/Services/parlorSchema");
const Photographer = require("../../models/Services/photographyServiceSchema");
const User = require("../../models/Users/userSchema");
const Vendor = require(`../../models/Users/vendorSchema`);

exports.totalData = async function (req, resp) {
  try {
    const users = await User.countDocuments({});
    const vendors = await Vendor.countDocuments({});
    const catering = await Catering.countDocuments({});
    const decoration = await Decoration.countDocuments({});
    const marriageHall = await MarriageHall.countDocuments({});
    const parlor = await Parlor.countDocuments({});
    const photographer = await Photographer.countDocuments({});

    resp.status(200).json({
      message: "Success",
      data: {
        users,
        vendors,
        catering,
        decoration,
        marriageHall,
        parlor,
        photographer,
      },
    });
  } catch (err) {
    console.log(err);
    resp.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

//Vendors
exports.getAllVendors = async function (req, resp, next) {
  try {
    let queryObj = { ...req.query };
    const excludedWords = ["currentPage", "recordsPerPage", "sortBy"];
    excludedWords.forEach((el) => {
      delete queryObj[el];
    });

    // Handle search by name using $regex
    console.log(queryObj.name);
    if (queryObj.name && queryObj.name.trim() !== "") {
      queryObj.name = { $regex: new RegExp(queryObj.name, "i") };
    } else {
      delete queryObj.name;
    }
    let totalRecords = await Vendor.countDocuments(queryObj);

    let query = Vendor.find(queryObj);
    const recordsPerPage = req.query.recordsPerPage * 1 || 10;
    const currentPage = req.query.currentPage * 1 || 1;
    let skip = (currentPage - 1) * recordsPerPage;
    query = query.skip(skip).limit(recordsPerPage);
    const data = await query;
    return resp.status(200).json({
      result: totalRecords,
      status: "Success",
      data: data,
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    return resp
      .status(500)
      .json({ status: "Failed", message: "Data not Fetched" });
  }
};

exports.getSingleVendor = async function (req, resp, next) {
  try {
    const { id } = req.params;
    const data = await Vendor.findById(id);
    return resp.status(200).json({
      status: "Success",
      data,
    });
  } catch (err) {
    console.log(err);
    return resp.status(401).json({
      status: "Failed",
      message: "Data not Fetched",
    });
  }
};

exports.deleteSingleVendor = async function (req, resp, next) {
  try {
    const { id } = req.params;
    await Vendor.findByIdAndDelete(id);
    resp.status(200).json({
      status: "Success",
    });
  } catch (err) {
    console.log(err);
    return resp.status(401).json({
      status: "Failed",
      message: "Data not Deleted",
    });
  }
};

//Users

exports.getAllUsers = async function (req, resp, next) {
  try {
    let queryObj = { ...req.query };
    const excludedWords = ["currentPage", "recordsPerPage", "sortBy"];
    excludedWords.forEach((el) => {
      delete queryObj[el];
    });

    // Handle search by name using $regex
    console.log(queryObj.name);
    if (queryObj.name && queryObj.name.trim() !== "") {
      queryObj.name = { $regex: new RegExp(queryObj.name, "i") };
    } else {
      delete queryObj.name;
    }
    let totalRecords = await User.countDocuments(queryObj);

    let query = User.find(queryObj);
    const recordsPerPage = req.query.recordsPerPage * 1 || 10;
    const currentPage = req.query.currentPage * 1 || 1;
    let skip = (currentPage - 1) * recordsPerPage;
    query = query.skip(skip).limit(recordsPerPage);
    const data = await query;
    return resp.status(200).json({
      result: totalRecords,
      status: "Success",
      data: data,
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    return resp
      .status(500)
      .json({ status: "Failed", message: "Data not Fetched" });
  }
};

exports.getSingleUser = async function (req, resp, next) {
  try {
    const { id } = req.params;
    const data = await User.findById(id);
    return resp.status(200).json({
      status: "Success",
      data,
    });
  } catch (err) {
    console.log(err);
    return resp.status(401).json({
      status: "Failed",
      message: "Data not Fetched",
    });
  }
};

exports.deleteSingleUser = async function (req, resp, next) {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    resp.status(200).json({
      status: "Success",
    });
  } catch (err) {
    console.log(err);
    return resp.status(401).json({
      status: "Failed",
      message: "Data not Deleted",
    });
  }
};

//Services
exports.getAllServices = async function (req, resp, next) {
  try {
    let queryObj = { ...req.query };
    const excludedWords = ["currentPage", "recordsPerPage", "sortBy"];
    excludedWords.forEach((el) => {
      delete queryObj[el];
    });

    // Handle search by name using $regex
    console.log(queryObj.name);
    if (queryObj.name && queryObj.name.trim() !== "") {
      queryObj.name = { $regex: new RegExp(queryObj.name, "i") };
    } else {
      delete queryObj.name;
    }

    const recordsPerPage = req.query.recordsPerPage * 1 || 10;
    const currentPage = req.query.currentPage * 1 || 1;

    const marriageHalls = await MarriageHall.find(queryObj);
    const cateringServices = await Catering.find(queryObj);
    const decorationServices = await Decoration.find(queryObj);
    const parlorServices = await Parlor.find(queryObj);
    const photographyServices = await Photographer.find(queryObj);

    const allServices = [
      ...marriageHalls,
      ...cateringServices,
      ...decorationServices,
      ...parlorServices,
      ...photographyServices,
    ];

    const totalMarriageHalls = await MarriageHall.countDocuments(queryObj);
    const totalCatering = await Catering.countDocuments(queryObj);
    const totalDecoration = await Decoration.countDocuments(queryObj);
    const totalParlor = await Parlor.countDocuments(queryObj);
    const totalPhotography = await Photographer.countDocuments(queryObj);

    const totalServices =
      totalMarriageHalls +
      totalCatering +
      totalDecoration +
      totalParlor +
      totalPhotography;

    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const paginatedServices = allServices.slice(startIndex, endIndex);

    const remainingServices = totalServices - currentPage * recordsPerPage;
    const hasNextPage = remainingServices > recordsPerPage;

    return resp.status(200).json({
      result: totalServices,
      status: "Success",
      data: paginatedServices,
      hasNextPage,
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    return resp
      .status(500)
      .json({ status: "Failed", message: "Data not Fetched" });
  }
};
exports.getSingleService = async function (req, resp, next) {
  try {
    const { id } = req.params;
    let service = await MarriageHall.findById(id).populate("vendor");
    if (!service) {
      service = await Catering.findById(id).populate("vendor");
    }
    if (!service) {
      service = await Decoration.findById(id).populate("vendor");
    }
    if (!service) {
      service = await Parlor.findById(id).populate("vendor");
    }
    if (!service) {
      service = await Photographer.findById(id).populate("vendor");
    }
    if (!service) {
      return resp.status(404).json({
        status: "Failed",
        message: "Service not found",
      });
    }
    return resp.status(200).json({
      status: "Success",
      data: service,
    });
  } catch (error) {
    console.error("Error fetching service:", error);
    return resp.status(500).json({
      status: "Failed",
      message: "Data not Fetched",
    });
  }
};

exports.deleteSingleService = async function (req, resp, next) {
  try {
    const { id } = req.params;
    let service = await MarriageHall.findByIdAndDelete(id);

    if (!service) {
      service = await Catering.findByIdAndDelete(id);
    }
    if (!service) {
      service = await Decoration.findByIdAndDelete(id);
    }
    if (!service) {
      service = await Parlor.findByIdAndDelete(id);
    }
    if (!service) {
      service = await Photographer.findByIdAndDelete(id);
    }
    if (!service) {
      return resp.status(404).json({
        status: "Failed",
        message: "Service not found",
      });
    }

    console.log("I am Deleting Service");
    return resp.status(200).json({
      status: "Success",
      message: "Service deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting service:", error);
    return resp.status(500).json({
      status: "Failed",
      message: "Data not Deleted",
    });
  }
};
