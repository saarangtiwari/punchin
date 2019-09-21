const PunchIn = require('../models/punchin');
const user = require('../models/user');


module.exports.GET_PUNCH_IN_FOR_USER = (req, res, next) => {
  const punchInBy = req.body.punchInBy;
  PunchIn.find({ punchInBy }).select("punchInBy punchInTime punchInDate").then(punchIns => {
    if (!punchIns) {
      return res.status(404).json({ message: `No Punch In Record found for ${punchInBy} for data ${punchInDate}` });
    } else {
      return res.status(200).json({ punchIns });
    }
  });
};

module.exports.MARK_PUNCH_IN = (req, res, next) => {


  const punchInDate = req.body.punchInDate;
  const punchInTime = req.body.punchInTime;
  const punchInBy = req.body.punchInBy;

  user.find({ userName: punchInBy }).then(user => {
    if (!user) return res.status(404).json({ message: `This user doesn't exists !` });
    else {

      PunchIn.find({ punchInBy, punchInDate }).select("punchInBy punchInTime punchInDate").then(punchIns => {
        if (!punchIns.length) {
          const punchIn = new PunchIn({
            punchInTime,
            punchInBy,
            punchInDate
          });
          punchIn
            .save()
            .then(punchIn => {
              res.json(punchIn)
            })
            .catch(err => next(err));
          return res.status(200).json({ punchIns });
        } else {
          PunchIn.findOneAndUpdate({ punchInBy, punchInDate }, { $push: { punchInTime: punchInTime } }, (err, model) => {
            console.log(model);
            return res.status(200).json({ model });
          });
          
        }

      });

    }
  })

};



module.exports.GET_PUNCH_IN_BY_USER_AND_DATE = (req, res, next) => {

  const punchInDate = req.body.punchInDate;
  const punchInBy = req.body.punchInBy;

  PunchIn.find({ punchInBy, punchInDate }).select("punchInBy punchInTime punchInDate").then(punchIns => {
    if (!punchIns) {
      return res.status(404).json({ message: `No Punch In Record found for ${punchInBy} for data ${punchInDate}` });
    } else {
      return res.status(200).json({ punchIns });
    }
  });
};
