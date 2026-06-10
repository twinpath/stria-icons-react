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
var PlaneTail_exports = {};
__export(PlaneTail_exports, {
  default: () => PlaneTail_default
});
module.exports = __toCommonJS(PlaneTail_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneTailRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 464H279.75C266.938 464 254.375 461.656 242.438 457.062L48 382.375V358.063L246.312 307.25C254.75 305.094 263.438 304 272.125 304H488C501.25 304 512 293.25 512 280S501.25 256 488 256H383.262L130.436 9.373C124.396 3.334 116.195 -0.041 107.656 0L31.857 0.361C11.723 0.457 -3.322 18.904 0.635 38.648L60.693 305.254L30.094 313.094C12.375 317.625 0 333.562 0 351.844V387.875C0 404.281 10.281 419.281 25.656 425.219L225.188 501.844C242.625 508.594 261 512 279.75 512H488C501.25 512 512 501.25 512 488S501.25 464 488 464ZM216 352C202.746 352 192 362.744 192 376C192 389.254 202.746 400 216 400H360C373.254 400 384 389.254 384 376C384 362.744 373.254 352 360 352H216Z" })
  }
));
PlaneTailRegular.displayName = "PlaneTailRegular";
var PlaneTail_default = PlaneTailRegular;
