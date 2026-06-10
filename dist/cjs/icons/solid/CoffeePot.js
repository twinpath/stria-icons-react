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
var CoffeePot_exports = {};
__export(CoffeePot_exports, {
  default: () => CoffeePot_default
});
module.exports = __toCommonJS(CoffeePot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CoffeePotSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M431.5 177.625L480 32H88C39.375 32 0 71.375 0 120V208C0 216.875 7.125 224 16 224H48C56.875 224 64 216.875 64 208V136C64 113.875 81.875 96 104 96H117.375L144.75 178.125C95.375 217.875 64 277.75 64 344.625C64 396.125 82.625 429.375 113.625 462.375C124.5 473.625 139.5 480 155.125 480H420.875C436.5 480 451.5 473.75 462.25 462.375C493.25 429.5 512 396.125 512 344.625C512 278.375 481.375 217.875 431.5 177.625ZM445.875 320H130.625C137.375 281 159.5 247.125 191.125 224H386.875C417.875 247.25 439.5 281.25 445.875 320Z" })
  }
));
CoffeePotSolid.displayName = "CoffeePotSolid";
var CoffeePot_default = CoffeePotSolid;
