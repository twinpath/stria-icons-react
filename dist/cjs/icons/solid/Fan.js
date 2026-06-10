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
var Fan_exports = {};
__export(Fan_exports, {
  default: () => Fan_default
});
module.exports = __toCommonJS(Fan_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FanSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.624 127.999C324.499 127.999 298.499 132.499 275.499 140.874L287.874 17.749C288.999 7.249 279.749 -1.126 269.374 0.124C189.624 10.124 127.999 77.624 127.999 159.374C127.999 187.499 132.499 213.499 140.874 236.499L17.749 224.124C7.249 222.999 -1.126 232.249 0.124 242.624C10.124 322.374 77.624 383.999 159.374 383.999C187.499 383.999 213.499 379.499 236.499 371.124L224.124 494.249C222.999 504.624 232.249 513.124 242.624 511.874C322.374 501.874 383.999 434.374 383.999 352.624C383.999 324.499 379.499 298.499 371.124 275.499L494.249 287.874C504.749 288.999 513.124 279.749 511.874 269.374C501.874 189.624 434.374 127.999 352.624 127.999ZM255.999 287.999C238.374 287.999 223.999 273.624 223.999 255.999C223.999 238.374 238.374 223.999 255.999 223.999S287.999 238.374 287.999 255.999C287.999 273.624 273.624 287.999 255.999 287.999Z" })
  }
));
FanSolid.displayName = "FanSolid";
var Fan_default = FanSolid;
