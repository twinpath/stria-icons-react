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
var Cat_exports = {};
__export(Cat_exports, {
  default: () => Cat_default
});
module.exports = __toCommonJS(Cat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CatSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M322.625 192C302.375 192 215.75 194 160 278V192C160 139 117 96 64 96C46.375 96 32 110.375 32 128S46.375 160 64 160S96 174.375 96 192V448C96 483.25 124.75 512 160 512H336C344.875 512 352 504.875 352 496V480C352 462.375 337.625 448 320 448H288L416 352V496C416 504.875 423.125 512 432 512H464C472.875 512 480 504.875 480 496V289.875C469.75 292.5 459.125 294.375 448 294.375C386.25 294.375 334.5 250.375 322.625 192ZM480 96H416L352 32V166.375C352 219.375 395 262.375 448 262.375S544 219.375 544 166.375V32L480 96ZM408 176C399.125 176 392 168.875 392 160S399.125 144 408 144S424 151.125 424 160S416.875 176 408 176ZM488 176C479.125 176 472 168.875 472 160S479.125 144 488 144S504 151.125 504 160S496.875 176 488 176Z" })
  }
));
CatSolid.displayName = "CatSolid";
var Cat_default = CatSolid;
