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
var Expand_exports = {};
__export(Expand_exports, {
  default: () => Expand_default
});
module.exports = __toCommonJS(Expand_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ExpandThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M152 32H8C3.594 32 0 35.594 0 40V184C0 188.406 3.594 192 8 192S16 188.406 16 184V48H152C156.406 48 160 44.406 160 40S156.406 32 152 32ZM440 32H296C291.594 32 288 35.594 288 40S291.594 48 296 48H432V184C432 188.406 435.594 192 440 192S448 188.406 448 184V40C448 35.594 444.406 32 440 32ZM440 320C435.594 320 432 323.594 432 328V464H296C291.594 464 288 467.594 288 472S291.594 480 296 480H440C444.406 480 448 476.406 448 472V328C448 323.594 444.406 320 440 320ZM152 464H16V328C16 323.594 12.406 320 8 320S0 323.594 0 328V472C0 476.406 3.594 480 8 480H152C156.406 480 160 476.406 160 472S156.406 464 152 464Z" })
  }
));
ExpandThin.displayName = "ExpandThin";
var Expand_default = ExpandThin;
