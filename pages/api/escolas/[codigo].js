export default function handler(req, res) {
    const {codigo} = req.query
    res.status(200).json({name: codigo})
}