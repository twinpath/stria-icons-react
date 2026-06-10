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
var Bong_exports = {};
__export(Bong_exports, {
  default: () => Bong_default
});
module.exports = __toCommonJS(Bong_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BongLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M475.312 228.688L411.312 164.688C405.062 158.438 394.937 158.438 388.688 164.688S382.438 181.063 388.688 187.312L409.375 208L364 253.375C351.125 239.5 336.5 227.375 320 217.875V80C320 71.162 312.836 64 304 64S288 71.162 288 80V236.375L304 245.625C333.875 262.875 356.75 289.25 370.25 320H77.75C91.25 289.25 114.125 262.875 144 245.625L160 236.375V80C160 71.162 152.836 64 144 64S128 71.162 128 80V217.875C70.625 251.125 32 313 32 384C32 427.068 46.295 466.867 70.352 498.863C75.734 506.021 87.295 512 96.25 512H351.625C360.648 512 372.305 505.98 377.723 498.764C401.734 466.785 416 427.023 416 384C416 345 404 308.875 384 278.625L432 230.625L452.688 251.312C458.934 257.559 469.059 257.566 475.312 251.312C481.562 245.062 481.562 234.938 475.312 228.688ZM351.75 480H96.875C75.375 451.875 64 419.25 64 384C64 373.125 65.5 362.5 67.625 352H380.375C382.5 362.5 384 373.125 384 384C384 419.25 372.625 452.75 351.75 480ZM111.955 32H336.045C344.82 32 352 24.82 352 16.045V15.955C352 7.18 344.82 0 336.045 0H111.955C103.18 0 96 7.18 96 15.955V16.045C96 24.82 103.18 32 111.955 32Z" })
  }
));
BongLight.displayName = "BongLight";
var Bong_default = BongLight;
