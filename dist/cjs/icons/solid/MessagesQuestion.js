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
var MessagesQuestion_exports = {};
__export(MessagesQuestion_exports, {
  default: () => MessagesQuestion_default
});
module.exports = __toCommonJS(MessagesQuestion_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessagesQuestionSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 128H448V256C448 308.871 404.875 351.992 352 351.992H256V383.969C256 419.215 284.75 447.963 320 447.963H445.75L528.5 510.082C534.875 514.832 544 510.207 544 502.209V447.963H576C611.25 447.963 640 419.215 640 383.969V191.994C640 156.748 611.25 128 576 128ZM416 256.004V63.994C416 28.748 387.25 0 352 0H64C28.75 0 0 28.748 0 63.994V256.004C0 291.25 28.75 320 64 320L96 320.018V374.264C96 382.262 105.125 386.887 111.5 382.139L194.25 320.018L352 319.875C387.25 320 416 291.25 416 256.004ZM208.471 268.471C194.707 268.471 184 257.764 184 244C184 230.234 194.707 219.529 208.471 219.529C222.236 219.529 232.941 230.234 232.941 244C232.941 257.764 222.236 268.471 208.471 268.471ZM261.999 158.941L226.824 180.352V181.881C226.824 191.822 218.412 200.234 208.471 200.234S190.119 191.822 190.119 181.881V169.646C190.119 163.529 193.178 157.412 199.295 153.588L242.883 127.588C248.236 124.529 251.295 119.176 251.295 113.059C251.295 103.881 243.646 96.234 234.471 96.234H194.707C185.529 96.234 177.883 103.881 177.883 113.059C177.883 123 169.471 131.412 159.531 131.412C149.59 131.412 141.178 123 141.178 113.059C141.178 83.234 164.883 59.529 194.707 59.529H234.471C264.295 59.529 288 83.234 288 113.059C288 131.412 278.059 149 261.999 158.941Z" })
  }
));
MessagesQuestionSolid.displayName = "MessagesQuestionSolid";
var MessagesQuestion_default = MessagesQuestionSolid;
