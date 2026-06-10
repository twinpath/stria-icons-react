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
var DownLeft_exports = {};
__export(DownLeft_exports, {
  default: () => DownLeft_default
});
module.exports = __toCommonJS(DownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M290.745 112H290.746L336 157.254L213.252 280.004L179.311 313.945L213.253 347.887L249.367 384H64V198.633L100.116 234.746L134.057 268.687L167.998 234.746L290.7 112.004C290.704 112 290.721 112 290.745 112M290.746 64C278.461 64 266.177 68.684 256.805 78.059L134.057 200.805L70.625 137.375C64.498 131.238 56.326 127.957 48.013 127.957C43.882 127.957 39.718 128.766 35.75 130.437C23.797 135.375 16 147.062 16 160V400C16 417.688 30.328 432 48 432H288C300.938 432 312.609 424.219 317.562 412.25S319.781 386.531 310.625 377.375L247.193 313.945L369.941 191.195C388.686 172.453 388.688 142.059 369.941 123.312L324.688 78.059C315.314 68.684 303.03 64 290.746 64L290.746 64Z" })
  }
));
DownLeftRegular.displayName = "DownLeftRegular";
var DownLeft_default = DownLeftRegular;
