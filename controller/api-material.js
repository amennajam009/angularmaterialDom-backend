const apiCrudMaterial = require('../modal/api-material')


const apiCrudOfMaterial = async (req, res) => {
    try {
      const { first_name, last_name, status_id } = req.body;
  
      if (status_id !== 1) {
        return res.status(400).json({
          message: "Status is required",
          data: null,
          result: false,
        });
      }
  
      const mappingData = new apiCrudMaterial({
        first_name,
        last_name,
        status: [
          {
            id: status_id,
            status_name: 'ACTIVE',
            status_color: `#4CBB17`,
          },
        ],
      });
  
      const dataToSave = await mappingData.save();
  
      res.json({
        message: 'User Created Successfully!!!',
        data: dataToSave,
        result: true,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        data: null,
        result: false,
      });
    }
  };


module.exports = {
    apiCrudOfMaterial
}
