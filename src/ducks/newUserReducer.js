const newInfo = (req, res, next) => {
    const dbInstance = req.app.get('db');
    const {first_name, last_name, email} = req.body;
    const { authid } = req.params;

    dbInstance
    .newInfoByUserID([
        first_name,
        last_name,
        email
    ])
    .then(user => res.status(200).send(user))
    .catch(() => res.status(500).send());
};

module.exports = {
    newInfo
};