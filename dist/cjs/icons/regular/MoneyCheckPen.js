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
var MoneyCheckPen_exports = {};
__export(MoneyCheckPen_exports, {
  default: () => MoneyCheckPen_default
});
module.exports = __toCommonJS(MoneyCheckPen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoneyCheckPenRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M581.107 140.023L573.314 147.816L545.145 176.232C553.404 176.852 560 183.584 560 192V448C560 456.822 552.822 464 544 464H96C87.178 464 80 456.822 80 448V192C80 183.178 87.178 176 96 176H323.475C325.896 169.9 329.486 164.262 334.197 159.578L366.053 128H96C60.654 128 32 156.654 32 192V448C32 483.346 60.654 512 96 512H544C579.348 512 608 483.346 608 448V192C608 170.527 597.334 151.633 581.107 140.023ZM352 193.66V256H414.34C418.604 256 422.689 254.297 425.693 251.273L550.625 125.25L482.75 57.375L356.727 182.305C353.701 185.312 352 189.398 352 193.66ZM600.5 75.375C610.5 65.375 610.5 49.25 600.5 39.375L568.625 7.5C563.688 2.5 557.188 0 550.672 0S537.625 2.5 532.625 7.5L505.375 34.75L573.25 102.625L600.5 75.375ZM152 400H488C501.25 400 512 389.25 512 376S501.25 352 488 352H152C138.75 352 128 362.75 128 376S138.75 400 152 400ZM152 288H296C309.25 288 320 277.25 320 264S309.25 240 296 240H152C138.75 240 128 250.75 128 264S138.75 288 152 288Z" })
  }
));
MoneyCheckPenRegular.displayName = "MoneyCheckPenRegular";
var MoneyCheckPen_default = MoneyCheckPenRegular;
