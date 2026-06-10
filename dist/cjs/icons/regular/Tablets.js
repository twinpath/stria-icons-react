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
var Tablets_exports = {};
__export(Tablets_exports, {
  default: () => Tablets_default
});
module.exports = __toCommonJS(Tablets_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TabletsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M593.125 46.832C530.75 -15.549 429.25 -15.674 366.75 46.832S304.25 210.723 366.75 273.229C429.25 335.607 530.625 335.734 593.125 273.229S655.625 109.213 593.125 46.832ZM385.75 99.711L540.25 254.227C439.75 318.732 321 200.471 385.75 99.711ZM574.25 220.223L419.75 65.709C520.25 1.078 639 119.463 574.25 220.223ZM160 191.971C71.625 191.971 0 263.602 0 351.984S71.625 512 160 512S320 440.367 320 351.984S248.375 191.971 160 191.971ZM50.75 375.986H269.25C243.625 492.998 76.375 492.748 50.75 375.986ZM50.75 327.982C76.375 211.098 243.625 211.098 269.25 327.982H50.75Z" })
  }
));
TabletsRegular.displayName = "TabletsRegular";
var Tablets_default = TabletsRegular;
