const mongoose = require("mongoose");
const ServiceModel = require(`../../models/Services/invitationSchema`);

exports.createService = async function (req, resp) {
  const { user } = req;
  const vendor = user.id;
  const { name, city, availability, price, description, coordinates, summary } =
    req.body;

  let imageCover;
  if (req.file) {
    imageCover = req.file.filename;
  }

  try {
    const data = await ServiceModel.create({
      name,
      city,
      availability,
      price,
      description,
      imageCover,
      vendor,
      summary,

      //   location: {
      //     coordinates: JSON.parse(coordinates).map(Number).reverse(), //String a raha tha likn muje number chaiye
      //   },
    });

    resp.status(200).json("Service Saved Successfully");
  } catch (error) {
    console.log("Service not Saved ", error);
    resp.status(400).json("Not saved");
  }
};

exports.getService = async function (req, resp) {
  try {
    console.log(req.query);
    let queryObj = { ...req.query };

    const excludedWords = ["currentPage", "recordsPerPage", "sortBy"];
    excludedWords.forEach((el) => {
      delete queryObj[el];
    });

    console.log("Query object ", queryObj);
    let query = ServiceModel.find(queryObj);
    let totalRecords = await ServiceModel.countDocuments(queryObj);
    //Pagination (always Implement)
    let recordsPerPage = 0;
    if (req.query.recordsPerPage === "all") {
      recordsPerPage = await ServiceModel.countDocuments();
    } else {
      recordsPerPage = req.query.recordsPerPage * 1;
    }
    let currentPage = req.query.currentPage * 1;
    let skip = (currentPage - 1) * recordsPerPage;
    query = query.skip(skip).limit(recordsPerPage);

    //Sorting
    if (req.query.sortBy) {
      console.log(`sort ker na ${req.query.sortBy}`);
      query = query.sort(`${req.query.sortBy}`);
    }
    query = query.populate({ path: "vendor", select: "brandName" });
    //Execute Query
    const data = await query;

    resp.status(200).json({
      totalRecords: totalRecords,
      data: data,
    });
  } catch (err) {
    console.log("Fetching Error Services not Fetched");
  }
};

exports.getSingleService = async function (req, resp) {
  try {
    const param = req.params.id;
    let data = await ServiceModel.findOne({ slug: param })
      .populate({
        path: "reviews",
        populate: {
          path: "user",
          select: "name photo",
          model: "User",
        },
      })
      .populate("vendor");
    console.log("🎉🎉", data);
    resp.status(200).json(data);
  } catch (err) {
    console.log(err);
    resp.status(400).json("Data not extracted");
  }
};

exports.getServiceStats = async function (req, resp) {
  try {
    const data = await ServiceModel.aggregate([
      {
        $group: {
          _id: null,
          minPrice: {
            $min: "$price",
          },
          maxPrice: {
            $max: "$price",
          },
          avgPrice: {
            $avg: "$price",
          },
        },
      },
      {
        $project: {
          _id: 0,
        },
      },
    ]);
    resp.status(200).json(data[0]);
  } catch (err) {
    resp.status(400).json({
      status: "failed",
      message: "Aggregation not Performed",
    });
  }
};
