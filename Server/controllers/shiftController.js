const shiftController = (Shift) => {
    const getShift = async(req, res) => {
        const { query } = req;
        const response = await Shift.find( query );

        res.json(response);
    }

    const postShift = async(req, res) => {
        const { body } = req;

        const shift = new Shift(body);
        await shift.save();

        res.json(shift)
    }


    return { getShift, postShift }; 
}

module.exports = shiftController;