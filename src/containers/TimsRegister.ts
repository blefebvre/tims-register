import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import {
  addItemToCurrentOrder,
  voidLastItem,
  processPayment,
  completeOrder,
} from "../actions";
import { AppState } from "../reducers/rootReducer";
import { TimsRegister } from "../components/TimsRegister";

const mapStateToProps = (state: AppState) => ({
  order: state.order,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addItemToCurrentOrder,
      voidLastItem,
      processPayment,
      completeOrder,
    },
    dispatch
  );

export type TimsRegisterContainerProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimsRegister);
