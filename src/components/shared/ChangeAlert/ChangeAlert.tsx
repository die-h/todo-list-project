import React from "react";
import { withStorageListener } from "../withStorageListener/withStorageListener";
// import { withStorageListener } from "components/shared";

const ChangeAlert = () => {
return <></>
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
