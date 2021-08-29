// src/data/initialDetails.js
import Melons from './melons'
import Seeds from './seeds'
import Chemistry from './chemistry'
import Lychees from './lychees'
import Mangos from './mangos'

const initialDetails = Melons.concat(Seeds).concat(Chemistry).concat(Lychees).concat(Mangos);

export default initialDetails;