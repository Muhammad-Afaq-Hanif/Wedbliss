//Import
const mongoose = require("mongoose");
const multer = require("multer");
const MarriageHall = require(`./../../models/Services/marriageHallSchema`);
const fs = require("fs");

// marriagehalls-within/:distance/center/:latlng/unit/:unit
// marriagehalls-within/50/center/-50,55/unit/meter

exports.getMarriageHallsWithin = async function (req, resp) {
  try {
    const { distance, latlng, unit } = req.params;
    const [lat, lng] = latlng.split(",");
    const radius = unit === "mi" ? distance / 3963.2 : distance / 6378.1;
    if (!lat || !lng) {
      throw new Error(
        "Lattitude and longitude not defined Correctly format (Latitude and Longitude)"
      );
    }
    const marriageHalls = await MarriageHall.find({
      location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
    });
    console.log(distance, lat, lng, unit);
    resp.status(200).json({
      result: marriageHalls.length,
      status: "Success",
      marriageHalls,
    });
  } catch (err) {
    console.log(err);
    resp.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};

exports.createMarriageHall = async function (req, resp) {
  const { user } = req;
  const vendor = user.id;
  const {
    name,
    city,
    capacity,
    availability,
    price,
    description,
    coordinates,
    summary,
    type,
  } = req.body;

  console.log("Coordinates", typeof coordinates);

  let imageCover;
  if (req.file) {
    imageCover = req.file.filename;
  }

  try {
    const data = await MarriageHall.create({
      name,
      type,
      city,
      capacity,
      availability,
      price,
      description,
      imageCover,
      vendor,
      summary,
      location: {
        coordinates: JSON.parse(coordinates).map(Number).reverse(), //String a raha tha likn muje number chaiye
      },
    });

    console.log("Marriage Hall Saved Successfully");
    resp.status(200).json("Marriage Hall Saved Successfully");
  } catch (error) {
    console.log("Marriage Hall not Saved ", error);
    resp.status(400).json("Marriage Hall Not saved");
  }
};

exports.getSingleService = async function (req, resp) {
  try {
    const param = req.params.id;
    let data = await MarriageHall.findOne({ slug: param })
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
exports.getMarriageHall = async function (req, resp) {
  try {
    console.log(req.query);
    let queryObj = { ...req.query };
    const excludedWords = ["currentPage", "recordsPerPage", "sortBy"];
    excludedWords.forEach((el) => {
      delete queryObj[el];
    });

    // Handle search by name using $regex
    if (queryObj.name) {
      queryObj.name = { $regex: new RegExp(queryObj.name, "i") };
    }

    console.log("Query object ", queryObj);
    let query = MarriageHall.find(queryObj);
    let totalRecords = await MarriageHall.countDocuments(queryObj);
    //Pagination (always Implement)
    let recordsPerPage = 0;
    if (req.query.recordsPerPage === "all") {
      recordsPerPage = await MarriageHall.countDocuments();
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
    console.log("Fetching Error of Marriage Hall");
  }
};

exports.getMarriageHallStats = async function (req, resp) {
  try {
    const data = await MarriageHall.aggregate([
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
          minCapacity: {
            $min: "$capacity",
          },
          maxCapacity: {
            $max: "$capacity",
          },
          avgCapacity: {
            $avg: "$capacity",
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

exports.createAllMarriageHallsFromJson = async function (req, resp) {
  try {
    const data = JSON.parse(
      fs.readFileSync("./Data/weddingServices.json", {
        encoding: "utf-8",
      })
    );
    console.log(data);
    await MarriageHall.deleteMany();
    await MarriageHall.create(data);
    resp.status(201).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
    resp.status(400).json({
      status: "failed",
      err,
    });
  }
};
