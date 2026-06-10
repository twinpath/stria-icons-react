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
var Linode_exports = {};
__export(Linode_exports, {
  default: () => Linode_default
});
module.exports = __toCommonJS(Linode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LinodeBrands = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M366.036,186.867l-59.5,36.871-.838,36.871-29.329-19.273-39.384,24.3c2.238,55.211,2.483,59.271,2.51,59.5l-97.2,65.359L127.214,285.748l108.1-62.01L195.09,197.761l-75.417,38.547L98.723,93.015,227.771,43.574,136.432,0,10.737,39.385,38.39,174.3l41.9,32.681L48.445,222.062,69.394,323.457,98.723,351.11,77.774,363.679l16.76,78.769L160.733,512c-10.8-74.842-11.658-78.641-11.725-78.773l77.925-55.3c16.759-12.57,15.083-10.894,15.083-10.894l.838,24.3,33.519,28.491-.838-77.093,46.927-33.519,26.815-18.435-2.514,36.033,25.139,17.6,6.7-74.579,58.657-43.575Z" })
  }
));
LinodeBrands.displayName = "LinodeBrands";
var Linode_default = LinodeBrands;
