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
var MessageQuestion_exports = {};
__export(MessageQuestion_exports, {
  default: () => MessageQuestion_default
});
module.exports = __toCommonJS(MessageQuestion_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageQuestionSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.625 0 0 28.623 0 63.998V351.99C0 387.363 28.625 415.988 64 415.988H160V499.986C160 509.859 171.25 515.484 179.125 509.609L304 415.988H448C483.375 415.988 512 387.363 512 351.99V63.998C512 28.623 483.375 0 448 0ZM249.999 320C235.375 320 224 308.625 224 294S235.375 268 249.999 268C264.625 268 276 279.375 276 294S264.625 320 249.999 320ZM307.666 203.391L269.334 226.521V228.174C269.334 238.912 260.166 248 249.334 248C238.5 248 229.334 238.912 229.334 228.174V214.957C229.334 208.348 232.666 201.738 239.334 197.607L286.834 169.521C292.666 166.217 296 160.434 296 153.826C296 143.912 287.666 135.652 277.666 135.652H234.334C224.334 135.652 216 143.912 216 153.826C216 164.564 206.834 173.652 196 173.652S176 164.564 176 153.826C176 121.607 201.834 96 234.334 96H277.666C310.166 96 336 121.607 336 153.826C336 173.652 325.166 192.652 307.666 203.391Z" })
  }
));
MessageQuestionSolid.displayName = "MessageQuestionSolid";
var MessageQuestion_default = MessageQuestionSolid;
