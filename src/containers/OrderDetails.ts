import { connect } from "react-redux";
import { OrderDetails } from "../components/OrderDetails";
import { AppState } from "../reducers/rootReducer";

const mapStateToProps = (state: AppState) => ({
  order: state.order,
  history: state.history
});

export type OrderDetailsContainerProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(OrderDetails);
