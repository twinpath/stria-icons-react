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
var Train_exports = {};
__export(Train_exports, {
  default: () => Train_default
});
module.exports = __toCommonJS(Train_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrainThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 0H96C42.98 0 0 42.98 0 96V352C0 401.5 37.605 441.77 85.725 446.963L34.344 498.344C31.219 501.469 31.219 506.531 34.344 509.656C35.906 511.219 37.953 512 40 512S44.094 511.219 45.656 509.656L107.312 448H340.688L402.344 509.656C403.906 511.219 405.953 512 408 512S412.094 511.219 413.656 509.656C416.781 506.531 416.781 501.469 413.656 498.344L362.275 446.963C410.395 441.77 448 401.5 448 352V96C448 42.98 405.02 0 352 0ZM432 352C432 396.111 396.113 432 352 432H96C51.889 432 16 396.111 16 352V96C16 51.887 51.889 16 96 16H352C396.113 16 432 51.887 432 96V352ZM352 64H96C78.328 64 64 78.326 64 96V192C64 209.672 78.328 224 96 224H352C369.674 224 384 209.672 384 192V96C384 78.326 369.674 64 352 64ZM368 192C368 200.822 360.822 208 352 208H96C87.178 208 80 200.822 80 192V96C80 87.178 87.178 80 96 80H352C360.822 80 368 87.178 368 96V192ZM224 272C197.49 272 176 293.49 176 320S197.49 368 224 368S272 346.51 272 320S250.51 272 224 272ZM224 352C206.355 352 192 337.645 192 320S206.355 288 224 288S256 302.355 256 320S241.645 352 224 352Z" })
  }
));
TrainThin.displayName = "TrainThin";
var Train_default = TrainThin;
