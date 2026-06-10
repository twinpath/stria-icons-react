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
var Lasso_exports = {};
__export(Lasso_exports, {
  default: () => Lasso_default
});
module.exports = __toCommonJS(Lasso_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LassoSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 0C126.5 0 0 79.625 0 181.25C0 231.125 30.25 277.125 85 311C88.5 313.125 92.375 315.25 96.25 317.375C96.25 318.25 96 319.125 96 320C96 355.375 131.75 384 176 384C176.625 384 177.25 383.875 178 383.875C179.625 389.625 180.5 395.75 180.625 401.75C180.75 414 176 425.75 167.5 434.375C158.875 443.125 147.125 448 135 448H48C39.125 448 32 455.125 32 464V496C32 504.875 39.125 512 48 512H135C194.375 512 243.75 464.75 244.75 405.625C245.125 390.125 242.875 374.75 238 360C254.625 361.75 271.25 362.625 288 362.625C449.5 362.625 576 283 576 181.25C576 79.625 449.5 0 288 0ZM288 298.875C275.25 298.875 262.75 298 250.375 296.875C238.75 273 210 256 176 256C161.75 256 147.625 259.25 134.75 265.375C129.25 262.5 123.5 259.75 118.75 256.75C98.25 244.125 64 217.625 64 181.25C64 118.75 168.75 63.75 288 63.75S512 118.75 512 181.25C512 243.875 407.25 298.875 288 298.875Z" })
  }
));
LassoSolid.displayName = "LassoSolid";
var Lasso_default = LassoSolid;
