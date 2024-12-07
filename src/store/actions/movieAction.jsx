import axios from '../../utils/axios'
import { loadmovie } from '../reducers/movieSlice'
export {removemovie} from '../reducers/movieSlice'

export const asyncloadMovie=(id)=>async(dispatch, getState)=>{
    
    try{
        const detail = await axios.get(`/movie/${id}`);
        const externalId = await axios.get(`/movie/${id}/external_ids`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const video = await axios.get(`/movie/${id}/videos`);
        const recommendation = await axios.get(`/movie/${id}/recommendations`);
        const watchProvider = await axios.get(`/movie/${id}/watch/providers`);

        const detailFinal = {
            detail: detail.data,
            externalId: externalId.data,
            similar: similar.data.results,
            video: video.data.results.find(m => m.type==='Trailer'),
            recommendation: recommendation.data.results,
            watchProvider: watchProvider.data.results.IN,
        };
        dispatch(loadmovie(detailFinal))
    }catch(error){
        console.error(error)
    }
}   