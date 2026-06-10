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
const JointThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 352H263.364C173.805 352 85.995 374.824 8.043 418.051C-2.681 423.996 -2.681 440.004 8.043 445.949C85.995 489.176 173.805 512 263.364 512H616C629.254 512 640 501.254 640 488V376C640 362.746 629.254 352 616 352ZM263.364 496C176.963 496 91.358 473.855 15.803 432.043C89.987 390.906 173.868 368.938 258.67 368.148L360.95 496H263.364ZM381.45 496L279.051 368H418.551L520.95 496H381.45ZM624 488C624 492.41 620.413 496 616 496H541.45L439.051 368H616C620.413 368 624 371.59 624 376V488ZM459.594 150.703C502.438 179.297 528 227.281 528 280.922C528 285.359 531.594 288 536 288S544 283.438 544 279C544 221.867 515.75 168.883 468.407 137.297C425.563 108.699 400 60.719 400 9V7.078C400 2.641 396.407 0 392 0S384 4.562 384 9C384 66.133 412.25 119.113 459.594 150.703ZM555.594 150.703C598.438 179.297 624 227.281 624 280.922C624 285.359 627.594 288 632 288S640 283.438 640 279C640 221.867 611.75 168.883 564.407 137.297C521.563 108.699 496 60.719 496 9V7.078C496 2.641 492.407 0 488 0S480 4.562 480 9C480 66.133 508.25 119.113 555.594 150.703Z" })
  }
));
JointThin.displayName = "JointThin";
var Joint_default = JointThin;
