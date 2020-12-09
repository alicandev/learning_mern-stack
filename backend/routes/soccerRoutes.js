import { addNewPlayer } from '../controllers/playerControllers';

const routes = (app) => {
  app.route('/players')
    .post(addNewPlayer); // POST endpoint
}

export default routes;