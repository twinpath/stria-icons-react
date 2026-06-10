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
var ContainerStorage_exports = {};
__export(ContainerStorage_exports, {
  default: () => ContainerStorage_default
});
module.exports = __toCommonJS(ContainerStorage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ContainerStorageRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 432H608V80H616C629.25 80 640 69.25 640 56S629.25 32 616 32H24C10.75 32 0 42.75 0 56S10.75 80 24 80H32V432H24C10.75 432 0 442.75 0 456S10.75 480 24 480H616C629.25 480 640 469.25 640 456S629.25 432 616 432ZM560 432H80V80H560V432ZM192 400C205.25 400 216 389.25 216 376V136C216 122.75 205.25 112 192 112S168 122.75 168 136V376C168 389.25 178.75 400 192 400ZM320 400C333.25 400 344 389.25 344 376V136C344 122.75 333.25 112 320 112S296 122.75 296 136V376C296 389.25 306.75 400 320 400ZM448 400C461.25 400 472 389.25 472 376V136C472 122.75 461.25 112 448 112S424 122.75 424 136V376C424 389.25 434.75 400 448 400Z" })
  }
));
ContainerStorageRegular.displayName = "ContainerStorageRegular";
var ContainerStorage_default = ContainerStorageRegular;
