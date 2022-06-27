import slidersActions from "./slidersActions";
import kelasActions from "./kelasActions";
import artikelActions from "./artikelActions";
import authActions from "./authActions";
//exporting all action
export default {
  ...slidersActions,
  ...kelasActions,
  ...artikelActions,
  ...authActions,
};
