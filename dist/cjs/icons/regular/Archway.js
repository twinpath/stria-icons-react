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
var Archway_exports = {};
__export(Archway_exports, {
  default: () => Archway_default
});
module.exports = __toCommonJS(Archway_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArchwayRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M552 48C565.255 48 576 37.255 576 24V24C576 10.745 565.255 0 552 0H24C10.745 0 0 10.745 0 24V24C0 37.255 10.745 48 24 48H32V464H24C10.745 464 0 474.745 0 488V488C0 501.255 10.745 512 24 512H176C184.837 512 192 504.837 192 496L192 323.225C192 274.414 227.069 230.917 275.494 224.793C334.066 217.385 384 262.886 384 320V496C384 504.837 391.163 512 400 512H552C565.255 512 576 501.255 576 488V488C576 474.745 565.255 464 552 464H544V48H552ZM496 48V88H80V48H496ZM432 464V320C432 240.625 367.375 176 288 176S144 240.625 144 320V464H80V136H496V464H432Z" })
  }
));
ArchwayRegular.displayName = "ArchwayRegular";
var Archway_default = ArchwayRegular;
