import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { addItemToCurrentOrder } from "../actions";
import { AppState } from "../reducers/rootReducer";
import { Order } from "../reducers/order";
import { OrderHistory } from "../reducers/history";
import { TimsRegister } from "../components/TimsRegister";

const mapStateToProps = (state: AppState) => ({
  order: state.order,
  history: state.history
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItemToCurrentOrder: bindActionCreators(addItemToCurrentOrder, dispatch)
});

export interface TimsRegisterContainerProps {
  order: Order;
  history: OrderHistory;
  addItemToCurrentOrder: typeof addItemToCurrentOrder;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimsRegister);
