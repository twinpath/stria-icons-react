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
var FaceFrown_exports = {};
__export(FaceFrown_exports, {
  default: () => FaceFrown_default
});
module.exports = __toCommonJS(FaceFrown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceFrownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.42 16 16 123.418 16 256C16 388.578 123.42 496 256 496S496 388.578 496 256C496 123.418 388.58 16 256 16ZM336 176C353.688 176 368 190.297 368 208S353.688 240 336 240S304 225.703 304 208S318.313 176 336 176ZM176 176C193.688 176 208 190.297 208 208S193.688 240 176 240S144 225.703 144 208S158.312 176 176 176ZM346.188 394.203C323.813 367.406 290.906 352 256 352S188.188 367.406 165.812 394.203C152.312 410.5 127.688 390.001 141.188 373.703C169.688 339.594 211.594 320 256 320S342.313 339.594 370.688 373.797C384.313 390.001 359.688 410.5 346.188 394.203Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 176C158.312 176 144 190.297 144 208S158.312 240 176 240S208 225.703 208 208S193.688 176 176 176ZM336 176C318.313 176 304 190.297 304 208S318.313 240 336 240S368 225.703 368 208S353.688 176 336 176Z" })
    ]
  }
));
FaceFrownDuotone.displayName = "FaceFrownDuotone";
var FaceFrown_default = FaceFrownDuotone;
