import { 
  addNewPlayer, 
  getPlayers, 
  getPlayerById 
} from '../controllers/playerControllers';

const routes = (app) => {
  app.route('/players')
    .get(getPlayers) 
    .post(addNewPlayer); 
  app.route('/player/:playerId')
    .get(getPlayerById);
}

export default routes;