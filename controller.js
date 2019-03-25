import Model from './model.js';
import friendsPage from './pages/friends.js';
import friendPage from './pages/friend.js';

export default {
  async friendsRoute(params) {
    if (params.id) {
      const [friend] = await Model.getUser({ user_ids: params.id, fields: 'photo_100,city,country,bdate' });

      friendPage.setData(friend);
      friendPage.render();
    } else {
      const friends = await Model.getFriends({ count: 5, fields: 'photo_100,bdate' });

      friendsPage.setData(friends.items);
      friendsPage.render();
    }
  }
}