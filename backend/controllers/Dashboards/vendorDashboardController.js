const Catering = require("../../models/Services/cateringServiceSchema");
const Decoration = require("../../models/Services/decorationServiceSchema");
const Parlor = require("../../models/Services/parlorSchema");
const Photographer = require("../../models/Services/photographyServiceSchema");
const MarriageHall = require("../../models/Services/marriageHallSchema");
const Vendor = require("../../models/Users/vendorSchema");
const Invitation = require("../../models/Services/invitationSchema");
exports.totalData = async function (req, resp) {
  try {
    const { user } = req;
    const vendorId = user._id;
    const catering = await Catering.countDocuments({ vendor: vendorId });
    const decoration = await Decoration.countDocuments({ vendor: vendorId });
    const marriageHall = await MarriageHall.countDocuments({
      vendor: vendorId,
    });
    const parlor = await Parlor.countDocuments({ vendor: vendorId });
    const photographer = await Photographer.countDocuments({
      vendor: vendorId,
    });

    resp.status(200).json({
      message: "Success",
      data: {
        totalServices:
          catering + decoration + marriageHall + parlor + photographer,
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

exports.createService = async function (req, res) {
  const { user } = req;
  const vendor = user.id;
  const { id } = req.params;
  console.log(id);
  let serviceData = req.body;

  // Check if imageCover is present in req.file (uploaded file)
  if (req.file) {
    // If file is uploaded, set imageCover field in serviceData
    serviceData.imageCover = req.file.filename;
  }

  let ServiceModel;
  let requiredFields;

  switch (id) {
    case "catering":
      ServiceModel = Catering;
      requiredFields = [
        "name",
        "price",
        "discountedPrice",
        "coordinates",
        "city",
        "description",
        "availability",
        "summary",
        "imageCover",
        "plates",
        "seating",
        "waiters",
        "packages",
      ];
      break;
    case "decoration":
      ServiceModel = Decoration;
      requiredFields = [
        "name",
        "price",
        "discountedPrice",
        "coordinates",
        "city",
        "description",
        "availability",
        "summary",
        "imageCover",
      ];
      break;
    case "parlor":
      ServiceModel = Parlor;
      requiredFields = [
        "name",
        "price",
        "discountedPrice",
        "coordinates",
        "city",
        "description",
        "availability",
        "summary",
        "imageCover",
        "type",
      ];
      break;
    case "photography":
      ServiceModel = Photographer;
      requiredFields = [
        "name",
        "price",
        "discountedPrice",
        "coordinates",
        "city",
        "description",
        "availability",
        "summary",
        "imageCover",
        "photographerGender",
      ];
      break;
    case "marriagehall":
      ServiceModel = MarriageHall;
      requiredFields = [
        "name",
        "price",
        "discountedPrice",
        "coordinates",
        "city",
        "description",
        "availability",
        "summary",
        "imageCover",
        "capacity",
        "type",
      ];
      break;
    case "invitation":
      ServiceModel = Invitation;
      requiredFields = [
        "name",
        "price",
        "discountedPrice",
        "coordinates",
        "city",
        "description",
        "availability",
        "summary",
        "imageCover",
      ];
      break;
    default:
      return res.status(400).json({ error: "Invalid service type" });
  }

  // Check if all required fields are present
  const missingFields = requiredFields.filter((field) => !serviceData[field]);
  if (missingFields.length > 0) {
    return res
      .status(400)
      .json({ error: `Missing required fields: ${missingFields.join(", ")}` });
  }
  serviceData = {
    ...serviceData,
    location: {
      coordinates: JSON.parse(serviceData.coordinates).map(Number).reverse(), //String a raha tha likn muje number chaiye
    },
  };
  try {
    const data = await ServiceModel.create({ ...serviceData, vendor });
    res
      .status(200)
      .json({ message: `${id} service created successfully`, data });
  } catch (error) {
    console.error(`Error creating ${id} service:`, error);
    res.status(400).json({ error: `Error creating ${id} service` });
  }
};
exports.getAllServices = async function (req, res, next) {
  const { user } = req;
  const vendorId = user._id;

  try {
    const marriageHalls = await MarriageHall.find({ vendor: vendorId });
    const cateringServices = await Catering.find({ vendor: vendorId });
    const decorationServices = await Decoration.find({ vendor: vendorId });
    const parlorServices = await Parlor.find({ vendor: vendorId });
    const photographyServices = await Photographer.find({ vendor: vendorId });

    // Merge the arrays
    const allServices = [
      ...marriageHalls,
      ...cateringServices,
      ...decorationServices,
      ...parlorServices,
      ...photographyServices,
    ];

    return res.status(200).json({
      result: allServices.length,
      status: "Success",
      data: allServices,
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    return res
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
    let service = await MarriageHall.findById(id);
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

exports.updateService = async function (req, res) {
  const { user } = req;
  const vendor = user.id;
  const { serviceId } = req.params;
  const serviceData = req.body;

  try {
    let service;
    service = await MarriageHall.findOneAndUpdate(
      { _id: serviceId, vendor },
      serviceData,
      { new: true, runValidators: true }
    );

    if (!service) {
      service = await Catering.findOneAndUpdate(
        { _id: serviceId, vendor },
        serviceData,
        { new: true, runValidators: true }
      );
    }

    if (!service) {
      service = await Decoration.findOneAndUpdate(
        { _id: serviceId, vendor },
        serviceData,
        { new: true, runValidators: true }
      );
    }

    if (!service) {
      service = await Parlor.findOneAndUpdate(
        { _id: serviceId, vendor },
        serviceData,
        { new: true, runValidators: true }
      );
    }

    if (!service) {
      service = await Photographer.findOneAndUpdate(
        { _id: serviceId, vendor },
        serviceData,
        { new: true, runValidators: true }
      );
    }

    if (!service) {
      return res.status(404).json({
        status: "Failed",
        message: "Service not found",
      });
    }

    return res.status(200).json({
      status: "Success",
      message: "Service updated successfully",
      data: service,
    });
  } catch (error) {
    console.error("Error updating service:", error);
    return res.status(500).json({
      status: "Failed",
      message: "Failed to update service",
    });
  }
};
