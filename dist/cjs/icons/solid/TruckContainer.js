var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var TruckContainer_exports = {};
__export(TruckContainer_exports, {
  default: () => TruckContainer_default
});
module.exports = __toCommonJS(TruckContainer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckContainerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 287.896H352C378.51 287.896 400 266.414 400 239.912V79.982C400 53.482 378.51 32 352 32H48C21.49 32 0 53.482 0 79.982V239.912C0 266.414 21.49 287.896 48 287.896ZM304 79.982H336V239.912H304V79.982ZM224 79.982H256V239.912H224V79.982ZM144 79.982H176V239.912H144V79.982ZM64 79.982H96V239.912H64V79.982ZM621.25 237.18L562.75 178.699C550.75 166.703 534.5 160.08 517.5 160.08H464C446.25 160.08 432 174.326 432 192.07V320.01H32C14.25 320.01 0 334.256 0 352V395.75C0 436.611 28.75 473.85 69.125 479.223C99.75 483.346 127.375 469.725 144 447.607C162.375 472.225 194.375 486.219 229.25 477.223C254.5 470.725 275.375 451.107 283.75 426.49C288.625 411.619 289.125 397.25 286.5 384.129H449.75C447 397.25 447.5 411.619 452.5 426.49C460.875 451.605 482.375 471.35 508.125 477.598C560.875 490.344 608.125 450.607 608.125 399.998C608.125 394.5 607.5 389.127 606.5 384.004H624C632.75 384.004 640 376.758 640 368.01V282.539C640 265.42 633.25 249.176 621.25 237.18ZM80 431.863C62.375 431.863 48 417.492 48 399.875C48 382.256 62.375 367.885 80 367.885S112 382.256 112 399.875C112 417.492 97.625 431.863 80 431.863ZM208 431.863C190.375 431.863 176 417.492 176 399.875C176 382.256 190.375 367.885 208 367.885S240 382.256 240 399.875C240 417.492 225.625 431.863 208 431.863ZM528 431.863C510.375 431.863 496 417.492 496 399.875C496 382.256 510.375 367.885 528 367.885S560 382.256 560 399.875C560 417.492 545.625 431.863 528 431.863ZM480 255.924V207.939H517.5C521.75 207.939 525.75 209.689 528.75 212.688L572.125 255.924H480Z" })
  }
));
TruckContainerSolid.displayName = "TruckContainerSolid";
var TruckContainer_default = TruckContainerSolid;
