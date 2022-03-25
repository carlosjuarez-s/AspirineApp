const shiftController = (Shift) => {
    const getShift = async(req, res) => {
        const { query } = req;
        const response = await Shift.find();

        res.json(response);
    }

    const postShift = async(req, res) => {
        const { body } = req;
        const shift = new Shift(req.body);

        await shift.save();
        res.json(shift);
    }


    return { getShift, postShift }; 
}

module.exports = shiftController;