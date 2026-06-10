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
var Backward_exports = {};
__export(Backward_exports, {
  default: () => Backward_default
});
module.exports = __toCommonJS(Backward_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BackwardRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.751 64C216.75 64 209.607 66.305 203.462 71.406L11.439 231.379C-3.813 244.252 -3.813 267.748 11.439 280.621L203.462 440.594C209.607 445.693 216.751 448 223.751 448C240.255 448 255.968 435.191 255.968 415.973V96.027C255.968 76.811 240.253 64 223.751 64ZM207.968 381.873L56.875 256L207.968 130.125V381.873ZM495.375 67.953C485.125 62.328 472.687 62.781 462.843 69.016L299.125 173.188C287.937 180.297 284.625 195.141 291.75 206.328C298.843 217.516 313.687 220.812 324.875 213.688L464 125.172V386.828L324.875 298.312C313.687 291.188 298.843 294.484 291.75 305.672C284.625 316.859 287.937 331.703 299.125 338.812L462.812 442.969C468.031 446.312 474.031 447.984 480 447.984C485.281 447.984 490.593 446.672 495.375 444.047C505.625 438.422 512 427.672 512 415.984V96.016C512 84.328 505.625 73.578 495.375 67.953Z" })
  }
));
BackwardRegular.displayName = "BackwardRegular";
var Backward_default = BackwardRegular;
