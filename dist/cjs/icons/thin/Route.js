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
var Route_exports = {};
__export(Route_exports, {
  default: () => Route_default
});
module.exports = __toCommonJS(Route_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RouteThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 256C43 256 0 299 0 352S96 512 96 512S192 405 192 352S149 256 96 256ZM16 352C16 307.889 51.889 272 96 272S176 307.889 176 352C176 382.49 130.943 446.131 96 487.596C61.059 446.131 16 382.49 16 352ZM96 320C78.25 320 64 334.25 64 352S78.25 384 96 384S128 369.75 128 352S113.75 320 96 320ZM96 368C87.029 368 80 360.973 80 352S87.029 336 96 336C104.973 336 112 343.027 112 352S104.973 368 96 368ZM512 96C512 43 469 0 416 0S320 43 320 96S416 256 416 256S512 149 512 96ZM416 16C460.111 16 496 51.889 496 96C496 126.49 450.943 190.131 416 231.596C381.059 190.131 336 126.49 336 96C336 51.889 371.889 16 416 16ZM448 96C448 78.25 433.75 64 416 64S384 78.25 384 96S398.25 128 416 128S448 113.75 448 96ZM400 96C400 87.027 407.029 80 416 80C424.973 80 432 87.027 432 96S424.973 112 416 112C407.029 112 400 104.973 400 96ZM440 368H312C281.125 368 256 342.875 256 312S281.125 256 312 256H352C356.406 256 360 252.406 360 248S356.406 240 352 240H312C272.312 240 240 272.312 240 312S272.312 384 312 384H440C470.875 384 496 409.125 496 440S470.875 496 440 496H160C155.594 496 152 499.594 152 504S155.594 512 160 512H440C479.688 512 512 479.688 512 440S479.688 368 440 368Z" })
  }
));
RouteThin.displayName = "RouteThin";
var Route_default = RouteThin;
