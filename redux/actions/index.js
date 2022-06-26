import slidersActions from "./slidersActions";
import kelasActions from "./kelasActions";
import artikelActions from "./artikelActions";
import signInActions from "./signInActions";
//exporting all action
export default {
  ...slidersActions,
  ...kelasActions,
  ...artikelActions,
  ...signInActions,
};
