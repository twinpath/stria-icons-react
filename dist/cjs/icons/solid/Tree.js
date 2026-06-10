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
var Tree_exports = {};
__export(Tree_exports, {
  default: () => Tree_default
});
module.exports = __toCommonJS(Tree_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TreeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M413.848 447.996H256.021V480C256.021 497.673 241.694 512 224.021 512H224.021C206.349 512 192.023 497.674 192.023 480.002V447.996H33.123C4.624 447.996 -10.563 413.494 8.436 391.586L77.414 311.988H62.216C36.809 311.988 23.065 282.223 39.542 262.883L99.949 191.98H89.215C67.934 191.98 56.341 169.479 69.934 154.666L204.704 8.163C215.1 -3.137 232.934 -3.141 243.334 8.157L378.204 154.666C391.828 169.479 380.204 191.98 358.923 191.98H348.158L408.513 262.894C424.975 282.237 411.229 311.988 385.829 311.988H370.63L439.608 391.586C458.736 413.66 443.057 447.996 413.848 447.996Z" })
  }
));
TreeSolid.displayName = "TreeSolid";
var Tree_default = TreeSolid;
