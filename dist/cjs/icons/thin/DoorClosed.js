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
var DoorClosed_exports = {};
__export(DoorClosed_exports, {
  default: () => DoorClosed_default
});
module.exports = __toCommonJS(DoorClosed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DoorClosedThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568 496H480V56C480 25.125 454.875 0 424 0H152C121.125 0 96 25.125 96 56V496H8C3.594 496 0 499.594 0 504S3.594 512 8 512H568C572.406 512 576 508.406 576 504S572.406 496 568 496ZM464 496H112V56C112 33.938 129.938 16 152 16H424C446.062 16 464 33.938 464 56V496ZM384 216C361.938 216 344 233.938 344 256S361.938 296 384 296S424 278.062 424 256S406.062 216 384 216ZM384 280C370.781 280 360 269.219 360 256S370.781 232 384 232S408 242.781 408 256S397.219 280 384 280Z" })
  }
));
DoorClosedThin.displayName = "DoorClosedThin";
var DoorClosed_default = DoorClosedThin;
