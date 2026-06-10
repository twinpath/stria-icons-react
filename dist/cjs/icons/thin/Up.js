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
var Up_exports = {};
__export(Up_exports, {
  default: () => Up_default
});
module.exports = __toCommonJS(Up_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 448V256H352C364.938 256 376.609 248.203 381.562 236.25C383.203 232.287 384 228.127 384 224.004C384 215.678 380.75 207.498 374.625 201.375L214.625 41.375C208.375 35.125 200.188 32 192 32S175.625 35.125 169.375 41.375L9.375 201.375C3.252 207.498 0 215.678 0 224.004C0 228.127 0.797 232.285 2.438 236.25C7.391 248.203 19.062 256 32 256H128V448C128 465.674 142.326 480 160 480H224C241.672 480 256 465.674 256 448ZM160 464C151.178 464 144 456.822 144 448V240H32C25.508 240 19.705 236.123 17.223 230.133C16.412 228.174 16 226.111 16 224.004C16 219.73 17.666 215.713 20.689 212.689L180.689 52.689C183.713 49.666 187.73 48 192 48C196.271 48 200.289 49.666 203.312 52.689L363.312 212.689C366.336 215.713 368 219.73 368 224.004C368 226.111 367.59 228.174 366.781 230.125C364.295 236.123 358.494 240 352 240H240V448C240 456.822 232.822 464 224 464H160Z" })
  }
));
UpThin.displayName = "UpThin";
var Up_default = UpThin;
