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
var Prescription_exports = {};
__export(Prescription_exports, {
  default: () => Prescription_default
});
module.exports = __toCommonJS(Prescription_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PrescriptionRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M321.938 352L440.969 232.969C450.344 223.594 450.344 208.406 440.969 199.031S416.406 189.656 407.031 199.031L288 318.062L192.291 222.354C246.285 214.383 288 168.172 288 112C288 50.25 237.75 0 176 0H24C10.75 0 0 10.75 0 24V296C0 309.25 10.75 320 24 320S48 309.25 48 296V224H126.062L254.062 352L135.031 471.031C125.656 480.406 125.656 495.594 135.031 504.969C139.719 509.656 145.859 512 152 512S164.281 509.656 168.969 504.969L288 385.938L407.031 504.969C411.719 509.656 417.859 512 424 512S436.281 509.656 440.969 504.969C450.344 495.594 450.344 480.406 440.969 471.031L321.938 352ZM48 48H176C211.297 48 240 76.719 240 112S211.297 176 176 176H48V48Z" })
  }
));
PrescriptionRegular.displayName = "PrescriptionRegular";
var Prescription_default = PrescriptionRegular;
