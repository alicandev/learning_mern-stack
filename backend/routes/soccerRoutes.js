import { addNewPlayer, getPlayers } from '../controllers/playerControllers';

const routes = (app) => {
  app.route('/players')
    .get(getPlayers) // GET endpoint
    .post(addNewPlayer) // POST endpoint
}

export default routes;