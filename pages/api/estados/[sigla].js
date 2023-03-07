import dataES from "../../../estados/sudeste/es/data"
import dataMG from "../../../estados/sudeste/mg/data"
import dataRJ from "../../../estados/sudeste/rj/data"
import dataSP from "../../../estados/sudeste/sp/data"

export default function handler(req, res) {
    const {sigla} = req.query
    switch (sigla){
        case 'es':
            res.status(200).json({name: dataES})
            break;
        case 'rj' || 'RJ':
            res.status(200).json({name: dataRJ})
            break;
        case 'mg' || 'MG':
            res.status(200).json({name: dataMG})
            break;
        case 'sp' || 'SP':
            res.status(200).json({name: dataSP})
    }
}