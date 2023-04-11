const checkNotifyTypeHelper = (fetchingSuccess: boolean): "info" | "error" =>
  fetchingSuccess ? "info" : "error";

export default checkNotifyTypeHelper;
