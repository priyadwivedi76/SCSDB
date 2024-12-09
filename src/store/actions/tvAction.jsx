import axios from '../../utils/axios'
import { loadTV } from '../reducers/tvSlice'
export {removeTV} from '../reducers/tvSlice'

export const asyncloadTv=(id)=>async(dispatch, getState)=>{
    
    try{
        const detail = await axios.get(`/tv/${id}`);
        const externalId = await axios.get(`/tv/${id}/external_ids`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const video = await axios.get(`/tv/${id}/videos`);
        const recommendation = await axios.get(`/tv/${id}/recommendations`);
        const translations = await axios.get(`/tv/${id}/translations`);
        const watchProvider = await axios.get(`/tv/${id}/watch/providers`);

        const detailFinal = {
            detail: detail.data,
            externalId: externalId.data,
            similar: similar.data.results,
            video: video.data.results.find(m => m.type==='Trailer'),
            recommendation: recommendation.data.results,
            translations: translations.data.translations.map((t)=>t.english_name),
            watchProvider: watchProvider.data.results.IN,
        };
        console.log(detailFinal)
        dispatch(loadTV(detailFinal))
    }catch(error){
        console.error(error)
    }
}  