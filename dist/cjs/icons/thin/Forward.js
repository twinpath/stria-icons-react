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
var Forward_exports = {};
__export(Forward_exports, {
  default: () => Forward_default
});
module.exports = __toCommonJS(Forward_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ForwardThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32.221 80C35.928 80 39.315 81.25 42.268 83.699L194.86 210.812C200.071 215.156 207.981 211.449 207.981 204.668C207.981 202.293 206.927 200.039 205.102 198.523L52.511 71.406C46.362 66.305 39.221 64 32.221 64C15.712 64 0 76.809 0 96.027V415.973C0 435.188 15.716 448 32.221 448C39.221 448 46.362 445.695 52.511 440.594L205.102 313.477C206.927 311.961 207.981 309.707 207.981 307.332V307.328C207.981 300.547 200.071 296.844 194.86 301.184L42.288 428.281C39.315 430.75 35.928 432 32.221 432C24.244 432 16.001 426.008 16.001 415.973V96.027C16.001 85.996 24.244 80 32.221 80ZM500.562 231.379L308.527 71.406C302.378 66.305 295.237 64 288.236 64C271.728 64 256.016 76.809 256.016 96.027V415.973C256.016 435.188 271.731 448 288.236 448C295.237 448 302.378 445.695 308.527 440.594L500.562 280.621C515.813 267.75 515.813 244.25 500.562 231.379ZM490.319 268.328L298.303 428.281C295.331 430.75 291.944 432 288.236 432C280.259 432 272.017 426.008 272.017 415.973V96.027C272.017 85.996 280.259 80 288.236 80C291.944 80 295.331 81.25 298.284 83.699L490.241 243.605C493.952 246.742 495.999 251.141 495.999 256S493.952 265.258 490.319 268.328Z" })
  }
));
ForwardThin.displayName = "ForwardThin";
var Forward_default = ForwardThin;
