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
var SquareRss_exports = {};
__export(SquareRss_exports, {
  default: () => SquareRss_default
});
module.exports = __toCommonJS(SquareRss_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareRssThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 320C85.49 320 64 341.49 64 368S85.49 416 112 416S160 394.51 160 368S138.51 320 112 320ZM112 400C94.355 400 80 385.645 80 368S94.355 336 112 336S144 350.355 144 368S129.645 400 112 400ZM72.531 192.031C68.094 191.5 64.344 195.031 64.031 199.469C63.719 203.875 67.063 207.688 71.469 207.969C178.5 215.281 264.719 301.5 272.031 408.531C272.312 412.781 275.812 416 280 416C280.188 416 280.344 416 280.531 415.969C284.938 415.687 288.281 411.875 287.969 407.469C280.156 292.469 187.531 199.844 72.531 192.031ZM72.375 96C68.219 96.312 64.219 99.219 64 103.625S67.188 111.781 71.625 112C232.844 119.75 360.25 247.156 368 408.375C368.219 412.656 371.75 416 376 416H376.375C380.812 415.781 384.219 412.031 384 407.625C375.844 238.125 241.875 104.156 72.375 96ZM384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416Z" })
  }
));
SquareRssThin.displayName = "SquareRssThin";
var SquareRss_default = SquareRssThin;
