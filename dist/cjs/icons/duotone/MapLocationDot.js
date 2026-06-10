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
var MapLocationDot_exports = {};
__export(MapLocationDot_exports, {
  default: () => MapLocationDot_default
});
module.exports = __toCommonJS(MapLocationDot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MapLocationDotDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 176.016V429.551C576 436.094 572.018 441.977 565.943 444.406L384 512L192 448L21.943 510.84C11.434 515.043 0 507.305 0 495.984V242.449C0 235.906 3.984 230.023 10.059 227.594L147.627 177.578C157.994 200.875 176.307 227.281 207.648 271.93C219.418 288.695 233.205 308.336 249.336 331.719C258.143 344.434 272.584 352 288 352S317.857 344.434 326.631 331.766C342.795 308.34 356.582 288.695 368.352 271.934C384.555 248.855 397.031 230.934 407.053 215.484L554.059 161.16C564.568 156.957 576 164.695 576 176.016Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 0C221.73 0 168 53.73 168 120C168 168.383 184.855 181.898 275.676 313.547C281.633 322.148 294.367 322.148 300.324 313.547C391.146 181.898 408.002 168.383 408.002 120C408.002 53.73 354.271 0 288 0ZM288 176C261.525 176 240 154.477 240 128S261.525 80 288 80C314.477 80 336 101.523 336 128S314.477 176 288 176Z" })
    ]
  }
));
MapLocationDotDuotone.displayName = "MapLocationDotDuotone";
var MapLocationDot_default = MapLocationDotDuotone;
