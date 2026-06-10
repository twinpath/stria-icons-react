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
var Badge_exports = {};
__export(Badge_exports, {
  default: () => Badge_default
});
module.exports = __toCommonJS(Badge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BadgeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 512C220.5 512 187.875 492.625 170.5 462.375C138.375 471.125 101.5 463.5 75 437C49.875 411.875 40.5 375.125 49.625 341.5C19.375 324.25 0 291.5 0 256S19.375 187.75 49.625 170.5C40.5 136.875 49.875 100.125 75 75S136.875 40.5 170.5 49.625C187.75 19.375 220.5 0 256 0S324.25 19.375 341.5 49.625C375.125 40.5 411.875 49.875 437 75S471.5 136.875 462.375 170.5C492.625 187.75 512 220.5 512 256S492.625 324.25 462.375 341.5C471.5 375.125 462.125 411.875 437 437C410.875 463.125 374.25 471.25 341.5 462.375C324.125 492.625 291.5 512 256 512ZM187.75 420.875C191.25 430.5 203.875 480 256 480C307 480 319.75 433 324.25 420.875C356.875 435.75 385.5 443.25 414.375 414.375C450.375 378.375 426.25 336.125 420.875 324.25C430.5 320.75 480 308.125 480 256C480 205 433 192.25 420.875 187.75C425.25 178.125 451.25 134.25 414.375 97.625C378.375 61.625 336.125 85.75 324.25 91.125C320.75 81.5 308.125 32 256 32C205 32 192.25 79 187.75 91.125C178.375 86.875 134.375 60.75 97.625 97.625C61.625 133.625 85.75 175.875 91.125 187.75C81.5 191.25 32 203.875 32 256C32 307 79 319.75 91.125 324.25C86.75 333.875 60.75 377.75 97.625 414.375C126.375 443.125 155.125 435.75 187.75 420.875Z" })
  }
));
BadgeLight.displayName = "BadgeLight";
var Badge_default = BadgeLight;
