import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { OrderDetails }  from "../components/OrderDetails";
import * as RegisterActions from "../actions";
import { AppState } from "../reducers/rootReducer";
import { Order } from "../reducers/order";
import { OrderHistory } from "../reducers/history";

const mapStateToProps = (state: AppState) => ({
  order: state.order,
  history: state.history
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(RegisterActions, dispatch)
});

export interface OrderDetailsContainerProps {
  order: Order,
  history: OrderHistory,
  actions: typeof RegisterActions
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetails);