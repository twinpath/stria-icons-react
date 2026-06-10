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
var DiagramSankey_exports = {};
__export(DiagramSankey_exports, {
  default: () => DiagramSankey_default
});
module.exports = __toCommonJS(DiagramSankey_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiagramSankeyThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 224H256C271 224 284 216 291 203L369 61C373 53 381 48 390 48H600C604 48 608 44 608 40S604 32 600 32H390C375 32 362 40 355 53L277 195C273 203 265 208 256 208H40C36 208 32 212 32 216S36 224 40 224ZM608 296C608 292 604 288 600 288H40C36 288 32 292 32 296S36 304 40 304H186C195 304 203 309 207 317L285 459C292 472 305 480 320 480H600C604 480 608 476 608 472S604 464 600 464H320C311 464 303 459 299 451L221 309C220 307 219 306 218 304H600C604 304 608 300 608 296Z" })
  }
));
DiagramSankeyThin.displayName = "DiagramSankeyThin";
var DiagramSankey_default = DiagramSankeyThin;
