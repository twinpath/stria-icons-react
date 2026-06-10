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
var H4_exports = {};
__export(H4_exports, {
  default: () => H4_default
});
module.exports = __toCommonJS(H4_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const H4Thin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M311.794 64C307.376 64 303.8 67.594 303.8 72V240H15.989V72C15.989 67.594 12.414 64 7.995 64S0 67.594 0 72V440C0 444.406 3.576 448 7.995 448S15.989 444.406 15.989 440V256H303.8V440C303.8 444.406 307.376 448 311.794 448C316.213 448 319.789 444.406 319.789 440V72C319.789 67.594 316.213 64 311.794 64ZM632.005 64C627.586 64 624.011 67.594 624.011 72V272H401.485L440.959 73.562C441.818 69.219 439.007 65.031 434.682 64.156C430.435 63.438 426.141 66.094 425.282 70.438L383.903 278.438C383.435 280.781 384.044 283.219 385.558 285.062C387.073 286.938 389.353 288 391.742 288H624.011V440C624.011 444.406 627.586 448 632.005 448C636.424 448 640 444.406 640 440V72C640 67.594 636.424 64 632.005 64Z" })
  }
));
H4Thin.displayName = "H4Thin";
var H4_default = H4Thin;
