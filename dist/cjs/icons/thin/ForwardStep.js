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
var ForwardStep_exports = {};
__export(ForwardStep_exports, {
  default: () => ForwardStep_default
});
module.exports = __toCommonJS(ForwardStep_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ForwardStepThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M52.51 71.406C46.365 66.307 39.219 64 32.219 64C15.715 64 0 76.809 0 96.027V415.973C0 435.189 15.717 448 32.219 448C39.221 448 46.365 445.695 52.51 440.594L244.545 280.621C259.797 267.748 259.797 244.252 244.545 231.379L52.51 71.406ZM234.303 268.328L42.289 428.283C39.316 430.75 35.928 432 32.219 432C24.246 432 16.002 426.006 16.002 415.973V96.027C16.002 85.996 24.246 80 32.219 80C35.928 80 39.316 81.25 42.268 83.699L234.225 243.605C237.938 246.74 239.982 251.143 239.982 256C239.982 260.859 237.938 265.26 234.303 268.328ZM312 64C307.594 64 304 67.594 304 72V440C304 444.406 307.594 448 312 448S320 444.406 320 440V72C320 67.594 316.406 64 312 64Z" })
  }
));
ForwardStepThin.displayName = "ForwardStepThin";
var ForwardStep_default = ForwardStepThin;
