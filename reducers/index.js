import { combineReducers } from 'redux';
import Cards from './reducer_cards';
import ActiveCard from './reducer_active_card';
import ActiveCardType from './reducer_active_card_type';
import KeyTypes from './reducer_key_type';
import CertificateTypes from './reducer_certificate_type';
import GraphicTypes from './reducer_graphic_type';


const rootReducer = combineReducers({
  // state: (state = {}) => state
  cards: Cards,
  activeCard: ActiveCard,
  keyTypes: KeyTypes,
  certificateTypes: CertificateTypes,
  activeCardType: ActiveCardType,
  graphicTypes: GraphicTypes
});

export default rootReducer;