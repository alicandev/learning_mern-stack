import { 
  addNewPlayer, 
  getPlayers, 
  getPlayerById,
  updatePlayer
} from '../controllers/playerControllers';

const routes = (app) => {
  app.route('/players')
    // get all players
    .get(getPlayers) 
    // create a new player
    .post(addNewPlayer); 

  app.route('/player/:playerId')
    // get a specific player
    .get(getPlayerById)
    // update a specific player
    .put(updatePlayer);
}

export default routes;