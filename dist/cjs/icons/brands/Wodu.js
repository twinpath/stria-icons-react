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
var Wodu_exports = {};
__export(Wodu_exports, {
  default: () => Wodu_default
});
module.exports = __toCommonJS(Wodu_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WoduBrands = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M178.414 339.706H141.1L112.166 223.475h-.478L83.228 339.706H45.2L0 168.946H37.548L64.574 285.177h.478L94.707 168.946h35.157l29.178 117.667h.479L187.5 168.946h36.831zM271.4 212.713c38.984 0 64.1 25.828 64.1 65.291 0 39.222-25.111 65.05-64.1 65.05-38.743 0-63.855-25.828-63.855-65.05C207.547 238.541 232.659 212.713 271.4 212.713zm0 104.753c23.2 0 30.133-19.852 30.133-39.462 0-19.852-6.934-39.7-30.133-39.7-27.7 0-29.894 19.85-29.894 39.7C241.508 297.614 248.443 317.466 271.4 317.466zM435.084 323.922h-.478c-7.893 13.392-21.765 19.132-37.548 19.132-37.31 0-55.485-32.045-55.485-66.246 0-33.243 18.415-64.095 54.767-64.095 14.589 0 28.938 6.218 36.831 18.416h.24V168.946h33.96v170.76H435.084zM405.428 238.3c-22.24 0-29.894 19.134-29.894 39.463 0 19.371 8.848 39.7 29.894 39.7 22.482 0 29.178-19.613 29.178-39.94C434.606 257.436 427.432 238.3 405.428 238.3zM592.96 339.706H560.673V322.487h-.718c-8.609 13.87-23.436 20.567-37.786 20.567-36.113 0-45.2-20.328-45.2-50.941V216.061h33.959V285.9c0 20.329 5.979 30.372 21.765 30.372 18.415 0 26.306-10.283 26.306-35.393V216.061H592.96zM602.453 302.876H640v36.83H602.453z" })
  }
));
WoduBrands.displayName = "WoduBrands";
var Wodu_default = WoduBrands;
