import moment from "moment";

export const handler = async (event: any, context: any, callback: Function) => {
  try {
    console.log(moment("2020-07-19T15:00:00.000Z").format("YYYYMMDD"));
    return callback(null, "Success!");
  } catch (error) {
    return callback(error);
  }
};
