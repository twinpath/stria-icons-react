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
var LockKeyhole_exports = {};
__export(LockKeyhole_exports, {
  default: () => LockKeyhole_default
});
module.exports = __toCommonJS(LockKeyhole_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LockKeyholeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 192H384V128C384 57.422 326.578 0 256 0S128 57.422 128 128V192H96C60.654 192 32 220.654 32 256V448C32 483.346 60.654 512 96 512H416C451.346 512 480 483.346 480 448V256C480 220.654 451.346 192 416 192ZM176 128C176 83.891 211.891 48 256 48S336 83.891 336 128V192H176V128ZM432 448C432 456.822 424.822 464 416 464H96C87.178 464 80 456.822 80 448V256C80 247.178 87.178 240 96 240H416C424.822 240 432 247.178 432 256V448ZM256 304C242.75 304 232 314.75 232 328V376C232 389.25 242.75 400 256 400S280 389.25 280 376V328C280 314.75 269.25 304 256 304Z" })
  }
));
LockKeyholeRegular.displayName = "LockKeyholeRegular";
var LockKeyhole_default = LockKeyholeRegular;
