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
var Forward_exports = {};
__export(Forward_exports, {
  default: () => Forward_default
});
module.exports = __toCommonJS(Forward_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ForwardLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M181.844 220.938C188.625 226.531 198.719 225.562 204.375 218.734C209.969 211.906 208.969 201.828 202.156 196.219L49.531 70.875C44.031 66.344 37.375 64 30.625 64C14.5 64 0 77.441 0 96.031V415.969C0 434.559 14.5 448 30.625 448C37.375 448 44.031 445.656 49.531 441.125L202.156 315.781C208.969 310.172 209.969 300.094 204.375 293.266C198.719 286.438 188.625 285.469 181.844 291.062L32 416.406V95.594L181.844 220.938ZM500.312 230.844L305.531 70.875C300.031 66.344 293.375 64 286.625 64C276.277 64 256 72.125 256 96.031V415.969C256 439.875 276.277 448 286.625 448C293.375 448 300.031 445.656 305.531 441.125L500.312 281.156C507.75 275.062 512 265.891 512 256S507.75 236.938 500.312 230.844ZM288 416.406V95.594L479.479 256L288 416.406Z" })
  }
));
ForwardLight.displayName = "ForwardLight";
var Forward_default = ForwardLight;
