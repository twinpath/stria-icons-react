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
var MarsStrokeUp_exports = {};
__export(MarsStrokeUp_exports, {
  default: () => MarsStrokeUp_default
});
module.exports = __toCommonJS(MarsStrokeUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarsStrokeUpSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 163.048V144.001H248C252.418 144.001 256 140.423 256 136.001V120.001C256 115.583 252.418 112.001 248 112.001H224V96.001H248.627C265.033 96.001 273.25 76.165 261.65 64.564L200.681 3.596C195.886 -1.197 188.113 -1.197 183.318 3.596L122.349 64.564C110.75 76.165 118.967 96.001 135.373 96.001H160V112.001H136C131.582 112.001 128 115.583 128 120.001V136.001C128 140.423 131.582 144.001 136 144.001H160V163.048C75.099 178.665 11.48 255.063 16.252 345.531C21.035 436.221 98.595 510.67 189.406 511.982C287.795 513.396 368 434.061 368 335.999C368 249.742 305.9 178.11 224 163.048ZM192 431.999C139.064 431.999 96 388.936 96 335.999S139.062 240 192 240C244.933 240 288 283.062 288 335.999S244.933 431.999 192 431.999Z" })
  }
));
MarsStrokeUpSolid.displayName = "MarsStrokeUpSolid";
var MarsStrokeUp_default = MarsStrokeUpSolid;
