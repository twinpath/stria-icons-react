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
var Joint_exports = {};
__export(Joint_exports, {
  default: () => Joint_default
});
module.exports = __toCommonJS(Joint_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const JointRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M471.458 177.941C496.796 193.129 512 220.292 512 249.75V264C512 277.2 522.8 288 536 288H536C549.2 288 560 277.2 560 264V249.75C560 206.5 539 166.25 503.625 141.625C479.875 125 464 99.375 464 70.25V24C464 10.8 453.2 0 440 0H440C426.8 0 416 10.8 416 24L416 73.79C416 115.573 435.62 156.458 471.458 177.941ZM553.25 87.125C547.625 83.25 544 77.125 544 70.25V24C544 10.8 533.2 0 520 0H520C506.8 0 496 10.8 496 24L496 71.967C496 94.464 508.117 114.632 526.791 127.178C567.614 154.606 592 200.367 592 249.75V264C592 277.2 602.8 288 616 288H616C629.2 288 640 277.2 640 264V249.75C640 184.25 607.625 123.5 553.25 87.125ZM616 352H279C180.25 352 83.625 379.75 0 432C83.625 484.25 180.25 512 279 512H616C629.25 512 640 501.25 640 488V376C640 362.75 629.25 352 616 352ZM279 464C219.75 464 161.5 453.125 106.875 432C156.125 413 208.5 402.75 261.625 400.75L315.75 464H279ZM379 464L324.125 400H421L475.875 464H379ZM592 464H539L484.125 400H592V464Z" })
  }
));
JointRegular.displayName = "JointRegular";
var Joint_default = JointRegular;
