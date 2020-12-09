import { 
  addNewPlayer, 
  getAllPlayers, 
  getPlayer,
  updatePlayer,
  deletePlayer
} from '../controllers/playerControllers';

const routes = (app) => {
  app.route('/players')
    // get all players
    .get(getAllPlayers) 
    // create a new player
    .post(addNewPlayer); 

  app.route('/player/:playerId')
    // get a specific player
    .get(getPlayer)
    // update a specific player
    .put(updatePlayer)
    .delete(deletePlayer);
}

export default routes;