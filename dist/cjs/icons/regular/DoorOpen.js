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
var DoorOpen_exports = {};
__export(DoorOpen_exports, {
  default: () => DoorOpen_default
});
module.exports = __toCommonJS(DoorOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DoorOpenRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 288C237.25 288 248 273.625 248 256S237.25 224 224 224S200 238.375 200 256S210.75 288 224 288ZM288 0C285.5 0 282.875 0.375 280.25 1L88.25 50.75C74 54.5 64 67.75 64 82.875V464H24C10.746 464 0 474.744 0 488C0 501.254 10.746 512 24 512H288C305.674 512 320 497.672 320 480V33.125C320 14.375 305.25 0 288 0ZM272 464H112V94.125L272 52.75V464ZM552 464H512V128C512 92.652 483.346 64 448 64H352V112H448C456.836 112 464 119.162 464 128V480C464 497.672 478.326 512 496 512H552C565.254 512 576 501.254 576 488C576 474.744 565.254 464 552 464Z" })
  }
));
DoorOpenRegular.displayName = "DoorOpenRegular";
var DoorOpen_default = DoorOpenRegular;
