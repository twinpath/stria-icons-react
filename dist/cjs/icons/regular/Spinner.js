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
var Spinner_exports = {};
__export(Spinner_exports, {
  default: () => Spinner_default
});
module.exports = __toCommonJS(Spinner_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpinnerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M108.873 76.873C91.273 76.873 76.873 91.273 76.873 108.873C76.873 126.572 91.273 140.873 108.873 140.873C126.574 140.873 140.873 126.572 140.873 108.873C140.873 91.273 126.574 76.873 108.873 76.873ZM108.873 371.125C91.273 371.125 76.873 385.426 76.873 403.125C76.873 420.727 91.273 435.125 108.873 435.125C126.574 435.125 140.873 420.727 140.873 403.125C140.873 385.426 126.574 371.125 108.873 371.125ZM256 432C238.301 432 224 446.299 224 464C224 481.699 238.301 496 256 496S288 481.699 288 464C288 446.299 273.699 432 256 432ZM48 224C30.301 224 16 238.299 16 256C16 273.699 30.301 288 48 288S80 273.699 80 256C80 238.299 65.699 224 48 224ZM256 16C238.301 16 224 30.299 224 48C224 65.699 238.301 80 256 80S288 65.699 288 48C288 30.299 273.699 16 256 16ZM464 224C446.301 224 432 238.299 432 256C432 273.699 446.301 288 464 288S496 273.699 496 256C496 238.299 481.699 224 464 224ZM403.127 371.125C385.426 371.125 371.127 385.426 371.127 403.125C371.127 420.727 385.426 435.125 403.127 435.125C420.727 435.125 435.127 420.727 435.127 403.125C435.127 385.426 420.727 371.125 403.127 371.125Z" })
  }
));
SpinnerRegular.displayName = "SpinnerRegular";
var Spinner_default = SpinnerRegular;
