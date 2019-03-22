import Model from './model.js';

export default {
  async friendsRoute() {
    const friends = await Model.getFriends({ fields: 'photo_100, bdate', count: 5 });
    console.log(friends);
  }
}