import Controller from '../../../core/controllers/controller'
import { sendCreateResponse, sendOKResponse } from '../../../core/helpers/response'

class PagesController extends Controller {
    static index(req, res) {
        try {
            // PagesService.index(req, res);
            sendOKResponse(res); 
        } catch(e) {
            
        }
    }

    static create(req, res) {
        try {
            sendCreateResponse(res);
        } catch(e) {

        }
    }
}

export default PagesController